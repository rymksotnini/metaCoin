import {User} from "./user";
import {Offer} from "./offer";


export class Transaction {
  private _id: number;
  private _amount: number;
  private _newTotal: number;
  private _user: User;
  private _offer: Offer;
  private _account: Account;
  private _createdAt: Date;
  private _updatedAt: Date;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  get newTotal(): number {
    return this._newTotal;
  }

  set newTotal(value: number) {
    this._newTotal = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get offer(): Offer {
    return this._offer;
  }

  set offer(value: Offer) {
    this._offer = value;
  }

  get account(): Account {
    return this._account;
  }

  set account(value: Account) {
    this._account = value;
  }


  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(value: Date) {
    this._updatedAt = value;
  }
}
