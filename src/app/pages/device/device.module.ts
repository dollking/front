import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule, NbTreeGridModule, NbInputModule, NbCheckboxModule, NbPopoverModule, NbTooltipModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { ChartModule } from 'angular2-chartjs';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {DeviceTableComponent} from "./device-table/device-table.component";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {DeviceComponent} from "./device.component";
import {DeviceResolve} from "./device.resolve";
import {ApiService} from "../../services/api.service";
import {DeviceDialogComponent} from "./device-dialog/device-dialog.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,

    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    DeviceComponent,
    DeviceTableComponent,
    DeviceDialogComponent
  ],
  providers: [
    ApiService,
    DeviceResolve,
  ],
})
export class DeviceModule { }
