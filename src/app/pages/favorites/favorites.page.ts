import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  term : any;

  constructor() { }
  Products: { title: string, price: number, site_name: string, link: string, image_source: string, subcategory_id: number, model_no: string}[] = [
    {"title": "Xiaomi Redmi Note 10S 128 GB 6 GB Ram (Xiaomi Türkiye Garantili)", "price": 5208.90,"site_name": "www.hepsiburada.com" , "link":"www.hepsiburada.com/xiaomi-redmi-note-10s-128-gb-6-gb-ram-xiaomi-turkiye-garantili-p-HBCV00000FO61M", "image_source": "https://productimages.hepsiburada.net/s/102/1500/110000045850384.jpg", "subcategory_id": 2 , "model_no" : "RDMNT10BDS"},
    {"title": "Xiaomi Note 10S 128GB Gri Cep Telefonu)", "price": 5390,"site_name": "www.arcelik.com.tr" , "link":"www.arcelik.com.tr/cep-telefonu/xiaomi-note-10s-128gb-gri-telefon", "image_source": "www.arcelik.com.tr/media/resize/7967371600_LO1_20210917_084636.png/1000Wx1000H/image.png", "subcategory_id": 2 , "model_no" : "RDMNT10BDS"}
  ]

  ngOnInit() {
  }

}
