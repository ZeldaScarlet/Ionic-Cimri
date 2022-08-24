import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataService, Product, Category, SubCategory } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Product: Product[] = [];
  Categories: Category[] = [];
  SubCategories: SubCategory[] = [];

  selectabs= "home";

  Products: { title: string, price: number, site_name: string, link: string, image_source: string, subcategory_id: number, model_no: string}[] = [
    {"title": "Xiaomi Redmi Note 10S 128 GB 6 GB Ram (Xiaomi Türkiye Garantili)", "price": 5208.90,"site_name": "www.hepsiburada.com" , "link":"www.hepsiburada.com/xiaomi-redmi-note-10s-128-gb-6-gb-ram-xiaomi-turkiye-garantili-p-HBCV00000FO61M", "image_source": "https://productimages.hepsiburada.net/s/102/1500/110000045850384.jpg", "subcategory_id": 2 , "model_no" : "RDMNT10BDS"},
    {"title": "Xiaomi Note 10S 128GB Gri Cep Telefonu)", "price": 5390,"site_name": "www.arcelik.com.tr" , "link":"www.arcelik.com.tr/cep-telefonu/xiaomi-note-10s-128gb-gri-telefon", "image_source": "www.arcelik.com.tr/media/resize/7967371600_LO1_20210917_084636.png/1000Wx1000H/image.png", "subcategory_id": 2 , "model_no" : "RDMNT10BDS"}
  ]


  constructor( private dataService : DataService, private router : Router) {

    /*this.Products.forEach(product => {
      this.dataService.addProduct({title: product.title, price: product.price, site_name: product.site_name, link: product.link, image_source: product.image_source, subcategory_id: product.subcategory_id, model_no: product.model_no})
    }); */

    this.dataService.getProducts().subscribe(res =>{
      this.Product=res;
    })


    this.dataService.getCategories().subscribe(res =>{
      this.Categories=res;
    })

    this.dataService.getSubCategory().subscribe(res => {
      this.SubCategories=res;
    })

  }
  
  goSubCategory(subid){
    let n : NavigationExtras = {
      queryParams: {
        id: subid
      }
    }
    this.router.navigate(["search-results"], n)
  }

}
