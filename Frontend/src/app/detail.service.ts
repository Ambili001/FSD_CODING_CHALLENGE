import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DetailService {
  apiUrl:String = 'http://localhost:3000';

  constructor(private http : HttpClient) { }
  getDetails()
    {
return this.http.get(`${this.apiUrl}/detaillist`);
    }
  
}
