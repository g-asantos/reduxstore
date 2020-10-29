import React from 'react';

import { Container, HeaderText, HeaderContainer, Input } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderText>ReduxStore</HeaderText>
        <Input placeholder="Buscar por produtos" />
        <div>Novo Anuncio</div>
        <div>Minha Conta</div>
        <div>Future cart image</div>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
