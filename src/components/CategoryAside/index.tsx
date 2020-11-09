/* eslint-disable prettier/prettier */
import React from 'react';
import ProductsArray from '../../lib/collections';

import { AsideAnchor, Container, TextContainer } from './styles';

interface categoryProps {
  setProducts: React.ComponentState;
}

const categories = ProductsArray.map((product) => product.category)
const uniqueCategories = [...new Set(categories)]





// eslint-disable-next-line react/prop-types
const CategoryAside: React.FC<categoryProps> = ({ setProducts }) => {




  return (
    <Container>
      <TextContainer>
        <AsideAnchor style={{ fontWeight: 700 }} onClick={() => setProducts(ProductsArray)}>All Categories</AsideAnchor>
        {uniqueCategories.map(category => (
          <AsideAnchor
            onClick={() =>
              setProducts(

                  ProductsArray.filter(
                      product => product.category === category,
                    )

              )}
          >
            {category}
          </AsideAnchor>
        ))}
      </TextContainer>
    </Container>
  );
};

export default CategoryAside;
