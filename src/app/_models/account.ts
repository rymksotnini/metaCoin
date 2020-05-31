import {AccountType} from "./accountType";

export class Account{

  private _id: number;
  private _accountNumber: string;
  private _deleted: boolean;
  private _default: boolean;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _accountType: AccountType;


  get accountNumber(): string {
    return this._accountNumber;
  }

  set accountNumber(value: string) {
    this._accountNumber = value;
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

  get id(): number {
    return this._id;
  }

  // tslint:disable-next-line:adjacent-overload-signatures
  get accountType(): AccountType {
    return this._accountType;
  }

  get deleted(): boolean {
    return this._deleted;
  }

  set deleted(value: boolean) {
    this._deleted = value;
  }

  get default(): boolean {
    return this._default;
  }

  set default(value: boolean) {
    this._default = value;
  }
}
