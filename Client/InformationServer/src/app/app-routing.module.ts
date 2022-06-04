import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSubPageComponent } from './product-sub-page/product-sub-page.component';
import { ProductsComponent } from './products/products.component';
import { RobotsComponent } from './robots/robots.component';

const routes: Routes = [
  {path: 'robots', component: RobotsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id/product-detail', component:ProductSubPageComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
