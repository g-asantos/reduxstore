import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1208px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  padding: 30px;
  @media (max-width: 1700px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 689px) {
    width: 100vh;
    height: 100vh;
  }
`;

export const Image = styled.img`
  visibility: visible;
  left: 0px;
  top: 0px;
  width: 100%;
  background-color: #e0e0eb;
  @media (max-width: 1700px) {
    width: 100vh;
  }

  @media (max-width: 689px) {
    width: 100%;
    height: 100%;
  }
`;

export const DetailsTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 689px) {
    width: 100vh;
    height: 100vh;
  }
`;

export const DetailsTextTitle = styled.h1`
  margin-top: 15%;
  font-weight: 700;
  @media (max-width: 1208px) {
    margin-top: 0;
  }
`;

export const DetailsText = styled.p`
  font-size: 20px;
  margin: 20px;
`;

export const QuantityText = styled.p`
  font-size: 20px;
  color: red;
  margin-bottom: 20px;
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
