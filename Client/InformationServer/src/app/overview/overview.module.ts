import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { AddRobotComponent } from './add-robot/add-robot.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { OverViewRoutingModule } from './overview-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './UI-Components/Product-From/product-form.component';
import { RequestComponent } from './UI-Components/Request/request.component';



@NgModule({
  declarations: [
    AddProductComponent,
    AddRobotComponent,
    ProductOverviewComponent,
    AddOrderComponent,
    ProductFormComponent,
    RequestComponent
  ],
  imports: [
    CommonModule,
    OverViewRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class OverviewModule { }
