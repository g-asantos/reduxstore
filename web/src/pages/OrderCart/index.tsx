import React from 'react';
import Cart from '../Cart';
import Catalog from '../Catalog';

import { Container } from './styles';

const OrderCart: React.FC = () => {
  return (
    <Container>
      <Catalog />
      <Cart />
    </Container>
  );
};

export default OrderCart;
