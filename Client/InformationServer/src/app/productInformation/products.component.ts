import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Orders } from '../models/Orders';
import { FiwareProduct, Product, ProductPage } from '../models/Products';
import { SearchPipe } from '../pipes/search.pipe';
import { FiwareService } from '../services/fiware.service';

enum OrderStatus{
  Finished = 'Finished',
  Running = 'Running',
  Pending = 'Pending'
};


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  products :ProductPage[] = []
  searchInput:string = "";
  qrCodeClicked:boolean =false;
  baseUrl:string = environment.baseUrl;

  fiwareProducts:FiwareProduct;

  constructor(private router: Router, private fiwareService: FiwareService) { }

  ngOnInit(): void {
    // this.productService.get_productPages().subscribe((response) =>{
    //   this.products = response;
    // });

    this.fiwareService.getProducts().subscribe((product: FiwareProduct[]) => {
      console.log(product);
      product.forEach((product: FiwareProduct) => {
        if(product.type === 'Product')
      this.products.push({
        product: {
          entity_id: product.id,
          programname:product.programName.value,
          processinglength: product.processingLength.value,
          programversion: product.programVersion.value,
          pdf: product.pdf.value,
          plancycletime: product.planCycleTime.value,
          versiononrobot: product.versionOnRobot.value,
          orderrunning: null,
          ordersfinished: null,
          orderstodo: null
        },
        orderrunning: null,
        orderstodo: null,
        ordersfinished:null,
      })

      })

    })


  }



  onClickDrop(id:string):void{
    const dropdownField = document.getElementById('drop-' +id);
    console.log(dropdownField)
    const triangle = document.getElementById('triangle-'+id);
    if(dropdownField?.classList.contains('open')){
      dropdownField.classList.remove('open');
      triangle?.classList.remove('open')
    }else{
      dropdownField?.classList.add('open');
      triangle?.classList.add('open');
    }
  }

  onClickQrCode():void{
    this.qrCodeClicked = !this.qrCodeClicked;
  }

  QrScanSuccess($event):void{
    this.qrCodeClicked = false;
    // this.searchInput = result;
    this.router.navigate(['/products/' +$event + '/product-detail'])
  }

  navigateToSubPage(id:string):void{
    this.router.navigate(['/products/' +id + '/product-detail']);
  }


}
