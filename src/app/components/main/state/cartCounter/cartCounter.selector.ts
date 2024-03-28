import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartCounterState } from './cartCounter.state';

const getCartCounterState = createFeatureSelector<CartCounterState>('cartNumber');

export const getCartCounter = createSelector(getCartCounterState, (state: any) => {
  return state.cartNumber;
});
