import { addDetailRequest } from '../../../store/modules/details/actions';

import { ActionTypes } from '../../../store/modules/details/types';

describe('details actions', () => {
  const product = {
    id: '1',
    name: 'test',
    image: 'test',
    details: 'test',
    value: '20',
    quantity: '10',
  };

  it('should create an action to request to add details', () => {
    const expectedAction = {
      type: ActionTypes.addDetailRequest,
      payload: {
        product,
      },
    };

    expect(addDetailRequest(product)).toEqual(expectedAction);
  });
});
