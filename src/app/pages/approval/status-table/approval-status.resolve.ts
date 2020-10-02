import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {ApiService} from "../../../services/api.service";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";


export interface ApproverInterface {
  readonly id: number,
  readonly status: string,
  readonly manager_name: string,
  readonly update_date: string,
}

export interface GetApprovalListInterface {
  readonly id: number,
  readonly user: number,
  readonly approver_count: number,
  readonly text: string,
  readonly deadline_date: string,
  readonly start_date: string,
  readonly end_date: string,
  readonly creation_date: string,
  readonly management_date: string,
  readonly approvers: ApproverInterface[]
}


@Injectable()
export class ApprovalStatusResolve implements Resolve<GetApprovalListInterface[]> {
  constructor(private apiCall: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GetApprovalListInterface[]> | Promise<GetApprovalListInterface[]> | GetApprovalListInterface[] {
    return this.apiCall.getApprovalList();
  };
}
