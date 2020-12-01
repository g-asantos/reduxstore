/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Store, AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import Home from '../../../pages/Home';

const mockStore = configureStore([]);



describe('Home Page', () => {
  let store: Store<any, AnyAction>;
  let component: any;

  beforeEach(() => {
    store = mockStore({
      cart: {
        items: [],
        failedStockCheck: [],
      },
      details: [],
    });

    component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should render with given state from Redux Store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
