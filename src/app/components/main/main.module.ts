import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BodyComponent } from './body/body.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsModule } from './products/products.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AddToCartModule } from './add-to-cart/add-to-cart.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderDetailsFormModule } from './order-details-form/order-details-form.module';

@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    ProductsModule,
    AddToCartModule,
    OrderDetailsFormModule,
    FormsModule,
    ReactiveFormsModule,

    SharedModule,
  ],
  exports: [BodyComponent, HeaderComponent, FooterComponent],
  bootstrap: [],
})
export class MainModule {}
