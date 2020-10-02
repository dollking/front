import {Component, Input, OnInit} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import {LocalDataSource} from "ng2-smart-table";
import {GetApprovalInterface} from "../approval.resolve";
import {ApiService} from "../../../../services/api.service";


@Component({
  selector: 'ngx-appoval-dialog',
  templateUrl: 'approval-dialog.component.html',
  styleUrls: ['approval-dialog.component.scss'],
})
export class ApprovalDialogComponent implements OnInit {

  @Input() title: string;
  @Input() data: GetApprovalInterface;


  source: LocalDataSource = new LocalDataSource();

  constructor(protected ref: NbDialogRef<ApprovalDialogComponent>,
              private apiCall: ApiService) {
  }

  dismiss() {
    this.ref.close();
  }

  setApproval(is_accept) {
    const update_data = {
      'status': is_accept ? 'A' : 'C',
    };
    this.apiCall.patchApprover(this.data['id'], update_data).subscribe( res => {
      this.ref.close(this.data['id']);
    }, error => {
      console.log('error')
    });
  }

  ngOnInit(): void {
  }
}
