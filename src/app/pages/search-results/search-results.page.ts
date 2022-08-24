import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Product } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPage implements OnInit {
  subid: any = 0;
  term: string
  productlength: number = 0;
  Product: Product[] = [];

  constructor(private dataService : DataService, private route : ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.subid = + params.id;
      this.term = params.searchterm;
      if (params.searchterm) {
        this.dataService.getProducts().subscribe(res=>{
          this.Product = res;
          this.productlength = this.Product.length;
        });
        
      } else {
        this.dataService.getProductBySubId(this.subid).subscribe(res=>{
          this.Product = res;
          this.productlength = this.Product.length;
        });
      }
    })

    
  }

  ngOnInit() {

  }

}
