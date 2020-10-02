import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import {ActivatedRoute} from "@angular/router";
import {DeviceDialogComponent} from "../../device/device-dialog/device-dialog.component";
import {NbDialogService} from "@nebular/theme";
import {ApprovalDialogComponent} from "./approval-dialog/approval-dialog.component";
import {setDateTimeForm} from "../../../services/utils";
import {DialogNamePromptComponent} from "../../modal-overlays/dialog/dialog-name-prompt/dialog-name-prompt.component";

@Component({
  selector: 'ngx-approval-table',
  templateUrl: './approval-table.component.html',
  styleUrls: ['./approval-table.component.scss'],
})
export class ApprovalTableComponent {

  settings = {
    actions: false,
    columns: {
      requester_name: {
        title: '신청인',
        type: 'string',
      },
      management_name: {
        title: '물품 관리명',
        type: 'string',
      },
      request_date: {
        title: '신청일',
        type: 'string',
      },
      deadline_date: {
        title: '결재마감일',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,
              private dialogService: NbDialogService,
              private route: ActivatedRoute) {
    const data = this.route.snapshot.data['approvalData'];

    for (let key in data) {
      data[key]['request_date'] = setDateTimeForm(data[key]['request_date']);
      data[key]['deadline_date'] = setDateTimeForm(data[key]['deadline_date']);
      data[key]['start_date'] = setDateTimeForm(data[key]['start_date']);
      data[key]['end_date'] = setDateTimeForm(data[key]['end_date']);
    }

    this.source.load(data);
  }

  showApprovalDialog(event): void {
    if (event.selected.length) {
      this.dialogService.open(ApprovalDialogComponent, {
        context: {
          title: event.selected[0]['management_name'] + ' 사용 요청',
          data: event.selected[0],
        },
      }).onClose.subscribe(id => {
        for (let key in this.source['data']) {
          if (this.source['data'][key]['id'] == id) {
            this.source.remove(this.source['data'][key]);
            break;
          }
        }
      });
    }
  }
}
