import { Component, OnInit, ViewChild } from '@angular/core';
import { Orders } from '../models/Orders';
import { Product, ProductPage } from '../models/Products';
import { SearchPipe } from '../pipes/search.pipe';
import { OrdersService } from '../services/orders.service';
import { ProductsService } from '../services/products.service';

enum OrderStatus{
  Finished = 'Finished',
  Running = 'Running',
  Pending = 'Pending'
};


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  
  products :ProductPage[] = []
  searchInput:string = "";

  constructor(private productService: ProductsService, private orderService: OrdersService) { }

  ngOnInit(): void {
    this.productService.get_products().subscribe((response) =>{
      this.products = response;
      console.log(this.products);
    });
    
  }

  

  onClickDrop(id:string):void{
    const dropdownField = document.getElementById('drop-' +id);
    console.log(dropdownField)
    const triangle = document.getElementById('triangle-'+id);
    if(dropdownField?.classList.contains('open')){
      dropdownField.classList.remove('open');
      triangle?.classList.remove('open')
    }else{
      dropdownField?.classList.add('open');
      triangle?.classList.add('open');
    }
  }


}
