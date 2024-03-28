import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/main/body/body.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { ProductComponent } from './components/main/products/product/product.component';
import { ProductListComponent } from './components/main/products/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: BodyComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
   // canActivateChild : [AuthGaurdService],
    children: [
      {
        path: ':id',
        component: ProductComponent,
      },
    ],
  },
  {
    path: 'contact-us',
    loadChildren : () => import("../../src/app/components/main/contact-us/contact-us.module").then(module => module.ContactUsModule)
  },
  {
    path: 'cart',
    loadChildren : () => import("../../src/app/components/main/add-to-cart/add-to-cart.module").then(module => module.AddToCartModule)
  },
  {
    path: 'user-details',
    loadChildren : () => import("../../src/app/components/main/order-details-form/order-details-form.module").then(module => module.OrderDetailsFormModule)
  },
 
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
