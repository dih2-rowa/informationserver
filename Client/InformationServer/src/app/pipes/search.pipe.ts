import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[],searchInput:string): Product[] {
    if(!searchInput){
      return products;
    }

    searchInput = searchInput.toLowerCase();
    return products.filter(x => x.id.toLowerCase().startsWith(searchInput));

  }

}
