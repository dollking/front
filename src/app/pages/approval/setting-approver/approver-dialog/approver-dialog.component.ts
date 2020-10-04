import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import {LocalDataSource} from "ng2-smart-table";
import {GetHeadUserListInterface} from "../setting-approver.resolve";
import {ApiService} from "../../../../services/api.service";
import {SmartTableData} from "../../../../@core/data/smart-table";


@Component({
  selector: 'ngx-appover-dialog',
  templateUrl: 'approver-dialog.component.html',
  styleUrls: ['approver-dialog.component.scss'],
})
export class ApproverDialogComponent implements OnInit {

  @Input() title: string;
  @Input() data: GetHeadUserListInterface[];
  @Input() currentSet;
  status;

  settings = {
    actions: {
      edit: false,
    },
    hideSubHeader: true,
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      order: {
        title: '순서',
        type: 'string',
      },
      approver: {
        title: '결재자',
        type: 'string',
      },
      department: {
        title: '부서',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected ref: NbDialogRef<ApproverDialogComponent>,
              private apiCall: ApiService) {
  }

  dismiss() {
    this.ref.close();
  }

  onDeleteConfirm(event): void {
    this.source.remove(event['data']);
    const tmp_data = this.source.getElements()['__zone_symbol__value'];
    for (let i in tmp_data) {
      tmp_data[i]['order'] = Number(i) + 1;
    }
  }

  onAddConfirm(): void {
    this.source.add({
      'id': this.status.id,
      'manager': this.status['id'],
      'order': this.source.count() + 1,
      'approver': this.status.first_name + '(' + this.status.username + ')',
      'department': this.status.user_profile.department.name,
    });
    this.source.refresh();
  }

  setApprover(): void {
    const requestData = [];
    const tmpData = this.source.getElements()['__zone_symbol__value'];
    for (let i in tmpData) {
      requestData.push({
        'order': tmpData[i]['order'],
        'manager': tmpData[i]['manager'],
      })
    }
    this.apiCall.postHeadUser(requestData).subscribe( (res) => {
      this.ref.close(tmpData);
    }, error => {
      console.log('err post head user');
    })
  }

  ngOnInit(): void {
    this.source.load(this.currentSet);
    this.status = this.data[0];
  }
}
