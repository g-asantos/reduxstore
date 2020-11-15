// eslint-disable-next-line no-shadow
export enum ActionTypes {
  addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
  removeProductFromCart = 'REMOVE_PRODUCT_FROM_CART',
  resetCart = 'RESET_CART',
}

export interface IProduct {
  id: string;
  image: string;
  name: string;
  details: string;
  value: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  failedStockCheck: string[];
}
