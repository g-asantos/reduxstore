/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';
import produce from 'immer';

import { IProductDetail, ActionTypes } from './types';

const details: Reducer = (state = '', action) => {
  return produce(state, (draft: IProductDetail) => {
    switch (action.type) {
      case ActionTypes.addDetailRequest: {
        const { product } = action.payload;
        draft = product;

        return draft;
      }
      default: {
        return draft;
      }
    }
  });
};

export default details;
