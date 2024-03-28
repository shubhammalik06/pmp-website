import { createReducer, on } from '@ngrx/store';
import { initialState } from './productAdded.state';
import {
  getCart,
  getCartFailure,
  postCart,
  removeItemFromCart,
} from './productAdded.actions';

let storeProductsInLocalStorage: any;

const _addedProductsReducers = createReducer(
  initialState,
  on(getCart, (state) => ({
    ...state,
  })),
  on(postCart, (state, action) => {
    // storeProductsInLocalStorage = localStorage.getItem('products');

    // if (storeProductsInLocalStorage) {
    //   state = {
    //     ...state,
    //     products: [...state.products, action.products],
    //   };

    //   storeProductsInLocalStorage = JSON.parse(storeProductsInLocalStorage);

    //   let finalState = { ...state, ...storeProductsInLocalStorage }

    //   storeProductsInLocalStorage = localStorage.setItem(
    //     'products',
    //     JSON.stringify(finalState)
    //   );
    //   return finalState;
    // } else {
    //   state = {
    //     ...state,
    //     products: [...state.products, action.products],
    //   };
    //   storeProductsInLocalStorage = localStorage.setItem(
    //     'products',
    //     JSON.stringify(state)
    //   );

    const existingItems = state.products.find(
      ({ id }) => id === action.products.pID
    );
    console.log(existingItems);
    // return {
    //   ...state,
    //   products: [...state.products, action.products],
    // };

    // if (existingItems) {
    //   return {
    //     ...state,
    //     products: state.products
    //       .map((cartItem: any) =>
    //         cartItem.pid !== action.products.pID ? cartItem : { ...cartItem }
    //       )
    //       .concat(existingItems ? [existingItems] : []),
    //   };
    // } else {
      return {
        ...state,
        products: [...state.products, action.products],
      };
    // }
  }),

  on(removeItemFromCart, (state, action: any) => {
    const products = [...state.products];
    const index = products.filter((x: any) => x.pid == action[0]);
    products.splice(index[0], 1);

    state = {
      ...state,
      products: products,
    };

    return state;
  }),
  on(getCartFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);

export function addedProductsReducers(state: any, action: any) {
  return _addedProductsReducers(state, action);
}
