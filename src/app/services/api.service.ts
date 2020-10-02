import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {GetDashboardInterface} from "./employeeUserInterface";
import {GetDeviceInterface} from "../pages/device/device.resolve";
import {GetUserProfileInterface} from "../pages/page-menu.resolve"
import {ApproverInterface, GetApprovalListInterface} from "../pages/approval/status-table/approval-status.resolve";
import {GetApprovalInterface} from "../pages/approval/approval-table/approval.resolve";
import {NbTokenStorage} from "@nebular/auth";


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
              private token: NbTokenStorage) {
    this.domain = 'http://203.246.113.171:8000/api/v1';
    this.header = new HttpHeaders();
  }

  public getDashboard() {
    let id = this.token.get()['payload']['user_id'];
    let uri = `${this.domain}/employee/user/${id}/dashboard/`;  //  test code
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + this.token.get()['token'],
    });
    return this.http.get<GetDashboardInterface>(uri, {headers: header});
  }

  public getUserProfile() {
    let id = this.token.get()['payload']['user_id'];
    let uri = `${this.domain}/employee/user/${id}/profile/`;  //  test code
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + this.token.get()['token'],
    });
    return this.http.get<GetUserProfileInterface>(uri, {headers: header});
  }

  public getDevice() {
    let uri = `${this.domain}/employee/computer/`;
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + this.token.get()['token'],
    });
    return this.http.get<GetDeviceInterface[]>(uri, {headers: header});
  }

  public patchDevice(id: number, data) {
    let uri = `${this.domain}/employee/computer/${id}/`;
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + this.token.get()['token'],
    });
    return this.http.patch<GetDeviceInterface[]>(uri, data,{headers: header});
  }

  public getApprovalList() {
    let uri = `${this.domain}/employee/approval/`;
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + this.token.get()['token'],
    });
    return this.http.get<GetApprovalListInterface[]>(uri, {headers: header});
  }

  public getApproval() {
    let uri = `${this.domain}/employee/approval/approval/`;
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + this.token.get()['token'],
    });
    return this.http.get<GetApprovalInterface[]>(uri, {headers: header});
  }

  public patchApprover(id: number, data) {
    let uri = `${this.domain}/employee/approval/${id}/approver/`;
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + this.token.get()['token'],
    });
    return this.http.patch<ApproverInterface>(uri, data, {headers: header});
  }

  public postApproval(data) {
    let uri = `${this.domain}/employee/approval/`;
    let params = new HttpParams();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + this.token.get()['token'],
    });
    return this.http.post<GetApprovalInterface>(uri, data, {headers: header});
  }
}
