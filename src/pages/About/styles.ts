import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vh;
  height: 100vh;
`;

export const AboutTitle = styled.h1`
  font-weight: 600;
  margin-top: 100px;
  margin-bottom: 20px;
`;

export const AboutText = styled.p`
  text-align: justify;
  width: 60vh;
`;

export const Image = styled.img`
  width: 50vh;
  margin-top: 160px;
  margin-left: 100px;
`;
