import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {GetDashboardInterface} from "./employeeUserInterface";
import {GetDeviceInterface} from "../pages/device/device.resolve";
import {getUserAuthorityInterface} from "../pages/page-menu.resolve"
import {ApproverInterface, GetApprovalListInterface} from "../pages/approval/status-table/approval-status.resolve";
import {GetApprovalInterface} from "../pages/approval/approval-table/approval.resolve";
import {NbTokenStorage} from "@nebular/auth";
import {Router} from "@angular/router";
import {GetDepartmentApproverInterface, GetHeadUserListInterface} from "../pages/approval/setting-approver/setting-approver.resolve";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private domain = '';
  private header;

  constructor(private http: HttpClient,
              private token: NbTokenStorage,
              private router: Router) {
    this.domain = 'http://203.246.113.171:8000/api/v1';
    this.header = new HttpHeaders();
  }

  public validateToken() {
    let token = this.token.get();
    if (!token.isValid()) {
      return {'validate': false, 'token': '', 'payload': {}}
    }
    return {'validate': true, 'token': token['token'], 'payload': token.getPayload()}
  }

  public getDashboard() {
    let checkResult = this.validateToken();
    if (!checkResult['validate']) {
      this.router.navigate(['auth']);
    }
    let id = checkResult['payload']['user_id'];
    let uri = `${this.domain}/employee/user/${id}/dashboard/`;  //  test code
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + checkResult['token'],
    });
    return this.http.get<GetDashboardInterface>(uri, {headers: header});
  }

  public getUserAuthority() {
    let checkResult = this.validateToken();
    if (!checkResult['validate']) {
      this.router.navigate(['auth']);
    }
    let id = checkResult['payload']['user_id'];
    let uri = `${this.domain}/employee/user/${id}/authority/`;  //  test code
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + checkResult['token'],
    });
    return this.http.get<getUserAuthorityInterface>(uri, {headers: header});
  }

  public getDevice() {
    let checkResult = this.validateToken();
    if (!checkResult['validate']) {
      this.router.navigate(['auth']);
    }
    let uri = `${this.domain}/employee/computer/`;
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + checkResult['token'],
    });
    return this.http.get<GetDeviceInterface[]>(uri, {headers: header});
  }

  public patchDevice(id: number, data) {
    let checkResult = this.validateToken();
    if (!checkResult['validate']) {
      this.router.navigate(['auth']);
    }
    let uri = `${this.domain}/employee/computer/${id}/`;
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + checkResult['token'],
    });
    return this.http.patch<GetDeviceInterface[]>(uri, data,{headers: header});
  }

  public getApprovalList() {
    let checkResult = this.validateToken();
    if (!checkResult['validate']) {
      this.router.navigate(['auth']);
    }
    let uri = `${this.domain}/employee/approval/`;
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + checkResult['token'],
    });
    return this.http.get<GetApprovalListInterface[]>(uri, {headers: header});
  }

  public getApproval() {
    let checkResult = this.validateToken();
    if (!checkResult['validate']) {
      this.router.navigate(['auth']);
    }
    let uri = `${this.domain}/employee/approval/approval/`;
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + checkResult['token'],
    });
    return this.http.get<GetApprovalInterface[]>(uri, {headers: header});
  }

  public patchApprover(id: number, data) {
    let checkResult = this.validateToken();
    if (!checkResult['validate']) {
      this.router.navigate(['auth']);
    }
    let uri = `${this.domain}/employee/approval/${id}/decision/`;
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + checkResult['token'],
    });
    return this.http.patch<ApproverInterface>(uri, data, {headers: header});
  }

  public postApproval(data) {
    let checkResult = this.validateToken();
    if (!checkResult['validate']) {
      this.router.navigate(['auth']);
    }
    let uri = `${this.domain}/employee/approval/`;
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + checkResult['token'],
    });
    return this.http.post<GetApprovalInterface>(uri, data, {headers: header});
  }

  public getDepartmentApprover() {
    let checkResult = this.validateToken();
    if (!checkResult['validate']) {
      this.router.navigate(['auth']);
    }
    let uri = `${this.domain}/employee/approval/approver/`;
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + checkResult['token'],
    });
    return this.http.get<GetDepartmentApproverInterface[]>(uri, {headers: header});
  }

  public getHeadUserList() {
    let checkResult = this.validateToken();
    if (!checkResult['validate']) {
      this.router.navigate(['auth']);
    }
    let uri = `${this.domain}/employee/user/head/`;
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + checkResult['token'],
    });
    return this.http.get<GetHeadUserListInterface[]>(uri, {headers: header});
  }

  public postHeadUser(data) {
    let checkResult = this.validateToken();
    if (!checkResult['validate']) {
      this.router.navigate(['auth']);
    }
    let uri = `${this.domain}/employee/approval/approver/`;
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + checkResult['token'],
    });
    return this.http.post<GetHeadUserListInterface[]>(uri, data, {headers: header});
  }
}
