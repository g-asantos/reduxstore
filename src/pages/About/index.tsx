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
            This is a project created by Guilherme Azevedo dos Santos, with the
            intent to further my knowledge about Redux and Redux Saga. It was
            built using ReactJS, Redux, Redux-Saga, Styled Components and
            Prismic. To check it in more detail, go{' '}
            <a href="https://github.com/g-asantos/reduxstore">here</a>
          </AboutText>
        </TextContainer>

        <Image src={logo} />
      </Container>
    </>
  );
};

export default About;
