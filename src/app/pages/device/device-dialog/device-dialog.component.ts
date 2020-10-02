import {Component, Input, OnInit} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import {LocalDataSource} from "ng2-smart-table";
import {DeviceInterface} from "../device.resolve";

@Component({
  selector: 'ngx-device-dialog',
  templateUrl: 'device-dialog.component.html',
  styleUrls: ['device-dialog.component.scss'],
})
export class DeviceDialogComponent implements OnInit {

  @Input() title: string;
  @Input() data: DeviceInterface[];

  settings = {
    actions: false,
    hideSubHeader: true,
    columns: {
      serial: {
        title: 'SERIAL',
        type: 'string',
      },
      registration_date: {
        title: '등록일',
        type: 'date',
      },
      update_date: {
        title: '수정일',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected ref: NbDialogRef<DeviceDialogComponent>) {
  }

  dismiss() {
    this.ref.close();
  }

  ngOnInit(): void {
    this.source.load(this.data);
  }
}
