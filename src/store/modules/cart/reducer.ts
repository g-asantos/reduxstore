/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';
import produce from 'immer';

import { ICartState, ActionTypes } from './types';

const products = localStorage.getItem('reduxStore:cart');
const productsObjects = products ? JSON.parse(products) : '';

const INITIAL_STATE: ICartState = {
  items: productsObjects !== '' ? [...productsObjects] : [],
  failedStockCheck: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft: ICartState) => {
    switch (action.type) {
      case ActionTypes.addProductToCartSuccess: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          item => item.product.id === product.id,
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity += 1;
        } else {
          draft.items.push({ product, quantity: 1 });
        }

        localStorage.setItem('reduxStore:cart', JSON.stringify(draft.items));

        break;
      }
      case ActionTypes.addProductToCartFailure: {
        const { productId } = action.payload;

        const productInFailedStockIndex = draft.failedStockCheck.findIndex(
          item => item === productId,
        );

        if (productInFailedStockIndex > -1) {
          break;
        }

        draft.failedStockCheck.push(action.payload.productId);

        break;
      }
      case ActionTypes.removeProductFromCart: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          item => item.product.id === product.id,
        );

        const productInFailedStockIndex = draft.failedStockCheck.findIndex(
          item => item === product.id,
        );

        if (productInFailedStockIndex > -1) {
          draft.failedStockCheck.splice(productInFailedStockIndex, 1);
        }

        if (productInCartIndex >= 0) {
          if (draft.items[productInCartIndex].quantity === 1) {
            draft.items.splice(productInCartIndex, 1);
            localStorage.setItem(
              'reduxStore:cart',
              JSON.stringify(draft.items),
            );
          } else {
            draft.items[productInCartIndex].quantity -= 1;
          }
        } else {
          break;
        }

        localStorage.setItem('reduxStore:cart', JSON.stringify(draft.items));
        break;
      }
      case ActionTypes.resetCart: {
        draft.items = [];
        localStorage.setItem('reduxStore:cart', '[]');
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;
