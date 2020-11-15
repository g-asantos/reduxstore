import React from 'react';

import {
  AboutTitle,
  Container,
  TextContainer,
  Image,
  AboutText,
} from './styles';
import logo from '../../assets/undraw_Online_page_re_lhgx.svg';
import Header from '../../components/Header';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <TextContainer>
          <AboutTitle>ReduxStore</AboutTitle>
          <AboutText>
            This is an open source storefront built using Chec’s headless
            architecture and the Commerce.js SDK. Commerce.js is a smarter, more
            efficient way to build eCommerce projects, and we hope you can see
            that as you explore the world custom eCommerce. Please build on top
            of, or pick apart this project for your own use. Everything in this
            project, from the storefront, to the cart, checkout and receipt, is
            100% customizable. To build more custom eCommerce projects, using
            any frontend framework or platform, head over to commercejs.com.
          </AboutText>
        </TextContainer>

        <Image src={logo} />
      </Container>
    </>
  );
};

export default About;
