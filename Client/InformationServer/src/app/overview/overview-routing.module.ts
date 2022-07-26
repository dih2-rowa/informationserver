import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductOverviewComponent } from "./product-overview/product-overview.component";

export const routes: Routes = [
  {path: '', component: ProductOverviewComponent},
  {path: 'addProduct', component: AddProductComponent},
]


@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[

  ]
})
export class OverViewRoutingModule{}
