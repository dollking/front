import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {GetDashboardInterface} from "../services/employeeUserInterface";
import {ApiService} from "../services/api.service";
import {Observable} from "rxjs";

import 'rxjs/add/operator/map'

export interface getUserAuthorityInterface {
  is_superuser: boolean,
  is_head: boolean,
  is_approver: boolean,
}


@Injectable()
export class PageMenuResolve implements Resolve<getUserAuthorityInterface> {
  constructor(private apiCall: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<getUserAuthorityInterface> | Promise<getUserAuthorityInterface> | getUserAuthorityInterface {
    return this.apiCall.getUserAuthority();
    };
}
