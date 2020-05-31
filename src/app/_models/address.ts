import {Country} from './country';

export class Address {

  private _id: number;
  private _street: string;
  private _street2: string;
  private _city: string;
  private _postal_code: string;
  private _country: Country;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get street2(): string {
    return this._street2;
  }

  set street2(value: string) {
    this._street2 = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }


  get country(): Country {
    return this._country;
  }

  set country(value: Country) {
    this._country = value;
  }

  get postal_code(): string {
    return this._postal_code;
  }

  set postal_code(value: string) {
    this._postal_code = value;
  }
}
