import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Product, ProductPage } from '../models/Products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-sub-page',
  templateUrl: './product-sub-page.component.html',
  styleUrls: ['./product-sub-page.component.scss']
})
export class ProductSubPageComponent implements OnInit {
  product:any;
  productPage:any;
  baseUrl: string = environment.baseUrl;
  constructor(private route:ActivatedRoute, private productService: ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => this.product = params);
    this.productService.get_product(this.product.id).subscribe((response) =>{
      console.log(response)
      this.productPage = response;
    });

    console.log(this.productPage);


  }

 

}
