import { createAction, props } from "@ngrx/store";

export const getCart = createAction(
    '[Cart] Get Cart Items',
  );
  
  export const postCart = createAction(
    '[Cart] Post Cart',
    props<{ products: any }>()
  );
  
  export const removeItemFromCart = createAction(
    '[Cart] Remove Item from Cart',
    props<{ product: any }>()
  );
  
  export const getCartFailure = createAction(
    '[Cart] Get Cart failure',
    props<{ error: string }>()
  );