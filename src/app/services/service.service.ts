import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }
  
  getHome(nit: number): Observable<any>{
    const headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      'Content-Type':'application/json',
      // 'Access-Control-Allow-Headers':'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });
    return this._http.post(`${this.url}/flotas?nit=${nit}`, {'headers':headers})
  };
}


