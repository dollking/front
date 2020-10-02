import {Component} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

import {SmartTableData} from '../../../@core/data/smart-table';
import {ActivatedRoute} from "@angular/router";
import {NbDialogService} from "@nebular/theme";
import {ApiService} from "../../../services/api.service";
import {setDateTimeForm} from '../../../services/utils'
import {StatusDialogComponent} from "../../approval/status-table/status-dialog/status-dialog.component";
import {DeviceDialogComponent} from "../device-dialog/device-dialog.component";

@Component({
  selector: 'ngx-device-table',
  templateUrl: './device-table.component.html',
  styleUrls: ['./device-table.component.scss'],
})
export class DeviceTableComponent {
  settings = {
    actions: {
      edit: true,
      add: false,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      ip_address: {
        title: 'IP 주소',
        type: 'string',
        editable: false,
      },
      name: {
        title: '컴퓨터 이름',
        type: 'string',
        editable: false,
      },
      port_count: {
        title: '포트 개수',
        type: 'number',
        editable: false,
      },
      management_name: {
        title: '장비 관리명',
        type: 'string',
      },
      registration_date: {
        title: '등록일',
        type: 'date',
        editable: false,
      },
      update_date: {
        title: '수정일',
        type: 'string',
        editable: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private route: ActivatedRoute,
              private dialogService: NbDialogService,
              private apiCall: ApiService) {
    const data = this.route.snapshot.data['deviceData'];
    for (let key1 in data) {
      data[key1]['registration_date'] = setDateTimeForm(data[key1]['registration_date']);
      data[key1]['update_date'] = setDateTimeForm(data[key1]['update_date']);
      for (let key2 in data[key1]['devices']) {
        data[key1]['devices'][key2]['registration_date'] = setDateTimeForm(data[key1]['devices'][key2]['registration_date']);
        data[key1]['devices'][key2]['update_date'] = setDateTimeForm(data[key1]['devices'][key2]['update_date']);
      }
    }
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('선택한 장비를 관리 목록에서 제외하시겠습니까?')) {
      const updateData = {'user': null};
      this.apiCall.patchDevice(event.data['id'], updateData).subscribe(res => {
        event.confirm.resolve();
      }, error => {
        console.log('error');
      });
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('선택한 장비의 관리명을 변경하시겠습니까?')) {
      const updateData = {'management_name': event['newData']['management_name']};
      this.apiCall.patchDevice(event.data['id'], updateData).subscribe(res => {
        event.confirm.resolve();
      }, error => {
        console.log('error');
      });
    } else {
      event.confirm.reject();
    }
  }

  showSetDevice(event) {
    if (event.selected.length) {
      this.dialogService.open(DeviceDialogComponent, {
        context: {
          title: '장비(MiQii) 목록',
          data: event.selected[0]['devices'],
        },
      });
    }
  }
}
