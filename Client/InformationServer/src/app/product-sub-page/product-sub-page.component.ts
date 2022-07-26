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
  productPage:any = {}
  baseUrl: string = environment.baseUrl;
  constructor(private route:ActivatedRoute, private productService: ProductsService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => this.product = params['id']);
    this.productService.get_product(this.product).subscribe((response) =>{
      console.log(response)
      this.productPage = response;
      this.productPage.product = response.product;
      this.productPage.product = {
          entity_id : response.product.entity_id,
          programversion: response.product.programVersion,
          versiononrobot: response.product.versionOnRobot,
          programname: response.product.programName,
          processinglength: response.product.processingLength,
          plancycletime: response.product.planCycleTime,
          pdf: response.product.pdf
      }
      this.productPage.pendingorders = response.pendingOrders
      this.productPage.finishedorders = response.finishedOrders
      this.productPage.runningorder = response.runningOrder
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
