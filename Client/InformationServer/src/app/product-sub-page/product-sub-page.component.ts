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
  productPage:any = {};
  baseUrl: string = environment.baseUrl;
  constructor(private route:ActivatedRoute, private productService: ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => this.product = params['id']);
    this.productService.get_product(this.product).subscribe((response) =>{
      console.log(response)
      // this.productPage = response;
      // this.productPage.product = response.product;
      // this.productPage.product = {
      //     entity_id : response.product.entity_id,
      //     programversion: response.product.programversion,
      //     versiononrobot: response.product.versiononrobot,
      //     programname: response.product.programname,
      //     processinglength: response.product.processinglength,
      //     plancycletime: response.product.plancycletime,
      //     pdf: response.product.pdf
      // }
      // // this.productPage.pendingorders = response.pendingorders
      // // this.productPage.finishedorders = response.finishedorders
      // // this.productPage.runningorder = response.runningorder
      // response.pendingOrders.forEach(order => {
      //   this.productPage.pendingorders.add(order)
      // });
      // response.finishedOrders.forEach(order => {
      //   this.productPage.finishedorders.add(order)
      // });
      // this.productPage.runningOrder.entity_id = response.runningOrder.entity_id;
    });

    console.log(this.productPage);


  }

 

}
