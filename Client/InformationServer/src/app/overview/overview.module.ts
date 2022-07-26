import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { AddRobotComponent } from './add-robot/add-robot.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { OverViewRoutingModule } from './overview-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddProductComponent,
    AddRobotComponent,
    ProductOverviewComponent,
    AddOrderComponent
  ],
  imports: [
    CommonModule,
    OverViewRoutingModule
  ]
})
export class OverviewModule { }
