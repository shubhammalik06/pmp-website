import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { ShimmerComponent } from './shimmer/shimmer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    SearchComponent,
    ShimmerComponent,
    CarouselComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    PageNotFoundComponent,
    SearchComponent,
    ShimmerComponent,
    CarouselComponent
  ],
  bootstrap: [],
})
export class SharedModule {}
