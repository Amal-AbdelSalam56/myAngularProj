import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Iuser } from './../models/iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private httpOption = {};

  constructor(private httpclient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'appliaction/json'

      })
    }
  }

  addNewUser(user: Iuser): Observable<Iuser> {

    return this.httpclient.post<Iuser>(`${environment.APIBaseURL}/users`,JSON.stringify(user), this.httpOption);
    
  }
}
