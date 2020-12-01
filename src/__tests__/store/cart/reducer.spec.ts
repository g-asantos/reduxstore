import { AnyAction } from 'redux';
import cart from '../../../store/modules/cart/reducer';
import { ActionTypes } from '../../../store/modules/cart/types';

describe('cart reducer', () => {
  const product = {
    id: '1',
    name: 'test',
    image: 'test',
    details: 'test',
    value: '20',
  };

  it('should return the initial state', () => {
    expect(cart(undefined, {} as AnyAction)).toEqual({
      items: [],
      failedStockCheck: [],
    });
  });

  it('should handle addProductToCartSuccess', () => {
    expect(
      cart(
        {
          items: [],
          failedStockCheck: [],
        },
        {
          type: ActionTypes.addProductToCartSuccess,
          payload: {
            product,
          },
        },
      ),
    ).toEqual({
      items: [
        {
          product: {
            id: '1',
            name: 'test',
            image: 'test',
            details: 'test',
            value: '20',
          },
          quantity: 1,
        },
      ],
      failedStockCheck: [],
    });

    expect(
      cart(
        {
          items: [
            {
              product: {
                id: '1',
                name: 'test',
                image: 'test',
                details: 'test',
                value: '20',
              },
              quantity: 10,
            },
          ],
          failedStockCheck: [],
        },
        {
          type: ActionTypes.addProductToCartSuccess,
          payload: {
            product,
          },
        },
      ),
    ).toEqual({
      items: [
        {
          product: {
            id: '1',
            name: 'test',
            image: 'test',
            details: 'test',
            value: '20',
          },
          quantity: 11,
        },
      ],
      failedStockCheck: [],
    });
  });

  it('should handle addProductToCartFailure', () => {
    expect(
      cart(
        {
          items: [],
          failedStockCheck: [],
        },
        {
          type: ActionTypes.addProductToCartFailure,
          payload: {
            productId: product.id,
          },
        },
      ),
    ).toEqual({
      items: [],
      failedStockCheck: [`${product.id}`],
    });
  });

  it('should handle removeProductFromCart', () => {
    expect(
      cart(
        {
          items: [
            {
              product: {
                id: '1',
                name: 'test',
                image: 'test',
                details: 'test',
                value: '20',
              },
              quantity: 1,
            },
          ],
          failedStockCheck: [],
        },
        {
          type: ActionTypes.removeProductFromCart,
          payload: {
            product,
          },
        },
      ),
    ).toEqual({
      items: [],
      failedStockCheck: [],
    });
  });

  it('should handle resetCart', () => {
    expect(
      cart(
        {
          items: [
            {
              product: {
                id: '1',
                name: 'test',
                image: 'test',
                details: 'test',
                value: '20',
              },
              quantity: 10,
            },
          ],
          failedStockCheck: [],
        },
        {
          type: ActionTypes.resetCart,
          payload: {},
        },
      ),
    ).toEqual({
      items: [],
      failedStockCheck: [],
    });
  });
});
