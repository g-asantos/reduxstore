import React from 'react';

import { AsideText, Container, TextContainer } from './styles';

const CategoryAside: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <AsideText style={{ fontWeight: 700 }}>All Categories</AsideText>
        <AsideText>Clothing</AsideText>
        <AsideText>Shoes</AsideText>
        <AsideText>Acessories</AsideText>
      </TextContainer>
    </Container>
  );
};

export default CategoryAside;
