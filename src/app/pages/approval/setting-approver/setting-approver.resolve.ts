import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {ApiService} from "../../../services/api.service";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";


export interface DepartmentInterface {
  root: any,
  code: string,
  name: string,
  is_default_approver: boolean,
  distance: number,
}

export interface UserProfileInterface {
  is_head: boolean,
  is_approver: boolean,
  department: DepartmentInterface,
}

export interface GetDepartmentApproverInterface {
  id: number,
  department: number,
  order: number,
  userprofile: UserProfileInterface,
}

export interface GetHeadUserListInterface {
  id: number,
  username: string,
  first_name: string,
  email: string,
  userprofile: UserProfileInterface,
}


@Injectable()
export class SettingApproverResolve implements Resolve<GetDepartmentApproverInterface[]> {
  constructor(private apiCall: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GetDepartmentApproverInterface[]> | Promise<GetDepartmentApproverInterface[]> | GetDepartmentApproverInterface[] {
    return this.apiCall.getDepartmentApprover();
  };
}
