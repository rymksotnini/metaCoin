
export class Category {

  id:number;

  name: string;

  type: string;

  deleted: boolean;

  private _created_at: Date;

  private _updated_at: Date;


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
}
