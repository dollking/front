import {Component} from '@angular/core';
import {NbLoginComponent, NbTokenStorage} from '@nebular/auth';


@Component({
  selector: 'ngx-username-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class NgxLoginComponent extends NbLoginComponent {

  ngOnInit() {

  }
}
