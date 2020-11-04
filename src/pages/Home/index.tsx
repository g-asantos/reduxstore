import React from 'react';
import { useHistory } from 'react-router-dom';
import Catalog from '../Catalog';
import Cart from '../Cart';
import {
  Container,
  Image,
  ImageContainer,
  ImageText,
  ImageTextContainer,
} from './styles';
import CategoryAside from '../../components/CategoryAside';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <CategoryAside />
      <Container>
        <ImageContainer onClick={() => history.push('/details')}>
          <Image src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F136%2F459%2Fmockup-ae9a83b0__49881.1603746586.png&w=1200&q=85" />
          <ImageTextContainer>
            <ImageText>Camisa descolada</ImageText>
            <ImageText>R$ 20,00</ImageText>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer onClick={() => history.push('/details')}>
          <Image src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F136%2F459%2Fmockup-ae9a83b0__49881.1603746586.png&w=1200&q=85" />
          <ImageTextContainer>
            <ImageText>Camisa descolada</ImageText>
            <ImageText>R$ 20,00</ImageText>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer onClick={() => history.push('/details')}>
          <Image src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F136%2F459%2Fmockup-ae9a83b0__49881.1603746586.png&w=1200&q=85" />
          <ImageTextContainer>
            <ImageText>Camisa descolada</ImageText>
            <ImageText>R$ 20,00</ImageText>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer onClick={() => history.push('/details')}>
          <Image src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F136%2F459%2Fmockup-ae9a83b0__49881.1603746586.png&w=1200&q=85" />
          <ImageTextContainer>
            <ImageText>Camisa descolada</ImageText>
            <ImageText>R$ 20,00</ImageText>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer onClick={() => history.push('/details')}>
          <Image src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F136%2F459%2Fmockup-ae9a83b0__49881.1603746586.png&w=1200&q=85" />
          <ImageTextContainer>
            <ImageText>Camisa descolada</ImageText>
            <ImageText>R$ 20,00</ImageText>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer onClick={() => history.push('/details')}>
          <Image src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F136%2F459%2Fmockup-ae9a83b0__49881.1603746586.png&w=1200&q=85" />
          <ImageTextContainer>
            <ImageText>Camisa descolada</ImageText>
            <ImageText>R$ 20,00</ImageText>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer onClick={() => history.push('/details')}>
          <Image src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F136%2F459%2Fmockup-ae9a83b0__49881.1603746586.png&w=1200&q=85" />
          <ImageTextContainer>
            <ImageText>Camisa descolada</ImageText>
            <ImageText>R$ 20,00</ImageText>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer onClick={() => history.push('/details')}>
          <Image src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F136%2F459%2Fmockup-ae9a83b0__49881.1603746586.png&w=1200&q=85" />
          <ImageTextContainer>
            <ImageText>Camisa descolada</ImageText>
            <ImageText>R$ 20,00</ImageText>
          </ImageTextContainer>
        </ImageContainer>
      </Container>
    </>
  );
};

export default Home;
