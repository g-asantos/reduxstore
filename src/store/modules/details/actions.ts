import { IProductDetail, ActionTypes } from './types';

export function addDetailRequest(product: IProductDetail) {
  return {
    type: ActionTypes.addDetailRequest,
    payload: {
      product,
    },
  };
}
