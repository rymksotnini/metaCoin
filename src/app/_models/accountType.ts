export class AccountType{
  private _id: number;
  private _name: string;

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

  get created_at(): Date {
    return this._created_at;
  }

  set created_at(value: Date) {
    this._created_at = value;
  }

  get updated_at(): Date {
    return this._updated_at;
  }

  set updated_at(value: Date) {
    this._updated_at = value;
  }

  private _created_at: Date;
  private _updated_at: Date;
}
