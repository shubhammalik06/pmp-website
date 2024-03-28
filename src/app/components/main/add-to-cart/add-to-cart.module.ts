import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart.component';

const routes: Routes = [
  {
    path: '',
    component: AddToCartComponent,
  },
];

@NgModule({
  declarations: [AddToCartComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [AddToCartComponent],
  bootstrap: [],
})
export class AddToCartModule {}
