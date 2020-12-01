import { AnyAction } from 'redux';
import details from '../../../store/modules/details/reducer';
import { ActionTypes } from '../../../store/modules/details/types';

describe('details reducer', () => {
  const product = {
    id: '1',
    name: 'test',
    image: 'test',
    details: 'test',
    value: '20',
  };

  it('should return the initial state', () => {
    expect(details(undefined, {} as AnyAction)).toEqual('');
  });

  it('should handle addDetailRequest', () => {
    expect(
      details('', {
        type: ActionTypes.addDetailRequest,
        payload: {
          product,
        },
      }),
    ).toEqual(product);
  });
});
