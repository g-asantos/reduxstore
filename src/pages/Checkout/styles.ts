import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  height: 100vh;
  margin-top: 10vh;
`;

export const CartDataContainer = styled.div`
  border: 1px ridge #764abc;
  width: 50vh;
  height: 65vh;
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
  margin: 10px 0 10px 0;
`;

export const TotalText = styled.p`
  color: red;
`;

export const Form = styled(Unform)`
  display: grid;
  grid-template-columns: 50vh 50vh;
`;

export const CreditCardContainer = styled.div`
  display: grid;
  grid-template-columns: 50vh 50vh;
`;

export const PaymentDetailContainer = styled.div``;

export const DetailsHeader = styled.h2`
  margin-left: 29px;
  margin-bottom: 20px;
`;

export const CountrySelect = styled.select`
  width: 300px;
  height: 40px;
  margin-bottom: 20px;
  margin-left: 30px;
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
`;
