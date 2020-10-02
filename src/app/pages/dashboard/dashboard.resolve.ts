import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {GetDashboardInterface} from "../../services/employeeUserInterface";
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";

import 'rxjs/add/operator/map'


@Injectable()
export class DashboardResolve implements Resolve<GetDashboardInterface> {
  constructor(private apiCall: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GetDashboardInterface> | Promise<GetDashboardInterface> | GetDashboardInterface {
    return this.apiCall.getDashboard();
    };
}
