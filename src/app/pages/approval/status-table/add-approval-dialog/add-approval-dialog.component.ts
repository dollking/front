import {Component, Input, OnInit} from '@angular/core';
import {NbDateService, NbDialogRef} from '@nebular/theme';
import { DatePipe } from "@angular/common";
import {ApiService} from "../../../../services/api.service";


@Component({
  selector: 'ngx-add-appoval-dialog',
  templateUrl: 'add-approval-dialog.component.html',
  styleUrls: ['add-approval-dialog.component.scss'],
})
export class AddApprovalDialogComponent implements OnInit {

  @Input() title: string;
  @Input() status: string;
  @Input() computerList: string[];
  @Input() data;

  min: Date;
  max: Date;
  text: string;
  startDate;
  endDate;


  constructor(protected ref: NbDialogRef<AddApprovalDialogComponent>,
              protected dateService: NbDateService<Date>,
              private datePipe: DatePipe,
              private apiCall: ApiService) {
    this.min = this.dateService.addDay(this.dateService.today(), 0);
    this.max = this.dateService.addDay(this.dateService.today(), 20);
  }

  dismiss() {
    this.ref.close();
  }

  requestApproval() {
    const tmp_data = {
      'text': this.text,
      'start_date': this.startDate,
      'end_date': this.endDate,
      'computer_id': this.data[this.status],
    };
    this.apiCall.postApproval(tmp_data).subscribe(res => {
      this.ref.close(res);
    }, error => {
      console.log('err');
    })
  }

  ngOnInit(): void {
  }
}
