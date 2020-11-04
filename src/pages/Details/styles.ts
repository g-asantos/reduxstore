import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  visibility: visible;
  height: 100vh;
  left: 0px;
  top: 0px;
  width: 100%;
  background-color: #e0e0eb;
`;

export const DetailsTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DetailsTextTitle = styled.h1`
  margin-top: 15%;
  font-weight: 700;
`;

export const DetailsText = styled.p`
  font-size: 20px;
  margin: 20px;
`;

export const ValueText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #764abc;
`;

export const BuyButton = styled.button`
  min-width: 300px;
  min-height: 50px;
  background-color: black;
  border-color: black;
  margin: 20px;

  &:hover {
    background-color: white;

    p {
      color: black;
    }
  }
`;

export const BuyButtonText = styled.p`
  color: white;
`;
