import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/user';
import {CrudService} from '../../_services/crud.service';
import {API_URL, CATEGORY, USERS} from '../../_globals/global-variables';
import {ListReq} from '../../_models/requests/ListReq';
import {MatSnackBar} from '@angular/material';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  currentPage: number;
  sizePage: number;
  users: ListReq<User>;
  constructor( private _snackBar: MatSnackBar, private crudService: CrudService) { }

  ngOnInit(): void {
    this.currentPage = 1;
    this.sizePage = 4;
    this.retreiveUsers();
   // this.openSnackBar('test','mouch normal');
  }

  retreiveUsers() {
    let params: any;
    const selectedPage = this.currentPage ;
    params = new HttpParams().set('page', selectedPage.toString())
      .set('perPage', this.sizePage.toString());
    this.crudService.getAllWithParams(API_URL + USERS, params).subscribe(
      (response) => {
        // this.users = response.data.map(x => Object.assign(new User(), x));
        this.users = response;
        this.currentPage = response.meta.current_page;
        console.log('*******************************');
        console.log(this.users);
      },
      (error =>  {
        console.log(error);
      })
    );
  }

  deleteUser(user) {
    this.crudService.delete(API_URL + USERS, user.id).subscribe(res => {
      //alert('nja7');
      user.deleted = 1;
    }, error => {
      //alert('fchel');
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message);
  }
}
