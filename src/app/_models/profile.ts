import {Address} from "./address";
import {Badge} from "./badge";

export class Profile {

  private _id: number;
  private _balance: number;
  private _totalDonatedAmount: number;
  private _birthDate: Date;
  private _gender: string;
  private _imageUrl: string;
  private _phoneNumber: string;
  private _badge: Badge;
  private _address: Address;
  private _status: string;
  private _createdAt: Date;
  private _updatedAt: Date;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    this._balance = value;
  }

  get totalDonatedAmount(): number {
    return this._totalDonatedAmount;
  }

  set totalDonatedAmount(value: number) {
    this._totalDonatedAmount = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this._birthDate = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get badge(): Badge {
    return this._badge;
  }

  set badge(value: Badge) {
    this._badge = value;
  }

  get address(): Address {
    return this._address;
  }

  set address(value: Address) {
    this._address = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
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
