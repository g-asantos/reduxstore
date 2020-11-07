import React, { useState } from 'react';

import { FiShoppingCart } from 'react-icons/fi';
import { SiRedux } from 'react-icons/si';
import { Link } from 'react-router-dom';
import OrderCartModal from '../../pages/OrderCartModal';
import {
  Container,
  HeaderText,
  HeaderContainer,
  ButtonContainer,
  Button,
  HeaderTextContainer,
  HeaderMinorTextContainer,
} from './styles';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <HeaderContainer>
        <HeaderMinorTextContainer>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex' }}>
            <HeaderText>Shop</HeaderText>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', display: 'flex' }}>
            <HeaderText>About</HeaderText>
          </Link>
        </HeaderMinorTextContainer>
        <HeaderTextContainer>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex' }}>
            <SiRedux size={26} />
            <HeaderText>ReduxStore</HeaderText>
          </Link>
        </HeaderTextContainer>

        <ButtonContainer>
          <Button onClick={() => setIsOpen(state => !state)}>
            <FiShoppingCart size={26} />
          </Button>
        </ButtonContainer>
      </HeaderContainer>
      {isOpen ? (
        <OrderCartModal open={isOpen} onClose={() => setIsOpen(false)} />
      ) : (
        ''
      )}
    </Container>
  );
};

export default Header;
