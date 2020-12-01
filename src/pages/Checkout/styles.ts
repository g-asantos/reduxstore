import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  height: 100vh;
  margin-top: 10vh;

  @media (max-width: 1004px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 689px) {
    width: 100vh;
    margin-top: 200px;
  }
`;

export const CartDataContainer = styled.div`
  border: 1px ridge #764abc;
  width: 50vh;
  height: 65vh;

  @media (max-width: 1004px) {
    margin-top: 20vw;
    margin-bottom: 4vw;
    border: 0;
  }

  @media (max-width: 670px) {
    margin-top: 30vw;
    margin-bottom: 4vw;
    border: 0;
  }
`;

export const OrderHeader = styled.h1`
  font-size: 20px;
  margin: 10px;
  font-weight: 700;
  border-bottom: 1px solid #d6d6d6;
`;

export const InputDataContainer = styled.div``;

export const ItemContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;

  img {
    width: 50px;
    height: 60px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const TextName = styled.p`
  font-weight: 600;
`;

export const TextCashAndQuantity = styled.p`
  color: grey;
`;

export const TotalContainer = styled.div`
  margin: 10px;
  border-top: 1px solid #d6d6d6;
`;

export const TotalHeader = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin: 40px 0 10px 0;
`;

export const TotalText = styled.p`
  color: red;
`;

export const Form = styled(Unform)`
  display: grid;
  grid-template-columns: 50vh 50vh;

  @media (max-width: 689px) {
    grid-template-columns: 50vh;
    align-items: center;
    justify-content: center;
  }
`;

export const CreditCardContainer = styled.div`
  display: grid;
  grid-template-columns: 50vh 50vh;
  @media (max-width: 689px) {
    grid-template-columns: 50vh;
  }
`;

export const PaymentDetailContainer = styled.div``;

export const DetailsHeader = styled.h2`
  margin-left: 29px;
  margin-bottom: 20px;

  @media (max-width: 689px) {
    margin-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CountrySelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CountrySelect = styled.select`
  width: 300px;
  height: 40px;
  margin-bottom: 20px;
  border: 1px solid #d6d6d6;
  font: 16px 'Roboto Slab', serif;
  color: grey;
`;

export const Button = styled.button`
  margin-left: 30px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 91.5vh;
  height: 50px;
  color: #fff;
  background-color: black;

  &:hover {
    color: black;
    background-color: #fff;
    transition: 0.6s;
  }

  @media (max-width: 689px) {
    margin-left: 0;
    width: 50vh;
  }
`;
