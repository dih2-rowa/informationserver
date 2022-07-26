import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  form!: FormGroup
  mode: string = "create"
  constructor(private productService: ProductsService) { }
  // entity_id : string;
  // programName : string;
  // programVersion: number;
  // versionOnRobot : boolean;
  // processingLength: number;
  // planCycleTime: number;
  // pdf:string;


  ngOnInit(): void {
    this.form = new FormGroup({
        productName: new FormControl(null, {validators: [Validators.required]}),
        programVersion: new FormControl(null, {validators: [Validators.required]}),
        planCycleTime: new FormControl(null, {validators: [Validators.required]}),
        pdf: new FormControl(null)
    });
  }

  onSaveProduct(){
    if(this.form.invalid){
      return;
    }
    if(this.mode === 'create'){
        this.productService.add_product(
          this.form.value.productName,
          this.form.value.programVersion,
          this.form.value.planCycleTime,
          this.form.value.pdf
        );
    }else{

    }
  }
}
