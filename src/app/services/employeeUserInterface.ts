import 'rxjs/add/operator/map';
import 'rxjs/add/observable/find';


export interface GetDashboardInterface {
  readonly id: number,
  readonly username: string,
  readonly computer_count: number,
  readonly device_count: number,
  readonly usable_computer_count: number,
  readonly recent_event_count: number,
}
