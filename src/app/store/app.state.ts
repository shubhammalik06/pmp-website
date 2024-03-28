import { cartNumberReducer } from "../components/main/state/cartCounter/cartCounter.reducer"
import { CartCounterState } from "../components/main/state/cartCounter/cartCounter.state"
import { addedProductsReducers } from "../components/main/state/productsAddedToCart/productAdded.reducer"
import { ProductsInCartState } from "../components/main/state/productsAddedToCart/productAdded.state"

export interface AppState{
    counter : CartCounterState,
    productsAddedInCart : ProductsInCartState 
}

export const appReducer = {
    cartNumber : cartNumberReducer,
    addedProductsInCart : addedProductsReducers
}