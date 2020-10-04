import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovalComponent } from './approval.component';
import {ApprovalTableComponent} from "./approval-table/approval-table.component";
import {StatusTableComponent} from "./status-table/status-table.component";
import {ApprovalStatusResolve} from "./status-table/approval-status.resolve";
import {ApprovalResolve} from "./approval-table/approval.resolve";
import {SettingApproverComponent} from "./setting-approver/setting-approver.component";
import {SettingApproverResolve} from "./setting-approver/setting-approver.resolve";

const routes: Routes = [{
  path: '',
  component: ApprovalComponent,
  children: [
    {
      path: 'status',
      component: StatusTableComponent,
      resolve: {
        approvalStatusData: ApprovalStatusResolve,
      }
    },
    {
      path: 'approval',
      component: ApprovalTableComponent,
      resolve: {
        approvalData: ApprovalResolve,
      }
    },
    {
      path: 'approver',
      component: SettingApproverComponent,
      resolve: {
        approverData: SettingApproverResolve,
      }
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovalRoutingModule { }

export const routedComponents = [
  ApprovalComponent,
  ApprovalTableComponent,
  StatusTableComponent,
];
