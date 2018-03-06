import { Injectable } from '@angular/core';


// help me sent the reqests to server
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ItemService {

  constructor(private http: Http) {
  }


  add(itemData) {
    return this.http.post('/api/item/add', itemData).map(res => res.json());
  }

}
