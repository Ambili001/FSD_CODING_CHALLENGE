import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  apiUrl:String = 'http://localhost:3000';

  constructor(private http : HttpClient) { }
  getComments()
    {
return this.http.get(`${this.apiUrl}/commentlist`);
    }
}
