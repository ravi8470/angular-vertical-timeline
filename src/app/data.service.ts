import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  send(data: string):Observable<any> {
    return this.http.post('http://localhost:3000/data',{data});
  }
  getData():Observable<any>{
    return this.http.get('http://localhost:3000/data')
  }
}
