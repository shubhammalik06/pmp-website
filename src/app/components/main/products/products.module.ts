import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from '../../shared/pipe/filter.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RelatedProductsComponent } from '../../../related-products/related-products.component';
import { ProductTemplateComponent } from '../../../product-template/product-template.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    RelatedProductsComponent,
    ProductTemplateComponent,
    FilterPipe,
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule, SharedModule],
  exports: [
    ProductComponent,
    ProductListComponent,
    RelatedProductsComponent,
    ProductTemplateComponent,
  ],
  bootstrap: [],
})
export class ProductsModule {}
