import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import About from '../../../pages/About';

const mockStore = configureStore([]);

describe('About page', () => {
  let store;
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
          <About />
        </BrowserRouter>
      </Provider>,
    );
  });

  test('snapshot renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
