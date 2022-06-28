import { Pipe, PipeTransform } from '@angular/core';
import { Product, ProductPage } from '../models/Products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: ProductPage[],searchInput:string): ProductPage[] {
    if(!searchInput){
      return products;
    }

    searchInput = searchInput.toLowerCase();
    return products.filter(x => x.product.entity_id.toLowerCase().startsWith(searchInput));

  }

}
