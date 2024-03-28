import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsInCartState } from './productAdded.state';

const getAddedCartProductsState = createFeatureSelector<ProductsInCartState>(
  'addedProductsInCart'
);

export const getCartProducts = createSelector(
  getAddedCartProductsState,
  (state: any) => {
    const storageValue = localStorage.getItem('products');
    if (storageValue) return JSON.parse(storageValue);
    else return state;
  }
);
