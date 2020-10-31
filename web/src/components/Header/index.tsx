import React from 'react';

import { FiPlus, FiUser, FiShoppingCart } from 'react-icons/fi';
import { SiRedux } from 'react-icons/si';
import { Link, useHistory } from 'react-router-dom';
import {
  Container,
  HeaderText,
  HeaderContainer,
  Input,
  ButtonContainer,
  Button,
  HeaderTextContainer,
} from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <HeaderContainer>
        <HeaderTextContainer>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex' }}>
            <SiRedux size={26} />
            <HeaderText>ReduxStore</HeaderText>
          </Link>
        </HeaderTextContainer>

        <Input placeholder="Buscar por produtos" />
        <ButtonContainer>
          <Button
            onClick={() => {
              history.push('/');
            }}
          >
            <FiPlus size={26} />
          </Button>
          <Button
            onClick={() => {
              history.push('/login');
            }}
          >
            <FiUser size={26} />
          </Button>
          <Button
            onClick={() => {
              history.push('/cart');
            }}
          >
            <FiShoppingCart size={26} />
          </Button>
        </ButtonContainer>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
