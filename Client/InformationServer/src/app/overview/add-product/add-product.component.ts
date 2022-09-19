import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FiwareService } from 'src/app/services/fiware.service';
import { FiwareProduct, Product, ProductPage } from 'src/app/models/Products';
import { Observable } from 'rxjs';
import { json } from 'express';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  id:string = '';
  mode: string = "create";
  message: string;
  addClicked:boolean = false;
  markedAsTouched: boolean = false;
  product: Product;
  product$: Observable<ProductPage>;

  isUpdate: boolean;
  form: FormGroup;
  productJson:string;

  constructor(private router: Router, private fiwareService: FiwareService, private route: ActivatedRoute, private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      productName: ['', [Validators.required]],
      programName: ['', [Validators.required]],
      programVersion: ['', [Validators.required]],
      processingLength: ['', [Validators.required]],
      planCycleTime: ['', [Validators.required]],
      pdf: ['', [Validators.required]],
  })

   }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.isUpdate = true;
      this.fiwareService.getProduct(this.id).pipe().subscribe((fiwareProduct:FiwareProduct) =>{
        this.form.controls['productName'].setValue(fiwareProduct.id);
        this.form.controls['programName'].setValue(fiwareProduct.programName.value);
        this.form.controls['programVersion'].setValue(fiwareProduct.programVersion.value);
        this.form.controls['processingLength'].setValue(fiwareProduct.processingLength.value);
        this.form.controls['planCycleTime'].setValue(fiwareProduct.planCycleTime.value);
      });

    }
  }

  onCancelClick(){
    this.router.navigateByUrl("");
  }

  onGenerate(product: Product){
    console.log(product)
      // this.productJson =`{"id": "${product.entity_id}","type": "Product","programName": {"value": "${product.programname}","type": "String"},"programVersion": {"value": ${product.programversion},"type": "Integer"},"VersionOnRobot": {"value": 1,"type": "Integer"},"processingLength": {"value": ${product.processinglength},"type": "Integer"},"planCycleTime": {"value": ${product.plancycletime}, "type": "Integer","pdf": {"value": "${product.pdf}","type": "String"}}}`
      if(this.isUpdate){
        console.log("isUpdate");
        this.productJson=`{
          "programName": {
            "value": "${product.programname}",
            "type": "String"
          },
          "programVersion": {
            "value": ${this.form.controls['programVersion'].value},
            "type": "Integer"
          },
          "versionOnRobot": {
              "value": 1,
              "type": "Integer"
          },
          "processingLength": {
            "value": ${this.form.controls['processingLength'].value},
            "type": "Integer"
          },
          "planCycleTime": {
            "value": ${this.form.controls['planCycleTime'].value},
            "type": "Integer"
          },
          "pdf": {
            "value": "1118-Aero-Duct-LH-921-A.pdf",
            "type": "String"
          }
        }`
      }else{
        this.productJson=`{
          "id": "${product.entity_id}",
          "type": "Product",
          "programName": {
            "value": "${product.programname}",
            "type": "String"
          },
          "programVersion": {
            "value": ${this.form.controls['programVersion'].value},
            "type": "Integer"
          },
          "versionOnRobot": {
              "value": 1,
              "type": "Integer"
          },
          "processingLength": {
            "value": ${this.form.controls['processingLength'].value},
            "type": "Integer"
          },
          "planCycleTime": {
            "value": ${this.form.controls['planCycleTime'].value},
            "type": "Integer"
          },
          "pdf": {
            "value": "1118-Aero-Duct-LH-921-A.pdf",
            "type": "String"
          }
        }`
      }

  }

  sendRequestClicked(){
    if(!this.isUpdate){
      this.fiwareService.addProduct(this.productJson);
    }else{
      this.fiwareService.updateProduct(this.productJson, this.product.entity_id);
    }
  }

  onAddClicked(){
    if(this.form.valid){
      this.product = {
        entity_id: this.form.get('productName').value,
        programname: this.form.get('programName').value,
        programversion: this.form.get('productName').value,
        processinglength: this.form.get('productName').value,
        plancycletime: this.form.get('planCycleTime').value,
        pdf: this.form.get('pdf').value,
        orderstodo: null,
        orderrunning: null,
        ordersfinished: null,
        versiononrobot: 1,
      }
      this.onGenerate(this.product);
    }
  }
}
