import { all, put, select, takeLatest } from 'redux-saga/effects';
import { Document } from 'prismic-javascript/types/documents';
import { IState } from '../..';
import { client } from '../../../lib/prismic';
import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess,
} from './actions';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find(item => item.product.id === product.id)?.quantity ??
      0
    );
  });

  const fullProductWithStock: Document = yield client().getByID(product.id, {});

  if (Number(fullProductWithStock.data.quantity[0].text) > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock),
]);
