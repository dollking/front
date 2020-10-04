import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import {ActivatedRoute} from "@angular/router";
import {NbDialogService} from "@nebular/theme";
import {ApproverDialogComponent} from "./approver-dialog/approver-dialog.component";
import {GetDepartmentApproverInterface} from "./setting-approver.resolve";
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'ngx-setting-approver',
  templateUrl: './setting-approver.component.html',
  styleUrls: ['./setting-approver.component.scss'],
})
export class SettingApproverComponent {

  settings = {
    actions: false,
    hideSubHeader: true,
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

  tableData = [];
  data: GetDepartmentApproverInterface[];
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,
              private dialogService: NbDialogService,
              private route: ActivatedRoute,
              private apiCall: ApiService) {
    this.data = this.route.snapshot.data['approverData'];

    for (let key in this.data) {
      this.tableData.push({
        'id': this.data[key]['id'],
        'manager': this.data[key]['manager'],
        'order': this.data[key]['order'],
        'approver': this.data[key]['first_name'] + '(' + this.data[key]['username'] + ')',
        'department': this.data[key]['userprofile']['department']['name'],
      });
    }

    this.source.load(this.tableData);
  }

  showApproverDialog(event): void {
    this.apiCall.getHeadUserList().subscribe(res => {
      console.log(this.source.getElements()['__zone_symbol__value']);
      this.dialogService.open(ApproverDialogComponent, {
        context: {
          title: '결재자 설정',
          data: res,
          currentSet: this.source.getElements()['__zone_symbol__value'],
        },
      }).onClose.subscribe(resetData => {
        if (resetData) {
          this.source.load(resetData);
          this.source.refresh();
        }
      });

    }, error => {
      console.log('err get head user');
    });
  }
}
