import {Category} from './Category';

export class Offer {
  private _id: number;

  private _name: string;

  private _amount: number;

  private _shortDescription: string;

  private _longDescription: string;

  private _createdAt: Date;

  private _updatedAt: Date;

  private _deleted: boolean;

  private _largeImagePath: string;

  private _shortImagePath: string;

  private _categories: Category[];

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  get shortDescription(): string {
    return this._shortDescription;
  }

  set shortDescription(value: string) {
    this._shortDescription = value;
  }

  get longDescription(): string {
    return this._longDescription;
  }

  set longDescription(value: string) {
    this._longDescription = value;
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

  get deleted(): boolean {
    return this._deleted;
  }

  set deleted(value: boolean) {
    this._deleted = value;
  }

  get largeImagePath(): string {
    return this._largeImagePath;
  }

  set largeImagePath(value: string) {
    this._largeImagePath = value;
  }

  get shortImagePath(): string {
    return this._shortImagePath;
  }

  set shortImagePath(value: string) {
    this._shortImagePath = value;
  }

  get categories(): Category[] {
    return this._categories;
  }

  set categories(value: Category[]) {
    this._categories = value;
  }
}
