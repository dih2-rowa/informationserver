import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product, ProductPage} from '../models/Products'
import { environment } from 'src/environments/environment';
import { Orders } from '../models/Orders';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl;
  get_products(){
    
    // return this.http.get('http://127.0.0.1:5000/robots');
    return this.http.get<ProductPage[]>(this.baseUrl + '/products/page');

  }
}
