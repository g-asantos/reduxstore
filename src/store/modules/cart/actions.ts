import { IProduct, ActionTypes } from './types';

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(productId: string) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId,
    },
  };
}

export function removeProductFromCart(product: IProduct) {
  return {
    type: ActionTypes.removeProductFromCart,
    payload: {
      product,
    },
  };
}

export function resetCart() {
  return {
    type: ActionTypes.resetCart,
    payload: {},
  };
}
