import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ChartsService {

  constructor(private http: HttpClient) { }

  getJSON(date:any, slot:any): Observable<any> {
    return this.http.get('http://localhost:8010/api/v1/route' + "?" + "date=" + date + "&" + "slotType=" + slot);
  }
}
