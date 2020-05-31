import { Injectable } from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {API_URL, BADGE, CATEGORY} from '../_globals/global-variables';
import {CrudService} from './crud.service';
import {ListReq} from '../_models/requests/ListReq';
import {Badge} from '../_models/badge';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  private badges: ListReq<Badge>;
  private _currentPage: number;
  private _sizePage: number;
  private _total: number;

  constructor(private crudService: CrudService) { }


  getTotal(): number {
    return this._total;
  }

  setTotal(value: number) {
    this._total = value;
  }

  setBadges(badges){
    this.badges = badges;
  }
  getBadges(){
    return this.badges;
  }


  getCurrentPage(): number {
    return this._currentPage;
  }

  setCurrentPage(value: number) {
    this._currentPage = value;
  }

  getSizePage(): number {
    return this._sizePage;
  }

  setSizePage(value: number) {
    this._sizePage = value;
  }

  getBadgesAPI() {
    let params: any;
    const selectedPage = this._currentPage;
    params = new HttpParams().set('page', selectedPage.toString())
      .set('perPage', this._sizePage.toString());


    this.crudService.getAllWithParams(API_URL + BADGE, params).subscribe(
      (response) => {
        this.badges = response;
        console.log(this.badges);
        this._currentPage = this.badges.meta.current_page ;
        this._total = response.meta.total;
      },
      (error =>  {
        console.log(error);
      })
    );
  }

  getBadgesPagination(page) {

    let params: any;
    this._currentPage = page;
    params = new HttpParams().set('page', this._currentPage.toString())
      .set('perPage', this._sizePage.toString());


    this.crudService.getAllWithParams(API_URL + BADGE, params).subscribe(
      (response) => {
        this.badges = response;
        console.log(this.badges);
        this._currentPage = this.badges.meta.current_page ;
        this._total = response.meta.total;
      },
      (error =>  {
        console.log(error);
      })
    );
  }
}
