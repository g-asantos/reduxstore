/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';
import { client } from '../../lib/prismic';

import { AsideAnchor, Container, TextContainer } from './styles';

interface categoryProps {
  setProducts: React.ComponentState;
  products: Document[];
}

// const categories = ProductsArray.map((product) => product.category)
// const uniqueCategories = [...new Set(categories)]


// eslint-disable-next-line react/prop-types
const CategoryAside: React.FC<categoryProps> = ({ setProducts, products }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [originalProducts, setOriginalProducts] = useState<Document[]>([])


  useEffect(() => {
    const foundProducts = localStorage.getItem('reduxStore:products')

    if(foundProducts){
      setOriginalProducts(JSON.parse(foundProducts))
    } else {
      setOriginalProducts(products)
    }


  }, [products])

  useEffect(() => {
    async function defineCategories() {
      const categoryDocuments = await client().query([
        Prismic.Predicates.at('document.type', 'category'),
      ]);
      const foundCategories = categoryDocuments.results.map(category => category.uid)


      setCategories(foundCategories as string[])

    }
    defineCategories();
  }, []);

  return (
    <Container>
      <TextContainer>
        <AsideAnchor style={{ fontWeight: 700 }} onClick={() => setProducts(originalProducts)}>All Categories</AsideAnchor>
        {categories.map(category => (
          <AsideAnchor
            key={category}
            onClick={() =>
              setProducts(

                  // eslint-disable-next-line react/prop-types
                  originalProducts.filter(
                      product => product.data.category.uid === category,
                    )

              )}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </AsideAnchor>
        ))}
      </TextContainer>
    </Container>
  );
};

export default CategoryAside;
