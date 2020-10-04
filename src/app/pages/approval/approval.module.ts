import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule, NbSelectModule,
  NbTreeGridModule
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ApprovalRoutingModule, routedComponents } from './approval-routing.module';
import {ApprovalStatusResolve} from "./status-table/approval-status.resolve";
import {StatusDialogComponent} from "./status-table/status-dialog/status-dialog.component";
import {ApprovalResolve} from "./approval-table/approval.resolve";
import {ApprovalDialogComponent} from "./approval-table/approval-dialog/approval-dialog.component";
import {FormsModule} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {AddApprovalDialogComponent} from "./status-table/add-approval-dialog/add-approval-dialog.component";
import {SettingApproverComponent} from "./setting-approver/setting-approver.component";
import {SettingApproverResolve} from "./setting-approver/setting-approver.resolve";
import {ApproverDialogComponent} from "./setting-approver/approver-dialog/approver-dialog.component";


@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    ApprovalRoutingModule,
    Ng2SmartTableModule,
    NbButtonModule,
    FormsModule,
    NbDatepickerModule,
    NbSelectModule,
  ],
  declarations: [
    ...routedComponents,
    StatusDialogComponent,
    ApprovalDialogComponent,
    AddApprovalDialogComponent,
    SettingApproverComponent,
    ApproverDialogComponent,
  ],
  providers: [
    ApiService,
    ApprovalStatusResolve,
    ApprovalResolve,
    SettingApproverResolve,
  ],
})
export class ApprovalModule { }
