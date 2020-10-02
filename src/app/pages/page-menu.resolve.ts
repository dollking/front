import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {GetDashboardInterface} from "../services/employeeUserInterface";
import {ApiService} from "../services/api.service";
import {Observable} from "rxjs";

import 'rxjs/add/operator/map'

export interface GetUserProfileInterface {
  is_head: boolean,
  is_approver: boolean,
}


@Injectable()
export class PageMenuResolve implements Resolve<GetUserProfileInterface> {
  constructor(private apiCall: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GetUserProfileInterface> | Promise<GetUserProfileInterface> | GetUserProfileInterface {
    return this.apiCall.getUserProfile();
    };
}
