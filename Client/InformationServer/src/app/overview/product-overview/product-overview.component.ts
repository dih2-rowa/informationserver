import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FiwareOrder, Orders } from 'src/app/models/Orders';
import { FiwareProduct, Product } from 'src/app/models/Products';
import { FiwareRobot, Robot } from 'src/app/models/Robot';
import { FiwareService } from 'src/app/services/fiware.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {

  baseUrl: string = environment.baseUrl;
  constructor(private router: Router, private route: ActivatedRoute, private fiwareService:FiwareService){

  }

  products: Product[] = [
    // {entity_id: 'MY-0234', programname:'MY-0234.src', programversion: 1, versiononrobot: 1, processinglength: 34, plancycletime: 32, pdf:'', orderrunning: null, ordersfinished:[], orderstodo: []},
    // {entity_id: 'MY-0234', programname:'MY-0234.src', programversion: 1, versiononrobot: 1, processinglength: 34, plancycletime: 32, pdf:'', orderrunning: null, ordersfinished:[], orderstodo: []},
    // {entity_id: 'MY-0234', programname:'MY-0234.src', programversion: 1, versiononrobot: 1, processinglength: 34, plancycletime: 32, pdf:'', orderrunning: null, ordersfinished:[], orderstodo: []},
    // {entity_id: 'MY-0234', programname:'MY-0234.src', programversion: 1, versiononrobot: 1, processinglength: 34, plancycletime: 32, pdf:'', orderrunning: null, ordersfinished:[], orderstodo: []},
    // {entity_id: 'MY-0234', programname:'MY-0234.src', programversion: 1, versiononrobot: 1, processinglength: 34, plancycletime: 32, pdf:'', orderrunning: null, ordersfinished:[], orderstodo: []},
    // {entity_id: 'MY-0234', programname:'MY-0234.src', programversion: 1, versiononrobot: 1, processinglength: 34, plancycletime: 32, pdf:'', orderrunning: null, ordersfinished:[], orderstodo: []},
    // {entity_id: 'MY-0234', programname:'MY-0234.src', programversion: 1, versiononrobot: 1, processinglength: 34, plancycletime: 32, pdf:'', orderrunning: null, ordersfinished:[], orderstodo: []}
  ];

  orders: Orders[] = [
    // {entity_id: "Order 1", productid: "MY-0234", planparts: 10000, deadline: null, orderstatus: "Finished", workingstation:"Robot 1", prodparts: null, prodpartsio:null, starttime: null, finishedtime:null, __original_ngsi_entity__:null, fiware_servicepath:null, time_index:null },
    // {entity_id: "Order 1", productid: "MY-0234", planparts: 10000, deadline: null, orderstatus: "Finished", workingstation:"Robot 1", prodparts: null, prodpartsio:null, starttime: null, finishedtime:null, __original_ngsi_entity__:null, fiware_servicepath:null, time_index:null },
    // {entity_id: "Order 1", productid: "MY-0234", planparts: 10000, deadline: null, orderstatus: "Finished", workingstation:"Robot 1", prodparts: null, prodpartsio:null, starttime: null, finishedtime:null, __original_ngsi_entity__:null, fiware_servicepath:null, time_index:null },
    // {entity_id: "Order 1", productid: "MY-0234", planparts: 10000, deadline: null, orderstatus: "Finished", workingstation:"Robot 1", prodparts: null, prodpartsio:null, starttime: null, finishedtime:null, __original_ngsi_entity__:null, fiware_servicepath:null, time_index:null },
    // {entity_id: "Order 1", productid: "MY-0234", planparts: 10000, deadline: null, orderstatus: "Finished", workingstation:"Robot 1", prodparts: null, prodpartsio:null, starttime: null, finishedtime:null, __original_ngsi_entity__:null, fiware_servicepath:null, time_index:null },
    // {entity_id: "Order 1", productid: "MY-0234", planparts: 10000, deadline: null, orderstatus: "Finished", workingstation:"Robot 1", prodparts: null, prodpartsio:null, starttime: null, finishedtime:null, __original_ngsi_entity__:null, fiware_servicepath:null, time_index:null },
  ]


  robots: Robot[] = [
    // {id: "Robot 1", restServiceLife: 3000, orderID: "Order 1", version:null, robotRunning:null, robotSpeed:null, currCycleTime:null, drawer1Status: null, drawer2Status:null},
    // {id: "Robot 1", restServiceLife: 3000, orderID: "Order 1", version:null, robotRunning:null, robotSpeed:null, currCycleTime:null, drawer1Status: null, drawer2Status:null},
    // {id: "Robot 1", restServiceLife: 3000, orderID: "Order 1", version:null, robotRunning:null, robotSpeed:null, currCycleTime:null, drawer1Status: null, drawer2Status:null},
    // {id: "Robot 1", restServiceLife: 3000, orderID: "Order 1", version:null, robotRunning:null, robotSpeed:null, currCycleTime:null, drawer1Status: null, drawer2Status:null},
    // {id: "Robot 1", restServiceLife: 3000, orderID: "Order 1", version:null, robotRunning:null, robotSpeed:null, currCycleTime:null, drawer1Status: null, drawer2Status:null},
    // {id: "Robot 1", restServiceLife: 3000, orderID: "Order 1", version:null, robotRunning:null, robotSpeed:null, currCycleTime:null, drawer1Status: null, drawer2Status:null},
    // {id: "Robot 1", restServiceLife: 3000, orderID: "Order 1", version:null, robotRunning:null, robotSpeed:null, currCycleTime:null, drawer1Status: null, drawer2Status:null}
  ]

  ngOnInit(): void {
    this.fiwareService.getProducts().pipe().subscribe((res: any)  => {
      res.forEach((product: FiwareProduct) => {
        if(product.type == 'Product'){
          this.products.push({
            entity_id: product.id,
            programname: product.programName.value,
            programversion: product.programVersion.value,
            versiononrobot: product.versionOnRobot.value,
            processinglength: product.processingLength.value,
            plancycletime: product.planCycleTime.value,
            pdf: product.pdf.value,
            orderrunning: null,
            ordersfinished:null,
            orderstodo: null,
          })
        }


        if(product.type == 'Robot'){
        }
      })
      res.forEach((order:FiwareOrder) => {
        if(order.type == 'Order'){
          this.orders.push({
            entity_id: order.id,
            deadline: order.deadline.value,
            finishedtime: order.finishedTime.value,
            orderstatus:order.orderStatus.value,
            planparts:order.planParts.value,
            prodparts:order.prodParts.value,
            prodpartsio:order.prodPartsIO?.value,
            productid:order.productID.value,
            starttime:order.startTime.value,
            workingstation:order.workingStation.value,
             __original_ngsi_entity__:null,
             fiware_servicepath:null,
             time_index:null
          })
        }
      });
      res.forEach((robot:FiwareRobot) => {
        if(robot.type == 'Processdata'){
          console.log(robot);
          this.robots.push({
            id: robot.id,
            restServiceLife: robot.restServiceLife.value,
            version: robot.version.value,
            robotRunning: robot.robotRunning.value,
            robotSpeed: robot.robotSpeed.value,
            currCycleTime: robot.currCycleTime.value,
            drawer1Status: robot.drawer1Status.value,
            drawer2Status: robot.drawer2Status.value,
            orderID:robot.orderID?.value
          });
        }
      });
    });


  }


  navigate(url: string){
    this.router.navigateByUrl(url);
  }

  navigateWithParam(url: string, routeParam: any){
    console.log(routeParam);
    this.router.navigateByUrl(url );
  }

  deleteProduct(entity_id:string){
    console.log(entity_id);
    this.fiwareService.deleteProduct(entity_id);
    this.products = this.products.filter(product  => product.entity_id !== entity_id);
  }

  deleteRobot(id:string){
    this.fiwareService.deleteRobot(id);
    this.robots = this.robots.filter(robot => robot.id !== id);
  }

  deleteOrder(id:string){
    this.fiwareService.deleteOrder(id);
    this.orders = this.orders.filter(order => order.entity_id !== id);
  }
}
