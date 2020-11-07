import { IProduct, ActionTypes } from './types';

export function addProductToCart(product: IProduct) {
  return {
    type: ActionTypes.addProductToCart,
    payload: {
      product,
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
// export function addProductToCartSuccess(product: IProduct) {
//   return {
//     type: ActionTypes.addProductToCartSuccess,
//     payload: {
//       product,
//     },
//   };
// }

// export function addProductToCartFailure(productId: number) {
//   return {
//     type: ActionTypes.addProductToCartFailure,
//     payload: {
//       productId,
//     },
//   };
// }
