import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getCartCounter } from '../state/cartCounter/cartCounter.selector';
import { Router } from '@angular/router';
import { getCartProducts } from '../state/productsAddedToCart/productAdded.selector';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit, OnDestroy {
  cartNumber: number = 0;
  productsInCart!: any;

  cartNumberSubscription$!: Subscription;
  cartDetails$!: Subscription;

  constructor(private store: Store<AppState>, private route: Router, private sharedService : SharedService) {}

  ngOnInit(): void {
    this.cartNumberSubscription$ = this.store
      .select(getCartCounter)
      .subscribe((cartCountNumber: number) => {
        this.cartNumber = cartCountNumber;
      });

    this.cartDetails$ = this.store
      .select(getCartProducts)
      .subscribe((productsInCart: any) => {
        this.productsInCart = productsInCart.products;
      });
  }


  removeFromCart(pID:any){
    this.sharedService.removeFromCart(pID);
  }

  ngOnDestroy(): void {
    this.cartNumberSubscription$.unsubscribe();
    this.cartDetails$.unsubscribe();
  }

  proceedToDetailsForm() {
    this.route.navigateByUrl('user-details');
  }


}