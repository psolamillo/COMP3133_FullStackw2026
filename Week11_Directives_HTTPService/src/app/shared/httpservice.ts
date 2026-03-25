import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HTTPService {

  private readonly httpClient = inject(HttpClient)

  private API_BASE_URL = "https://dummyjson.com/products"

  public getProducts(): Observable<any>{
    return this.httpClient.get(this.API_BASE_URL)
  }

  public getProductById(id: Number) : Observable<any>{
    return this.httpClient.get(`${this.API_BASE_URL}/${id}`)
  }

  public createProduct(newProduct : any) : Observable<any>{
    return this.httpClient.post(`${this.API_BASE_URL}/add`, newProduct)
  }

  public updateProduct(id: Number, updatedProduct : any) : Observable<any>{
    return this.httpClient.put(`${this.API_BASE_URL}/${id}`, updatedProduct)
  }

  public deleteProduct(id: Number) : Observable<any>{
    return this.httpClient.delete(`${this.API_BASE_URL}/${id}`)
  }
}
