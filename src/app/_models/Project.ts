import {ProjectStatus} from './enum/ProjectStatus';
import {Category} from './Category';
import {Offer} from './offer';

export class Project{

  private _id: number;

  private _lastUpdatedSum: number;

  private _minDonationAmount: number;

  private _maxDonationAmount: number;

  private _startDate: Date;

  private _endDate: Date;

  private _status: string;

  private _offer: Offer;



  constructor(
    id: number=null,
    lastUpdatedSum: number=null,
    maxDonationAmount: number=null,
    minDonationAmount:number=null,
    status:  string=null,
    startDate: Date=null,
    endDate: Date=null  ) {
    this._id = id;
    this._lastUpdatedSum = lastUpdatedSum;
    this._status = status;
    this._minDonationAmount = maxDonationAmount;
    this._maxDonationAmount = maxDonationAmount;
    this._endDate = endDate;
    this._startDate = startDate;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get lastUpdatedSum(): number {
    return this._lastUpdatedSum;
  }

  set lastUpdatedSum(value: number) {
    this._lastUpdatedSum = value;
  }

  get minDonationAmount(): number {
    return this._minDonationAmount;
  }

  set minDonationAmount(value: number) {
    this._minDonationAmount = value;
  }

  get maxDonationAmount(): number {
    return this._maxDonationAmount;
  }

  set maxDonationAmount(value: number) {
    this._maxDonationAmount = value;
  }

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get offer(): Offer {
    return this._offer;
  }

  set offer(value: Offer) {
    this._offer = value;
  }
}
