import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Product} from 'src/app/services/data.service';
declare let cordova: any;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  model : string;
  product_title;
  product_image_source;
  Product: Product[] = [];
  Tproduct: Product[] = [];
  

  constructor(private dataService : DataService , private route : ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      this.model = params.model;
      this.product_title = params.title;
      this.product_image_source = params.image;
      this.dataService.getProductByModel(this.model).subscribe(res=>{
        this.Product = res;
        this.Product.sort((a, b) => (a.price < b.price? -1 : 1));
      });
    })
  }

  openBrowser(url){
    var https = "https://";
    var link = https.concat(url.toString());
    //cordova.InAppBrowser.open(url, '_system', 'location=yes');
    window.open(link, '_system', 'location=yes');
    
  }

  ngOnInit() {
    
  }

}
