import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;

  constructor (private route: ActivatedRoute) {
    const is_head = this.route.snapshot.data['userProfile']['is_head'];
    for (let i in this.menu) {
      if ('hidden' in this.menu[i] && is_head) {
        this.menu[i]['hidden'] = false;
      }
      if ('children' in this.menu[i]) {
        for (let j in this.menu[i]['children']) {
          if ('hidden' in this.menu[i]['children'][j] && is_head) {
            this.menu[i]['children'][j]['hidden'] = false;
          }
        }
      }
    }
  }
}
