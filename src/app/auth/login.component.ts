import {ChangeDetectorRef, Component} from '@angular/core';
import {NbAuthService, NbLoginComponent} from '@nebular/auth';
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-username-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class NgxLoginComponent extends NbLoginComponent {
}
