import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { SearchResultsPageRoutingModule } from './search-results-routing.module';

import { SearchResultsPage } from './search-results.page';
import { ProductContainerComponent } from 'src/app/product-container/product-container.component';
import { SearchbarComponent } from 'src/app/searchbar/searchbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchResultsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SearchResultsPage, ProductContainerComponent, SearchbarComponent ]
})
export class SearchResultsPageModule {}
