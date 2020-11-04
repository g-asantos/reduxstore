import React from 'react';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  return (
    <Container>
      <ImageContainer>
        <Image src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F136%2F459%2Fmockup-ae9a83b0__49881.1603746586.png&w=1200&q=85" />
      </ImageContainer>
      <DetailsTextContainer>
        <DetailsTextTitle>Cool Clothes</DetailsTextTitle>
        <DetailsText>
          This American Apparel hoodie is made out of California fleece which is
          soft to the touch, and you&#39;ll feel like you&#39;re wearing a soft,
          fluffy cloud. It&#39;s pre-washed to minimize shrinkage, and
          breathable yet extra thick for warmth.
        </DetailsText>
        <ValueText>R$ 20,00</ValueText>
        <BuyButton onClick={() => history.push('/cart')}>
          <BuyButtonText>ADD TO CART</BuyButtonText>
        </BuyButton>
      </DetailsTextContainer>
    </Container>
  );
};

export default Details;
