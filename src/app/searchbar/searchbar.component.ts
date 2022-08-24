import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {

  constructor(private router : Router) { }

  search(term){
    let n : NavigationExtras = {
      queryParams: {
        searchterm : term
      }
    }
      this.router.navigate(["search-results"], n)
  }

  ngOnInit() {}

}
