import React, { useEffect, useMemo, useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { ICartState } from '../../store/modules/cart/types';

import {
  CartDataContainer,
  Container,
  InputDataContainer,
  ItemContainer,
  TotalContainer,
  Form,
  CreditCardContainer,
  OrderHeader,
  TextContainer,
  TextName,
  TextCashAndQuantity,
  TotalHeader,
  TotalText,
  DetailsHeader,
  CountrySelect,
  PaymentDetailContainer,
  Button,
  CountrySelectContainer,
} from './styles';

interface countryProps {
  name: string;
}

const Checkout: React.FC = () => {
  const cart: ICartState = useSelector((state: RootStateOrAny) => state.cart);
  const [countries, setCountries] = useState<countryProps[]>([]);
  const history = useHistory();

  useEffect(() => {
    async function getAllCountries() {
      const response = await fetch('https://restcountries.eu/rest/v2/all');
      const gottenCountries = await response.json();
      setCountries(gottenCountries);
    }

    getAllCountries();
  }, []);

  const total = useMemo(() => {
    const valueArray = cart.items.map(
      item => Number(item.product.value) * Number(item.quantity),
    );

    if (valueArray.length === 0) {
      return 0;
    }

    const totalCount = valueArray.reduce((acc, item) => (acc += item));

    return totalCount;
  }, [cart]);

  return (
    <>
      <Header />
      <Container>
        <InputDataContainer>
          <DetailsHeader>Customer and Shipping Details</DetailsHeader>
          <Form onSubmit={() => history.push('/loading')} id="submit-form">
            <Input name="First Name" placeholder="First Name" type="text" />
            <Input name="Last Name" placeholder="Last Name" type="text" />
            <CountrySelectContainer>
              <CountrySelect name="Country">
                {countries.map(country => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </CountrySelect>
            </CountrySelectContainer>
            <Input name="City" placeholder="City" type="text" />
            <Input name="State" placeholder="State" type="text" />
            <Input name="Adress" placeholder="Address" type="text" />
            <Input name="Telephone" placeholder="Telephone" type="tel" />
            <Input name="E-mail" placeholder="E-mail" type="email" />

            <PaymentDetailContainer>
              <DetailsHeader>Payment Detail</DetailsHeader>
              <CreditCardContainer>
                <Input
                  name="Card Number"
                  placeholder="Card Number"
                  type="text"
                />
                <Input name="CVC" placeholder="CVC" type="tel" />
                <Input
                  name="ExpMonth"
                  placeholder="ExpMonth"
                  type="number"
                  max={12}
                />
                <Input name="ExpYear" placeholder="ExpYear" type="email" />
              </CreditCardContainer>
            </PaymentDetailContainer>
          </Form>
          <Button type="submit" form="submit-form">
            Make payment
          </Button>
        </InputDataContainer>

        <CartDataContainer>
          <OrderHeader>Your Order</OrderHeader>
          {cart.items.map(item => {
            return (
              <ItemContainer key={item.product.id}>
                <img src={item.product.image} alt={item.product.name} />
                <TextContainer>
                  <TextName>{item.product.name}</TextName>
                  <TextCashAndQuantity>
                    R$ {item.product.value}
                    ,00
                  </TextCashAndQuantity>
                  <TextCashAndQuantity>
                    Quantity: {item.quantity}
                  </TextCashAndQuantity>
                </TextContainer>
              </ItemContainer>
            );
          })}
          <TotalContainer>
            <TotalHeader>Total Amount</TotalHeader>
            <TotalText>
              R$ {total}
              ,00
            </TotalText>
          </TotalContainer>
        </CartDataContainer>
      </Container>
    </>
  );
};

export default Checkout;
