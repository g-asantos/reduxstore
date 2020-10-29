import React from 'react';
import Catalog from '../Catalog';
import Cart from '../Cart';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Catalog />
      <Cart />
    </Container>
  );
};

export default Home;
