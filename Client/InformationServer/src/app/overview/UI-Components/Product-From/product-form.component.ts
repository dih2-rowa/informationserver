import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Product } from "src/app/models/Products";


@Component({
  selector: 'product-ui-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit{

  @Input() product: Product;
  @Output() generate : EventEmitter<Product> = new EventEmitter<Product>();

  form: FormGroup;
  productJson:string;
  markedAsTouched: boolean = false;

  constructor(){



  }

  ngOnInit(): void {
    if(this.product){
      console.log(this.product)
      this.form.patchValue(this.product);
    }else{
      console.log('No product');
    }
  }



  onSaveProduct(){

  }
}
