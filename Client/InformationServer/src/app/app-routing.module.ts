import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { RobotsComponent } from './robots/robots.component';

const routes: Routes = [
  {path: 'robots', component: RobotsComponent},
  {path: 'products', component: ProductsComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
