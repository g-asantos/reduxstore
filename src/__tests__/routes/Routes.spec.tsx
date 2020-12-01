import React from 'react';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import About from '../../pages/About';
import Details from '../../pages/Details';
import Home from '../../pages/Home';
import Checkout from '../../pages/Checkout';
import Loading from '../../pages/Loading';
import Confirm from '../../pages/Confirm';
import App from '../../App';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../pages/About');
jest.mock('../../pages/Details');
jest.mock('../../pages/Home');
jest.mock('../../pages/Checkout');
jest.mock('../../pages/Loading');
jest.mock('../../pages/Confirm');
jest.mock('lottie-web', () => {
  return {
    Lottie: () => ({
      loadAnimation: jest.fn(),
    }),
  };
});

// figure how to test react router

describe('Routes', () => {
  test('Should homepage on default route', () => {
    const mockedHome = Home as jest.Mock;

    mockedHome.mockImplementation(() => <div>HomeMock</div>);

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText('HomeMock')).toBeInTheDocument();
  });

  test('Should render details on details route', () => {
    const mockedDetails = Details as jest.Mock;

    mockedDetails.mockImplementation(() => <div>DetailsMock</div>);

    render(
      <MemoryRouter initialEntries={['/details/']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText('DetailsMock')).toBeInTheDocument();
  });

  test('Should render about on about route', () => {
    const mockedAbout = About as jest.Mock;

    mockedAbout.mockImplementation(() => <div>AboutMock</div>);

    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText('AboutMock')).toBeInTheDocument();
  });

  test('Should render checkout on checkout route', () => {
    const mockedCheckout = Checkout as jest.Mock;

    mockedCheckout.mockImplementation(() => <div>CheckoutMock</div>);

    render(
      <MemoryRouter initialEntries={['/checkout']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText('CheckoutMock')).toBeInTheDocument();
  });

  test('Should render loading on loading route', () => {
    const mockedLoading = Loading as jest.Mock;

    mockedLoading.mockImplementation(() => <div>LoadingMock</div>);

    render(
      <MemoryRouter initialEntries={['/loading']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText('LoadingMock')).toBeInTheDocument();
  });

  test('Should render confirm on confirm route', () => {
    const mockedConfirm = Confirm as jest.Mock;

    mockedConfirm.mockImplementation(() => <div>ConfirmMock</div>);

    render(
      <MemoryRouter initialEntries={['/confirm']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText('ConfirmMock')).toBeInTheDocument();
  });
});
