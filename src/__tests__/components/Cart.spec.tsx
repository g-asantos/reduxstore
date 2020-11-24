/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Store, AnyAction } from 'redux';
import configureStore from 'redux-mock-store';
import Cart from '../../components/Cart'

const mockStore = configureStore([]);



describe('Cart', () => {
  let store: Store<any, AnyAction>;
  let component: any;

  beforeEach(() => {
    store = mockStore({
      cart: {
        items:  [{
          product:{
            id: 1,
            name: 'test',
            image: 'test',
            details: 'test',
            value: 20
                    },
          quantity: 2,
        }],
        failedStockCheck: []
      },
      },
    );

    store.dispatch = jest.fn()

    component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should render with given state from Redux Store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on add button click', () => {

    const addButton = component.root.findByProps({itemID: 'add_test'})
    renderer.act(() => {
      addButton.props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1)
  })

  it('should dispatch an action on remove button click', () => {

    const addButton = component.root.findByProps({itemID: 'remove_test'})
    renderer.act(() => {
      addButton.props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1)
  })

});
