import {Transaction} from './Transaction';

export class Complain {
  private _id: number;
  private _body: string;
  private _reason: string;
  private _transaction: Transaction;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _status: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get body(): string {
    return this._body;
  }

  set body(value: string) {
    this._body = value;
  }

  get reason(): string {
    return this._reason;
  }

  set reason(value: string) {
    this._reason = value;
  }

  get transaction(): Transaction {
    return this._transaction;
  }

  set transaction(value: Transaction) {
    this._transaction = value;
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

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }
}
