import {Meta} from '../shared/pageable';


export class ListReq<T> {
  data: T[];
  meta: Meta;

}
