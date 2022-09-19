import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FiwareOrder, Orders } from 'src/app/models/Orders';
import { FiwareProduct, Product } from 'src/app/models/Products';
import { FiwareRobot, Robot } from 'src/app/models/Robot';
import { FiwareService } from 'src/app/services/fiware.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {


  form: FormGroup;
  markedAsTouched: boolean;
  orderJson:string;
  isUpdate:boolean = false;
  order: Orders;
  id:string;
  robots: Robot[]= [];
  products:Product[] = [];

  constructor(private readonly formBuilder: FormBuilder, private readonly fiwareService: FiwareService, private readonly route:ActivatedRoute) {
    this.form = this.formBuilder.group({
      orderId: ['', [Validators.required]],
      productId: ['', [Validators.required]],
      planParts: ['', [Validators.required]],
      deadline: ['', [Validators.required]],
      robotId: ['', [Validators.required]],
  })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.isUpdate = true;
      this.fiwareService.getOrder(this.id).pipe().subscribe((fiwareOrder:FiwareOrder) =>{
        this.form.controls['orderId'].setValue(fiwareOrder.id);
        this.form.controls['productId'].setValue(fiwareOrder.productID.value);
        this.form.controls['planParts'].setValue(fiwareOrder.planParts.value);
        this.form.controls['deadline'].setValue(fiwareOrder.deadline.value);
        this.form.controls['robotId'].setValue(fiwareOrder.workingStation.value);
      });

    }




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
      });
      res.forEach((robot:FiwareRobot) => {
        if(robot.type == 'Processdata'){
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

  onGenerate(){
      // this.productJson =`{"id": "${product.entity_id}","type": "Product","programName": {"value": "${product.programname}","type": "String"},"programVersion": {"value": ${product.programversion},"type": "Integer"},"VersionOnRobot": {"value": 1,"type": "Integer"},"processingLength": {"value": ${product.processinglength},"type": "Integer"},"planCycleTime": {"value": ${product.plancycletime}, "type": "Integer","pdf": {"value": "${product.pdf}","type": "String"}}}`
      if(!this.isUpdate){
        console.log(this.form);
        this.orderJson=`{
          "id": "${this.form.controls['orderId'].value}",
          "type": "Order",
          "productID": {
            "value": "${this.form.controls['productId'].value}",
            "type": "String"
          },
          "planParts": {
            "value": ${this.form.controls['planParts'].value},
            "type": "Integer"
          },
          "prodParts": {
            "value": 0,
            "type": "Integer"
          },
          "prodPartsIO": {
            "value": 0,
            "type": "Integer"
          },
          "startTime": {
              "value": "2022-06-19 11:25:20",
              "type": "Datetime"
          },
          "finishedTime": {
            "value": "2022-06-19 11:25:20",
            "type": "Datetime"
          },
          "deadline": {
              "value": "${this.form.controls['deadline'].value}",
              "type": "Datetime"
          },
          "orderStatus": {
            "value": "Pending",
            "type": "String"
          },
          "workingStation": {
            "value": "${this.form.controls['robotId'].value}",
            "type": "String"
          }
        }`
      }else{
        this.orderJson=`{
          "productID": {
            "value": "${this.form.controls['productId'].value}",
            "type": "String"
          },
          "planParts": {
            "value": ${this.form.controls['planParts'].value},
            "type": "Integer"
          },
          "deadline": {
              "value": "${this.form.controls['deadline'].value}",
              "type": "Datetime"
          },
          "workingStation": {
            "value": "${this.form.controls['robotId'].value}",
            "type": "String"
          }
        }`
      }
  }
  onSendRequest(){
    if(this.isUpdate){
      this.fiwareService.updateOrder(this.orderJson, this.id);
    }else{
      this.fiwareService.addOrder(this.orderJson);
    }

  }
}

