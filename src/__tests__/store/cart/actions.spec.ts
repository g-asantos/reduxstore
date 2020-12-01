import {
  addProductToCartSuccess,
  addProductToCartFailure,
  addProductToCartRequest,
  removeProductFromCart,
  resetCart,
} from '../../../store/modules/cart/actions';

import { ActionTypes } from '../../../store/modules/cart/types';

describe('cart actions', () => {
  it('should create an action to request to add to cart', () => {
    const product = {
      id: '1',
      name: 'test',
      image: 'test',
      details: 'test',
      value: '20',
    };

    const expectedAction = {
      type: ActionTypes.addProductToCartRequest,
      payload: {
        product,
      },
    };

    expect(addProductToCartRequest(product)).toEqual(expectedAction);
  });

  it('should succeed to an action to add to cart', () => {
    const product = {
      id: '1',
      name: 'test',
      image: 'test',
      details: 'test',
      value: '20',
    };

    const expectedAction = {
      type: ActionTypes.addProductToCartSuccess,
      payload: {
        product,
      },
    };

    expect(addProductToCartSuccess(product)).toEqual(expectedAction);
  });

  it('should fail to an action to add to cart', () => {
    const product = {
      id: '1',
      name: 'test',
      image: 'test',
      details: 'test',
      value: '20',
    };

    const expectedAction = {
      type: ActionTypes.addProductToCartFailure,
      payload: {
        productId: product.id,
      },
    };

    expect(addProductToCartFailure(product.id)).toEqual(expectedAction);
  });

  it('should create an action to remove product from cart', () => {
    const product = {
      id: '1',
      name: 'test',
      image: 'test',
      details: 'test',
      value: '20',
    };

    const expectedAction = {
      type: ActionTypes.removeProductFromCart,
      payload: {
        product,
      },
    };

    expect(removeProductFromCart(product)).toEqual(expectedAction);
  });

  it('should create an action to reset cart', () => {
    const expectedAction = {
      type: ActionTypes.resetCart,
      payload: {},
    };

    expect(resetCart()).toEqual(expectedAction);
  });
});
