import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';

import Header from './components/Header';

import GlobalStyle from './styles/global';
import Routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />

        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
