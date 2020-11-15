/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';

import { addProductToCartRequest } from '../../store/modules/cart/actions';

import { IProductDetail } from '../../store/modules/details/types';

import {
  BuyButton,
  BuyButtonText,
  Container,
  DetailsText,
  DetailsTextContainer,
  DetailsTextTitle,
  Image,
  ImageContainer,
  QuantityText,
  ValueText,
} from './styles';

const Details: React.FC = () => {
  const productDetails: IProductDetail = useSelector(
    (state: RootStateOrAny) => state.details,
  );
  const [details, setDetails] = useState(productDetails);

  useEffect(() => {
    const data = localStorage.getItem('reduxStore:details');

    if (data && productDetails.id === undefined) {
      setDetails(JSON.parse(data));
    } else {
      localStorage.setItem(
        'reduxStore:details',
        JSON.stringify(productDetails),
      );
    }
  }, [productDetails]);

  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(details));
  }, [dispatch, details]);

  return (
    <>
      <Header />
      <Container>
        <ImageContainer>
          <Image src={details.image} />
        </ImageContainer>
        <DetailsTextContainer>
          <DetailsTextTitle>{details.name}</DetailsTextTitle>
          <DetailsText>{details.details}</DetailsText>
          <QuantityText>{details.quantity}x units left</QuantityText>
          <ValueText>
            R$
            {details.value}
            ,00
          </ValueText>
          <BuyButton onClick={handleAddProductToCart}>
            <BuyButtonText>ADD TO CART</BuyButtonText>
          </BuyButton>
        </DetailsTextContainer>
      </Container>
    </>
  );
};

export default Details;
