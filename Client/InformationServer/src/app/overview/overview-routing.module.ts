import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddOrderComponent } from "./add-order/add-order.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { AddRobotComponent } from "./add-robot/add-robot.component";
import { ProductOverviewComponent } from "./product-overview/product-overview.component";
import { ProductResolver } from "./resolver/product.resolver";

export const routes: Routes = [
  {path: '', component: ProductOverviewComponent,resolve: {products: ProductResolver}},
  {path: 'addProduct', component: AddProductComponent},
  {path: 'addOrder', component: AddOrderComponent},
  {path: 'addRobot', component: AddRobotComponent},
  {path: 'editProduct/:id', component: AddProductComponent},
  {path: 'editRobot/:id', component: AddRobotComponent},
  {path: 'editOrder/:id', component: AddOrderComponent},

]


@NgModule({
  providers:[ProductResolver],
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[

  ]
})
export class OverViewRoutingModule{}
