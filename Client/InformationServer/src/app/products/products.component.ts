import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Products';
import { SearchPipe } from '../pipes/search.pipe';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products :Product[] = []
  searchInput:string = "";


  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.get_products().subscribe((response) =>{
      this.products = response;
    });
  }


}
