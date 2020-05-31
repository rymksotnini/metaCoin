
export class Badge {

  private _id:number;

  private _name: string;

  private _lower_bond:number;
  private _upper_bond: number;

  private _created_at: Date;

  private _updated_at: Date;

  private _deleted: boolean;

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

  get lowerBond(): number {
    return this._lower_bond;
  }

  set lowerBond(value: number) {
    this._lower_bond = value;
  }

  get upperBond(): number {
    return this._upper_bond;
  }

  set upperBond(value: number) {
    this._upper_bond = value;
  }



  get createdAt(): Date {
    return this._created_at;
  }

  set createdAt(value: Date) {
    this._created_at = value;
  }

  get updatedAt(): Date {
    return this._updated_at;
  }

  set updatedAt(value: Date) {
    this._updated_at = value;
  }


  get deleted(): boolean {
    return this._deleted;
  }

  set deleted(value: boolean) {
    this._deleted = value;
  }
}
