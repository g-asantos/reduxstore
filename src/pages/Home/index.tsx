import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';
import {
  Container,
  Image,
  ImageContainer,
  ImageText,
  ImageTextContainer,
} from './styles';
import CategoryAside from '../../components/CategoryAside';
import { addDetailRequest } from '../../store/modules/details/actions';
import Header from '../../components/Header';
import { client } from '../../lib/prismic';
import { IProductDetail } from '../../store/modules/details/types';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Document[]>([]);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    async function defineProducts() {
      const storagedProducts = localStorage.getItem('reduxStore:products');
      if (storagedProducts) {
        setProducts(JSON.parse(storagedProducts));
      } else {
        const foundProducts = await client().query([
          Prismic.Predicates.at('document.type', 'products'),
        ]);

        setProducts(foundProducts.results);
        localStorage.setItem(
          'reduxStore:products',
          JSON.stringify(foundProducts.results),
        );
      }
    }
    defineProducts();
  }, []);

  const sendToDetails = useCallback(
    id => {
      const product = products.find(productFound => productFound.id === id);
      if (product) {
        const formattedProduct: IProductDetail = {
          id: product.id,
          image: product.data.image.url,
          name: product.data.title[0].text,
          details: product.data.details[0].text,
          value: product.data.value[0].text,
          quantity: product.data.quantity[0].text,
        };

        dispatch(addDetailRequest(formattedProduct));
        history.push('/details');
      }
    },
    [dispatch, history, products],
  );

  return (
    <>
      <Header />
      <CategoryAside setProducts={setProducts} products={products} />
      <Container>
        {products.map(product => {
          return (
            <ImageContainer
              key={product.id}
              onClick={() => sendToDetails(product.id)}
            >
              <Image
                src={product.data.image.url}
                alt={product.data.title.text}
              />
              <ImageTextContainer>
                <ImageText>{product.data.title.text}</ImageText>
                <ImageText>
                  R$ {product.data.value[0].text}
                  ,00
                </ImageText>
              </ImageTextContainer>
            </ImageContainer>
          );
        })}
      </Container>
    </>
  );
};

export default Home;
