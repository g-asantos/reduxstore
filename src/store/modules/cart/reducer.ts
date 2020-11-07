/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';
import produce from 'immer';

import { ICartState, ActionTypes } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addProductToCart: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          item => item.product.id === product.id,
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity += 1;
        } else {
          draft.items.push({ product, quantity: 1 });
        }

        break;
      }
      case ActionTypes.removeProductFromCart: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          item => item.product.id === product.id,
        );

        if (productInCartIndex >= 0) {
          if (draft.items[productInCartIndex].quantity === 1) {
            draft.items.splice(productInCartIndex, 1);
            break;
          }
          draft.items[productInCartIndex].quantity -= 1;
        } else {
          break;
        }

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;
