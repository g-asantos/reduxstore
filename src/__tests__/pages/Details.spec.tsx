/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Store, AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import Details from '../../pages/Details'

const mockStore = configureStore([]);




describe('Details', () => {
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

    store.dispatch = jest.fn()

    component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should dispatch an action on button click', () => {

    const buyButton = component.root.findByProps({itemID: 'buy_test'})
    renderer.act(() => {
      buyButton.props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1)
  })

})
