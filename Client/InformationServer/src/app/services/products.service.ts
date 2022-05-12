import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../models/Products'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl;
  get_products(){
    // return this.http.get('http://127.0.0.1:5000/robots');
    return this.http.get<Product[]>(this.baseUrl + '/product/all')
  }
}
