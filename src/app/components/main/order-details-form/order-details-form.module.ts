import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderDetailsFormComponent } from './order-details-form.component';


const routes: Routes = [
    {
      path: '',
      component: OrderDetailsFormComponent,
    },
  ];

@NgModule({
  declarations: [
    OrderDetailsFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  bootstrap: [],
})
export class OrderDetailsFormModule {}
