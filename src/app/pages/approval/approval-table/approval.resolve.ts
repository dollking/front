import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {ApiService} from "../../../services/api.service";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";


export interface GetApprovalInterface {
  readonly id: number,
  readonly approval: number,
  readonly status: string,
  readonly order: number,
  readonly update_date: string,
  readonly manager_name: string,
  readonly requester_name: string,
  readonly text: string,
  readonly request_date: string,
  readonly deadline_date: string,
  readonly start_date: string,
  readonly end_date: string,
}


@Injectable()
export class ApprovalResolve implements Resolve<GetApprovalInterface[]> {
  constructor(private apiCall: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GetApprovalInterface[]> | Promise<GetApprovalInterface[]> | GetApprovalInterface[] {
    return this.apiCall.getApproval();
  };
}
