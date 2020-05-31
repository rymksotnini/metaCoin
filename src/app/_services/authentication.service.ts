import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {User} from '../_models/user';
import {Router} from '@angular/router';
import {API_URL, CALLBACK, REDIRECT} from '../_globals/global-variables';
import {LocalService} from './local.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private resourceUrl =  'http://back.clubisti.net/api/';
  private redirectUri = 'http://localhost:4200/';
  private currentUser = new User();

  constructor(private http: HttpClient, private router:Router,
              private localService: LocalService) { }

  public signup(user :User):Observable<HttpResponse<any>>{
    // tslint:disable-next-line:max-line-length
    const creds = { username: user.username,first_name: user.first_name,last_name:user.last_name,email: user.email, password: user.password};
    return this.http.post<any>(API_URL+'/register', JSON.parse(JSON.stringify(creds)),{observe: 'response' });
  }

  public login(user: User): Observable<HttpResponse<any>> {
    const headers = { 'Content-Type':'application/json'};
    const creds = { email: user.email, password: user.password};
    return this.http.post<any>(API_URL+'/login', JSON.stringify(creds) , { headers, observe: 'response' });
  }

  public facebookLogin(id){
    const param = {param : id};
    return this.http.post<any>(API_URL+'/fblogin',JSON.stringify(param),{ observe: 'response' });
  }

  // method get for current user from the backend
  public getUser(){
    return this.http.get(API_URL+'users'+this.getCurrentUser().id);
  }
  public logout(){
    this.currentUser = new User();
    return this.http.post<any>(API_URL+'/logout', {observe: 'response' });
  }
  public isLogged(): boolean{
    return this.localService.getJsonValue('token')!=null;
  }

  public getRedirectUri(): string{
    return this.redirectUri;
  }

  public setCurrentUser(currentUser:User){
    this.currentUser = new User();
    this.currentUser.id =currentUser.id;
    this.currentUser.username =currentUser.username;
    this.currentUser.first_name = currentUser.first_name;
    this.currentUser.last_name = currentUser.last_name;
    this.currentUser.email = currentUser.email;
    this.currentUser.role = currentUser.role;
  }

  public getCurrentUser():User{
    const user :User = this.localService.getJsonValue('currentUser');
    if (user!=null){
      console.log('here');
      this.setCurrentUser(user);
    }
    return this.currentUser;
  }

  public savingUser(result){
    this.currentUser = new User();
    console.log('body',  result.body.user);
    this.localService.setJsonValue('currentUser',JSON.parse(result.body.user));
    this.setCurrentUser(JSON.parse(result.body.user));
    console.log('current user last name ' + this.getCurrentUser().last_name);
  }

  public savingToken(result){
    this.localService.setJsonValue('token',result.body.token);
  }
}
