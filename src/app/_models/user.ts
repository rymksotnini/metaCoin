import {Profile} from "./profile";


export class User {

  private _id: number;
  private _first_name: string;
  private _last_name: string;
  private _username: string;
  private _email: string;
  private _password: string;
  private _badge = null ;
  private _deleted = false;
  private _profile: Profile  = null;
  private _role = null;
  private _address = null;

  constructor() {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get first_name(): string {
    return this._first_name;
  }

  set first_name(value: string) {
    this._first_name = value;
  }

  get last_name(): string {
    return this._last_name;
  }

  set last_name(value: string) {
    this._last_name = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get badge(): any {
    return this._badge;
  }

  set badge(value: any) {
    this._badge = value;
  }

  get deleted(): boolean {
    return this._deleted;
  }

  set deleted(value: boolean) {
    this._deleted = value;
  }

  get profile(): any {
    return this._profile;
  }

  set profile(value: any) {
    this._profile = value;
  }


  get role(): any {
    return this._role;
  }

  set role(value: any) {
    this._role = value;
  }

  get address(): any {
    return this._address;
  }

  set address(value: any) {
    this._address = value;
  }
}
