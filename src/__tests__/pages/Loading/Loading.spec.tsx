import React from 'react';
import renderer from 'react-test-renderer';

import Loading from '../../../pages/Loading';

const mockedHistoryPush = jest.fn();
const mockedDispatch = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

jest.mock('react-redux', () => {
  return {
    useDispatch: () => ({
      dispatch: mockedDispatch,
    }),
  };
});

jest.mock('lottie-web', () => {
  return {
    Lottie: () => ({
      loadAnimation: jest.fn(),
    }),
  };
});

describe('Loading page', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Loading />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
