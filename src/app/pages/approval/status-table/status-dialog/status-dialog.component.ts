import {Component, Input, OnInit} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import {LocalDataSource} from "ng2-smart-table";
import {ApproverInterface} from "../approval-status.resolve";

@Component({
  selector: 'ngx-appover-status-dialog',
  templateUrl: 'status-dialog.component.html',
  styleUrls: ['status-dialog.component.scss'],
})
export class StatusDialogComponent implements OnInit {

  @Input() title: string;
  @Input() data: ApproverInterface[];

  settings = {
    actions: false,
    hideSubHeader: true,
    columns: {
      manager_name: {
        title: '결재자',
        type: 'string',
      },
      status: {
        title: '결재 상태',
        type: 'string',
      },
      update_date: {
        title: '결재일',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected ref: NbDialogRef<StatusDialogComponent>) {
  }

  dismiss() {
    this.ref.close();
  }

  ngOnInit(): void {
    this.source.load(this.data);
  }
}
