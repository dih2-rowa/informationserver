import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product, ProductPage} from '../models/Products'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient, private router: Router) { }

  baseUrl = environment.baseUrl;
  get_productPages():Observable<ProductPage[]>{
    // return this.http.get('http://127.0.0.1:5000/robots');
    console.log('Going here');
    return this.http.get<ProductPage[]>(this.baseUrl + '/products/Pages');

  }

  get_products():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl + '/products/get');
  }

  get_product(id:string): Observable<ProductPage>{
    return this.http.get<ProductPage>(this.baseUrl+ '/products/product' + id);
  }

  delete_product(id:string){
     return this.http.delete(this.baseUrl + '/products/'+id);
    //  this.router.navigateByUrl('/overview');
  }




}
