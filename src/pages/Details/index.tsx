import React, { useCallback } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { addProductToCart } from '../../store/modules/cart/actions';
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
  ValueText,
} from './styles';

const Details: React.FC = () => {
  const productDetails: IProductDetail = useSelector(
    (state: RootStateOrAny) => state.details,
  );

  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(productDetails));
  }, [dispatch, productDetails]);

  return (
    <Container>
      <ImageContainer>
        <Image src={productDetails.image} />
      </ImageContainer>
      <DetailsTextContainer>
        <DetailsTextTitle>{productDetails.name}</DetailsTextTitle>
        <DetailsText>{productDetails.details}</DetailsText>
        <ValueText>
          R$
          {productDetails.value}
          ,00
        </ValueText>
        <BuyButton onClick={handleAddProductToCart}>
          <BuyButtonText>ADD TO CART</BuyButtonText>
        </BuyButton>
      </DetailsTextContainer>
    </Container>
  );
};

export default Details;
