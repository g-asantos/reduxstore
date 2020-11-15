import React, { useState } from 'react';

import { FiShoppingBag } from 'react-icons/fi';
import { SiRedux } from 'react-icons/si';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import OrderCartModal from '../../pages/OrderCartModal';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';
import {
  Container,
  HeaderText,
  HeaderContainer,
  ButtonContainer,
  Button,
  HeaderTextContainer,
  HeaderMinorTextContainer,
  Counter,
} from './styles';

const Header: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);
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
            <FiShoppingBag size={26} />
            <Counter>{cart.length}</Counter>
          </Button>
        </ButtonContainer>
      </HeaderContainer>
      {isOpen ? (
        <OrderCartModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          setIsOpen={setIsOpen}
        />
      ) : (
        ''
      )}
    </Container>
  );
};

export default Header;
