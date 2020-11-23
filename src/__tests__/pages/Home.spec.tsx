import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Home from '../../pages/Home';

const mockStore = configureStore([]);

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('react-redux', () => {
  return {
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});

describe('Home Page', () => {
  let store;
  let component: renderer.ReactTestRenderer;

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
        <Home />
      </Provider>,
    );
  });

  it('should render with given state from Redux Store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
