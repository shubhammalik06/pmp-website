import { createReducer, on } from '@ngrx/store';
import { initialState } from './cartCounter.state';
import { decrement, increment, reset } from './cartCounter.actions';

const _cartNumberReducer = createReducer(
  initialState,
  on(increment, (state: any) => {
    return {
      ...state,
      cartNumber: state.cartNumber + 1,
    };
  }),
  on(decrement, (state: any) => {
    return {
      ...state,
      cartNumber: state.cartNumber - 1,
    };
  }),
  on(reset, (state: any) => {
    return {
      ...state,
      cartNumber: 0,
    };
  })
);

export function cartNumberReducer(state: any, action: any) {
  return _cartNumberReducer(state, action);
}

