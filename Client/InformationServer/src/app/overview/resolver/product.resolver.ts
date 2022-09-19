import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Product } from "src/app/models/Products";
import { ProductsService } from "src/app/services/products.service";

@Injectable()
  export class ProductResolver implements Resolve<Product[]>{
    constructor(private productService: ProductsService){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] | Observable<Product[]> | Promise<Product[]> {
      return this.productService.get_products();
    }
  }

