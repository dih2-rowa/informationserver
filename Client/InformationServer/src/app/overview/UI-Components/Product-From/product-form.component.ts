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

  constructor(private readonly formBuilder: FormBuilder){

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
        versiononrobot: false,
      }
      this.generate.emit(this.product);


      console.log(this.product);
    }

  }

  onSaveProduct(){

  }
}
