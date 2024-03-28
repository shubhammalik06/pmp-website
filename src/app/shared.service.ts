import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject } from 'rxjs';
import { AppState } from './store/app.state';
import { decrement, increment } from './components/main/state/cartCounter/cartCounter.actions';
import { postCart, removeItemFromCart } from './components/main/state/productsAddedToCart/productAdded.actions';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private store: Store<AppState>) {}

  private selectedProductData = new BehaviorSubject<any>({});
  private setAllProductsInArray = new BehaviorSubject<any>([]);

  setProductList(array : any){
    this.setAllProductsInArray.next(array);
  }

  getProductList(){
    return this.setAllProductsInArray;
  }


  setSelectedProductData(object: any) {
    this.selectedProductData.next(object);
  }

  getSelectedProduct() {
    return this.selectedProductData;
  }

  addToCart() {
    this.store.dispatch(increment());
  }

  removeFromCart(productID : any){
    this.store.dispatch(removeItemFromCart(productID));
    this.store.dispatch(decrement());
  }


  productDetails(addedProductDetails: any) {
    this.store.dispatch(postCart({ products: addedProductDetails }));
  }
}
