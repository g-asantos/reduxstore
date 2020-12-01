import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import Confirm from '../../../pages/Confirm';

const mockStore = configureStore([]);

/// random number every time so the snapshot changes

jest.mock('crypto');

describe('Confirm page', () => {
  let store;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let component: any;

  beforeEach(() => {
    store = mockStore({
      cart: {
        items: [],
        failedStockCheck: [],
      },
      details: '',
    });

    component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Confirm />
        </BrowserRouter>
      </Provider>,
    );
  });

  test('snapshot renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
