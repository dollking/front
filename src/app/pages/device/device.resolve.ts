import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";


export  interface DeviceInterface {
  readonly id: number,
  readonly serial: string,
  readonly registration_date: string,
  readonly update_date: string,
}

export interface GetDeviceInterface {
  readonly id: number,
  readonly ip_address: string,
  readonly name: number,
  readonly port_count: number,
  readonly management_name: string,
  readonly registration_date: string,
  readonly update_date: string,
  readonly devices: DeviceInterface[]
}


@Injectable()
export class DeviceResolve implements Resolve<GetDeviceInterface[]> {
  constructor(private apiCall: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GetDeviceInterface[]> | Promise<GetDeviceInterface[]> | GetDeviceInterface[] {
    return this.apiCall.getDevice();
    };
}
