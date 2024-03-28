export interface ProductsInCartState{
    products: Array<any>,
    totalPrice : number,
    numberOfItems : number,
    error: any,
}

export const initialState : ProductsInCartState = {
    products: [],
    totalPrice : 0,
    numberOfItems : 0,
    error: null
}