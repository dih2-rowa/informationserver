import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product, ProductPage} from '../models/Products'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient, private router: Router) { }

  baseUrl = environment.baseUrl;
  products:ProductPage[] = [];
  productToReturn:any = {};
  get_products(){
    // return this.http.get('http://127.0.0.1:5000/robots');
    console.log('Going here');
    return this.http.get<ProductPage[]>(this.baseUrl + '/products/get');

  }

  get_product(id:string){
    return this.http.get<ProductPage>(this.baseUrl+ '/products/product' + id);
  }

  add_product(productName:string, productVersion: string, planCycleTime: string, pdf:File){
    const product = new FormData();
    product.append("productName", productName);
    product.append("productVersion", productVersion);
    product.append("planCycleTime", planCycleTime);
    product.append("pdf", pdf);
    this.http.post(this.baseUrl + '/product/add',product).subscribe(response => {
      this.router.navigate(["/"]);
    });
  }


}
