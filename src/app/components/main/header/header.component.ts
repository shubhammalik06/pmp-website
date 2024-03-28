import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getCartCounter } from '../state/cartCounter/cartCounter.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  counter: number = 0;

  cartCounter: number = 0;

  cartNumberSubscription$!: Subscription;
  
  constructor(private store: Store<AppState>, private router : Router) {}

  ngOnInit(): void {
    this.cartNumberSubscription$ = this.store
    .select(getCartCounter)
    .subscribe((counter: number) => {
      this.counter = counter;
    });
  }

  ngOnDestroy(): void {
    this.cartNumberSubscription$.unsubscribe();
  }

  addToCartBtn(){
    this.router.navigateByUrl("add-to-cart");
  }


}
