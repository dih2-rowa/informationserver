import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { RouterModule } from '@angular/router';
import { FiwareService } from 'src/app/services/fiware.service';
import { Product } from 'src/app/models/Products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  form!: FormGroup
  mode: string = "create"
  message: string;
  addClicked:boolean = false
  markedAsTouched: boolean = false;
  product: Product;

  productJson:string;

  constructor(private productService: ProductsService, private router: Router, private fiwareService: FiwareService) { }


  ngOnInit(): void {

  }

  onCancelClick(){
    this.router.navigateByUrl("");
  }

  // PDF is gelöscht wegen syntax problem - soll "/" sein, ist "\"
  onGenerate(product: Product){
    this.product = product;
    this.productJson =`{"id": "${product.entity_id}","type": "Product","programName": {"value": "${product.programname}","type": "String"},"programVersion": {"value": ${product.programversion},"type": "Integer"},"VersionOnRobot": {"value": 1,"type": "Integer"},"processingLength": {"value": ${product.processinglength},"type": "Integer"},"planCycleTime": {"value": ${product.plancycletime}, "type": "Integer"}}`
  }

  sendRequestClicked(){
    this.fiwareService.addProduct(this.productJson);
  }
}
