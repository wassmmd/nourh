import { Component,OnInit } from '@angular/core';


import { MENU_ITEMS_ADMIN } from './pages-admin-menu';
import {MENU_ITEMS_ENTERPRISE} from './pages-enterprise-menu';
import {MENU_ITEMS_STUDENT} from './pages-student-menu';
import { CurUser } from "./all/models/CurUser";
import {Router} from '@angular/router';
import {TokenStorageService} from '../auth/token-storage.service';

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
export class PagesComponent implements OnInit{
  curUser: CurUser;
  menu = [];

  constructor(private tokenStorageService: TokenStorageService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.curUser = this.tokenStorageService.getUser();
    if (this.curUser.roles.includes('ADMIN')) {
      this.menu = MENU_ITEMS_ADMIN;
    }
    if (this.curUser.roles.includes('ENTERPRISE')) {
      this.menu = MENU_ITEMS_ENTERPRISE;
    }
    if (this.curUser.roles.includes('STUDENT'))  {
        this.menu = MENU_ITEMS_STUDENT ;
    }
  }
  }

