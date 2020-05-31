import { Injectable } from '@angular/core';
import {ListReq} from "../_models/requests/ListReq";
import {CrudService} from "./crud.service";
import {HttpParams} from "@angular/common/http";
import {ACCOUNT, API_URL, CATEGORY} from "../_globals/global-variables";
import {Account} from "../_models/account";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private accounts: ListReq<Account>;
  private _currentPage: number;
  private _sizePage: number;
  private _total: number;

  constructor(private crudService: CrudService) { }

  setAccounts(accounts){
    this.accounts = accounts;
  }
  getAccounts(){
    return this.accounts;
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

  getAccountsAPI() {
    let params: any;
    const selectedPage = this._currentPage;
    params = new HttpParams().set('page', selectedPage.toString())
      .set('perPage', this._sizePage.toString());
    return this.crudService.getAllWithParams(API_URL + ACCOUNT, params)
  }

  getAccountsPagination(page) {
    let params: any;
    this._currentPage = page;
    params = new HttpParams().set('page', this._currentPage.toString())
      .set('perPage', this._sizePage.toString());

    this.crudService.getAllWithParams(API_URL + ACCOUNT, params).subscribe(
      (response) => {
        this.accounts = response;
        console.log(this.accounts);
        this._currentPage = this.accounts.meta.current_page ;
        this._total = response.meta.total;
      },
      (error =>  {
        console.log(error);
      })
    );
  }
}
