import { ICategory } from './../models/icategory';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  constructor(private httpclient :HttpClient) { }

  getAllCategory():Observable<ICategory[]>{

    return this.httpclient.get<ICategory[]>(`${environment.APIBaseURL}/categories`);

  }
  
}
