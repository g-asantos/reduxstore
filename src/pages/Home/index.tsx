/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProductsArray from '../../lib/collections';
import {
  Container,
  Image,
  ImageContainer,
  ImageText,
  ImageTextContainer,
} from './styles';
import CategoryAside from '../../components/CategoryAside';
import { addDetailRequest } from '../../store/modules/details/actions';

const Home: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const sendToDetails = useCallback(
    id => {
      const product = ProductsArray.find(
        productFound => productFound.id === id,
      );

      if (product) {
        dispatch(addDetailRequest(product));
        history.push('/details');
      }
    },
    [dispatch, history],
  );

  return (
    <>
      <CategoryAside />
      <Container>
        {ProductsArray.map(product => {
          return (
            <ImageContainer onClick={() => sendToDetails(product.id)}>
              <Image src={product.image} />
              <ImageTextContainer>
                <ImageText>{product.name}</ImageText>
                <ImageText>
                  R$ {product.value}
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
