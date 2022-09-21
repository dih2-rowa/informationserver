import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FiwareOrder, Orders } from '../models/Orders';
import { environment } from 'src/environments/environment';
import { FiwareProduct, Product, ProductPage } from '../models/Products';
import { FiwareService } from '../services/fiware.service';

@Component({
  selector: 'app-product-sub-page',
  templateUrl: './product-sub-page.component.html',
  styleUrls: ['./product-sub-page.component.scss']
})
export class ProductSubPageComponent implements OnInit {
  product_id:string = "";
  productPage:ProductPage;
  baseUrl: string = environment.baseUrl;
  constructor(private route:ActivatedRoute, private router:Router, private fiwareService: FiwareService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => this.product_id = params['id']);
    this.fiwareService.getProduct(this.product_id).subscribe((fiwareProduct: FiwareProduct) => {
      this.productPage = {
      product: {
        entity_id: fiwareProduct.id,
        programname:fiwareProduct.programName.value,
        processinglength: fiwareProduct.processingLength.value,
        programversion: fiwareProduct.programVersion.value,
        pdf: fiwareProduct.pdf.value,
        plancycletime: fiwareProduct.planCycleTime.value,
        versiononrobot: fiwareProduct.versionOnRobot.value,
        orderrunning: null,
        ordersfinished: null,
        orderstodo: null
      },
      orderrunning: null,
      orderstodo: [],
      ordersfinished:[],
    };

    this.fiwareService.getProducts().subscribe((res: any) => {
      res.forEach((fiwareOrder:FiwareOrder) => {
          if(fiwareOrder.type === 'Order'){
            if(fiwareOrder.productID.value === this.productPage.product.entity_id){
                if(fiwareOrder.orderStatus.value === 'Running'){
                  this.productPage.orderrunning = {
                    entity_id: fiwareOrder.id,
                    planparts: fiwareOrder.planParts.value,
                    prodparts: fiwareOrder.prodParts.value,
                    prodpartsio: fiwareOrder.prodPartsIO.value,
                    starttime: fiwareOrder.startTime.value,
                    finishedtime:fiwareOrder.finishedTime.value,
                    deadline:fiwareOrder.deadline.value,
                    orderstatus: fiwareOrder.orderStatus.value,
                    workingstation:fiwareOrder.workingStation.value,
                    productid :fiwareOrder.productID.value,
                    __original_ngsi_entity__:null,
                    fiware_servicepath: null,
                    time_index: 0
                  }
                }else if(fiwareOrder.orderStatus.value === 'Pending'){
                  this.productPage.orderstodo.push({
                    entity_id: fiwareOrder.id,
                    planparts: fiwareOrder.planParts.value,
                    prodparts: fiwareOrder.prodParts.value,
                    prodpartsio: fiwareOrder.prodPartsIO.value,
                    starttime: fiwareOrder.startTime.value,
                    finishedtime:fiwareOrder.finishedTime.value,
                    deadline:fiwareOrder.deadline.value,
                    orderstatus: fiwareOrder.orderStatus.value,
                    workingstation:fiwareOrder.workingStation.value,
                    productid :fiwareOrder.productID.value,
                    __original_ngsi_entity__:null,
                    fiware_servicepath: null,
                    time_index: 0
                  })
                }else if(fiwareOrder.orderStatus.value === 'Finished'){
                  this.productPage.ordersfinished.push({
                    entity_id: fiwareOrder.id,
                    planparts: fiwareOrder.planParts.value,
                    prodparts: fiwareOrder.prodParts.value,
                    prodpartsio: fiwareOrder.prodPartsIO.value,
                    starttime: fiwareOrder.startTime.value,
                    finishedtime:fiwareOrder.finishedTime.value,
                    deadline:fiwareOrder.deadline.value,
                    orderstatus: fiwareOrder.orderStatus.value,
                    workingstation:fiwareOrder.workingStation.value,
                    productid :fiwareOrder.productID.value,
                    __original_ngsi_entity__:null,
                    fiware_servicepath: null,
                    time_index: 0
                  })
                }
            }
          }
      });
      console.log(this.productPage.ordersfinished);
    })
  });


  }



}
