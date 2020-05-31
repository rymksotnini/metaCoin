import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/admin/landing', title: 'Landing',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/admin/variable', title: 'Setting',  icon:'ni-settings text-pink', class: '' },
  { path: '/admin/charity', title: 'Charity',  icon:' ni-money-coins text-orange', class: '' },
  { path: '/admin/users', title: 'Users',  icon:'ni-single-02 text-red', class: '' },
];


@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: true,
    sub3: true
  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }


  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

  collapse(value: string) {

    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = true;
      } else {
        this.openMap[key] = !this.openMap[key];
      }
    }
  }

}
