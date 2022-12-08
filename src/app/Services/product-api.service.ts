import { IProduct } from './../models/iproduct';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private httpOption = {};

  constructor(private httpclient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    }
  }

  getAllProds(): Observable<IProduct[]> {

    return this.httpclient.get<IProduct[]>(`${environment.APIBaseURL}/products`);

  }

  getProdsByCatID(catID: number): Observable<IProduct[]> {

    return this.httpclient.get<IProduct[]>(`${environment.APIBaseURL}/products?Cateogryid=${catID}`)

  }

  getProdsByID(prodID: number): Observable<IProduct> {

    return this.httpclient.get<IProduct>(`${environment.APIBaseURL}/products/${prodID}`)

  }

  addNewProd(prod: IProduct): Observable<IProduct> {

    return this.httpclient.post<IProduct>(`${environment.APIBaseURL}/products`,JSON.stringify(prod), this.httpOption);
    
  }

  updateProd(prodID:any): Observable<IProduct>{
    return this.httpclient.put<IProduct>(`${environment.APIBaseURL}/products/${prodID}`, this.httpOption);

  }

  deleteProd(prodID: any): Observable<IProduct>{
    return this.httpclient.delete<IProduct>(`${environment.APIBaseURL}/products/${prodID}`, this.httpOption);

  }


}
