import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from 'src/app/models/Orders';
import { Product } from 'src/app/models/Products';
import { Robot } from 'src/app/models/Robot';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {

  constructor(private router: Router){}

  products: Product[] = [
    {entity_id: 'MY-0234', programname:'MY-0234.src', programversion: 1, versiononrobot: true, processinglength: 34, plancycletime: 32, pdf:'', orderrunning: null, ordersfinished:[], orderstodo: []},
    {entity_id: 'MY-0234', programname:'MY-0234.src', programversion: 1, versiononrobot: true, processinglength: 34, plancycletime: 32, pdf:'', orderrunning: null, ordersfinished:[], orderstodo: []},
    {entity_id: 'MY-0234', programname:'MY-0234.src', programversion: 1, versiononrobot: true, processinglength: 34, plancycletime: 32, pdf:'', orderrunning: null, ordersfinished:[], orderstodo: []},
    {entity_id: 'MY-0234', programname:'MY-0234.src', programversion: 1, versiononrobot: true, processinglength: 34, plancycletime: 32, pdf:'', orderrunning: null, ordersfinished:[], orderstodo: []},
    {entity_id: 'MY-0234', programname:'MY-0234.src', programversion: 1, versiononrobot: true, processinglength: 34, plancycletime: 32, pdf:'', orderrunning: null, ordersfinished:[], orderstodo: []},
    {entity_id: 'MY-0234', programname:'MY-0234.src', programversion: 1, versiononrobot: true, processinglength: 34, plancycletime: 32, pdf:'', orderrunning: null, ordersfinished:[], orderstodo: []},
    {entity_id: 'MY-0234', programname:'MY-0234.src', programversion: 1, versiononrobot: true, processinglength: 34, plancycletime: 32, pdf:'', orderrunning: null, ordersfinished:[], orderstodo: []}
  ];

  orders: Orders[] = [
    {entity_id: "Order 1", productid: "MY-0234", planparts: 10000, deadline: null, orderstatus: "Finished", workingstation:"Robot 1", prodparts: null, prodpartsio:null, starttime: null, finishedtime:null, __original_ngsi_entity__:null, fiware_servicepath:null, time_index:null },
    {entity_id: "Order 1", productid: "MY-0234", planparts: 10000, deadline: null, orderstatus: "Finished", workingstation:"Robot 1", prodparts: null, prodpartsio:null, starttime: null, finishedtime:null, __original_ngsi_entity__:null, fiware_servicepath:null, time_index:null },
    {entity_id: "Order 1", productid: "MY-0234", planparts: 10000, deadline: null, orderstatus: "Finished", workingstation:"Robot 1", prodparts: null, prodpartsio:null, starttime: null, finishedtime:null, __original_ngsi_entity__:null, fiware_servicepath:null, time_index:null },
    {entity_id: "Order 1", productid: "MY-0234", planparts: 10000, deadline: null, orderstatus: "Finished", workingstation:"Robot 1", prodparts: null, prodpartsio:null, starttime: null, finishedtime:null, __original_ngsi_entity__:null, fiware_servicepath:null, time_index:null },
    {entity_id: "Order 1", productid: "MY-0234", planparts: 10000, deadline: null, orderstatus: "Finished", workingstation:"Robot 1", prodparts: null, prodpartsio:null, starttime: null, finishedtime:null, __original_ngsi_entity__:null, fiware_servicepath:null, time_index:null },
    {entity_id: "Order 1", productid: "MY-0234", planparts: 10000, deadline: null, orderstatus: "Finished", workingstation:"Robot 1", prodparts: null, prodpartsio:null, starttime: null, finishedtime:null, __original_ngsi_entity__:null, fiware_servicepath:null, time_index:null },
  ]


  robots: Robot[] = [
    {id: "Robot 1", restServiceLife: 3000, orderID: "Order 1", version:null, robotRunning:null, robotSpeed:null, currCycleTime:null, drawer1Status: null, drawer2Status:null},
    {id: "Robot 1", restServiceLife: 3000, orderID: "Order 1", version:null, robotRunning:null, robotSpeed:null, currCycleTime:null, drawer1Status: null, drawer2Status:null},
    {id: "Robot 1", restServiceLife: 3000, orderID: "Order 1", version:null, robotRunning:null, robotSpeed:null, currCycleTime:null, drawer1Status: null, drawer2Status:null},
    {id: "Robot 1", restServiceLife: 3000, orderID: "Order 1", version:null, robotRunning:null, robotSpeed:null, currCycleTime:null, drawer1Status: null, drawer2Status:null},
    {id: "Robot 1", restServiceLife: 3000, orderID: "Order 1", version:null, robotRunning:null, robotSpeed:null, currCycleTime:null, drawer1Status: null, drawer2Status:null},
    {id: "Robot 1", restServiceLife: 3000, orderID: "Order 1", version:null, robotRunning:null, robotSpeed:null, currCycleTime:null, drawer1Status: null, drawer2Status:null},
    {id: "Robot 1", restServiceLife: 3000, orderID: "Order 1", version:null, robotRunning:null, robotSpeed:null, currCycleTime:null, drawer1Status: null, drawer2Status:null}
  ]

  ngOnInit(): void {
  }


  navigate(url: string){
    this.router.navigateByUrl(url);
  }

}
