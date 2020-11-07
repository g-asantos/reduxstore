// eslint-disable-next-line no-shadow
export enum ActionTypes {
  addProductToCart = 'ADD_PRODUCT_TO_CART',
  removeProductFromCart = 'REMOVE_PRODUCT_FROM_CART',
}

export interface IProduct {
  id: number;
  image: string;
  name: string;
  details: string;
  value: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  failedStockCheck: number[];
}
