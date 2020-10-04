import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import {ActivatedRoute} from "@angular/router";
import {setDateTimeForm} from "../../../services/utils";
import {NbComponentStatus, NbDialogService} from "@nebular/theme";
import {StatusDialogComponent} from "./status-dialog/status-dialog.component";
import {AddApprovalDialogComponent} from "./add-approval-dialog/add-approval-dialog.component";
import {ApiService} from "../../../services/api.service";


@Component({
  selector: 'ngx-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss'],
})
export class StatusTableComponent {

  settings = {
    actions: false,
    columns: {
      management_name: {
        title: '관리명',
        type: 'string',
      },
      creation_date: {
        title: '요청일',
        type: 'string',
      },
      deadline_date: {
        title: '결재 마감일',
        type: 'string',
      },
      start_date: {
        title: '사용 시작일',
        type: 'string',
      },
      end_date: {
        title: '사용 마감일',
        type: 'string',
      },
      status: {
        title: '결제상태',
        type: 'string'
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,
              private dialogService: NbDialogService,
              private route: ActivatedRoute,
              private apiCall: ApiService) {
    const data = this.route.snapshot.data['approvalStatusData'];
    for (let key in data) {
      data[key]['creation_date'] = setDateTimeForm(data[key]['creation_date']);
      data[key]['deadline_date'] = setDateTimeForm(data[key]['deadline_date']);
      data[key]['start_date'] = setDateTimeForm(data[key]['start_date']);
      data[key]['end_date'] = setDateTimeForm(data[key]['end_date']);
      for (let key2 in data[key]['approvers']) {
        data[key]['approvers'][key2]['update_date'] = setDateTimeForm(data[key]['approvers'][key2]['update_date']);
      }

      switch (data[key]['approvers'][data[key]['approvers'].length - 1]['status']) {
        case 'W':
          data[key]['status'] = '대기';
          break;
        case 'A':
          data[key]['status'] = '승인';
          break;
        case 'C':
          data[key]['status'] = '반려';
          break;
      }
    }
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  showApprovalStatus(event) {
    if (event.selected.length) {
      const approver_data = event.selected[0]['approvers'];
      for (let key in approver_data) {
        switch (approver_data[key]['status']) {
          case 'W':
            approver_data[key]['status'] = '대기';
            break;
          case 'A':
            approver_data[key]['status'] = '승인';
            break;
          case 'C':
            approver_data[key]['status'] = '반려';
            break;
        }
      }

      this.dialogService.open(StatusDialogComponent, {
        context: {
          title: '결재 History',
          data: approver_data,
        },
      });
    }
  }

  showAddApproval(event) {
    this.apiCall.getDevice().subscribe(res => {
      const tmp_data = {};
      for (let idx in res) {
        tmp_data[res[idx]['management_name']] = res[idx]['id'];
      }
      const computerList: string[] = Object.keys(tmp_data);

      this.dialogService.open(AddApprovalDialogComponent, {
        context: {
          title: '사용 신청',
          computerList: computerList,
          data: tmp_data,
          status: computerList[0],
        },
      }).onClose.subscribe(addedData => {
        if (addedData) {
          addedData['status'] = '대기';
          this.source.add(addedData);
          this.source.refresh();
        }
      });
    }, error => {

    });
  }
}
