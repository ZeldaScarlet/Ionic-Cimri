import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss'],
})
export class ProductContainerComponent implements OnInit {

  @Input() productName:string;
  @Input() productImage:string;
  @Input() productPrice:string;
  @Input() productModel:string;


  constructor(private router : Router) { }

  goDetails(model_no: string, ptitle : string , pimage_source: string){
    let n : NavigationExtras = {
      queryParams: {
        model: model_no,
        title: ptitle,
        image: pimage_source
      }
    }
    this.router.navigate(["product-details"], n)
  }

  ngOnInit() {}

}
