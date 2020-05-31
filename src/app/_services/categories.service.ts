import { Injectable } from '@angular/core';
import {Category} from '../_models/Category';
import {HttpParams} from '@angular/common/http';
import {API_URL, CATEGORY} from '../_globals/global-variables';
import {CrudService} from './crud.service';
import {ListReq} from '../_models/requests/ListReq';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categories: ListReq<Category>;
  private _currentPage: number;
  private _sizePage: number;
  private _total: number;

  constructor(private crudService: CrudService) { }

  setCategories(categories){
    this.categories = categories;
  }
  getCategories(){
    return this.categories;
  }


  getTotal(): number {
    return this._total;
  }

  setTotal(value: number) {
    this._total = value;
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

  getCategoriesAPI() {
    let params: any;
    const selectedPage = this._currentPage;
    params = new HttpParams().set('page', selectedPage.toString())
      .set('perPage', this._sizePage.toString());

    this.crudService.getAllWithParams(API_URL + CATEGORY, params).subscribe(
      (response) => {
        this.categories = response;
        console.log(this.categories);
        this._currentPage = this.categories.meta.current_page ;
        this._total = response.meta.total;
      },
      (error =>  {
        console.log(error);
      })
    );
  }

  getCategoriesPagination(page) {
    let params: any;
    this._currentPage = page;
    params = new HttpParams().set('page', this._currentPage.toString())
      .set('perPage', this._sizePage.toString());

    this.crudService.getAllWithParams(API_URL + CATEGORY, params).subscribe(
      (response) => {
        this.categories = response;
        console.log(this.categories);
        this._currentPage = this.categories.meta.current_page ;
        this._total = response.meta.total;
      },
      (error =>  {
        console.log(error);
      })
    );
  }
}
