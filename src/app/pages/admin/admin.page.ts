import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private dataService: DataService, private alertCtrl: AlertController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async addProduct() {
    const alert = await this.alertCtrl.create({
      header: 'Ürün Ekle',
      inputs: [
        {
          name: 'title',
          placeholder: 'Ürün Başlığı',
          type: 'text'
        },
        {
          name: 'price',
          placeholder: 'Fiyat',
          type: 'text'
        },
        {
          name: 'site_name',
          placeholder: 'Site İsmi',
          type: 'text'
        },
        {
          name: 'link',
          placeholder: 'Site Linki',
          type: 'text'
        },
        {
          name: 'image_source',
          placeholder: 'Resim Linki',
          type: 'text'
        },
        {
          name: 'subcategory_id',
          placeholder: 'Yan Kategori Id',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Add',
          handler: product => {
            this.dataService.addProduct({ title: product.title, price: product.price, site_name: product.site_name, link: product.link, image_source: product.image_source, subcategory_id: product.subcategory_id  });
          }
        }
      ]
    });
 
    await alert.present();
  }

}
