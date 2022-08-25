import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RobotsComponent } from './robots/robots.component';

import { RouterModule } from '@angular/router';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductSubPageComponent } from './product-sub-page/product-sub-page.component';

//QR Code Scanner
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ProductsComponent } from './productInformation/products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RobotsComponent,
    ProductsComponent,
    SearchPipe,
    ProductSubPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ZXingScannerModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
