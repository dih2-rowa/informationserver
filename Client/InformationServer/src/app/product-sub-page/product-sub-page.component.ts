import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Orders } from '../models/Orders';
import { environment } from 'src/environments/environment';
import { Product, ProductPage } from '../models/Products';
import { OrdersService } from '../services/orders.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-sub-page',
  templateUrl: './product-sub-page.component.html',
  styleUrls: ['./product-sub-page.component.scss']
})
export class ProductSubPageComponent implements OnInit {
  product:string = "";
  productPage:ProductPage;
  baseUrl: string = environment.baseUrl;
  constructor(private route:ActivatedRoute, private productService: ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => this.product = params['id']);
    this.productService.get_product(this.product).subscribe((response) =>{
      console.log(response)
        this.productPage = response;
    });



  }



}
