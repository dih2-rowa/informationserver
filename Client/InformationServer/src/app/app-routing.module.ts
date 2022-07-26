import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddRobotComponent } from './add-robot/add-robot.component';
import { ProductSubPageComponent } from './product-sub-page/product-sub-page.component';
import { ProductsComponent } from './products/products.component';
import { RobotsComponent } from './robots/robots.component';

const routes: Routes = [
  {path: 'robots', component: RobotsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'addProduct', component: AddProductComponent},
  {path: 'addOrder', component: AddOrderComponent},
  {path: 'addRobot', component: AddRobotComponent},
  {path: 'products/:id/product-detail', component:ProductSubPageComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
