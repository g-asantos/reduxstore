/* eslint-disable prettier/prettier */
import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import crypto from 'crypto';
import Header from '../../components/Header';

import {
  Container,
  ThanksContainer,
  ThanksText,
  CompleteText,
  ReferenceText,
  GoBackButton,
} from './styles';

const Confirm: React.FC = () => {
  const history = useHistory();

  const orderNumber = crypto.randomBytes(10).toString('hex');

  const iconStyle = {
    color: 'white',
    'backgroundColor': 'green',
    'borderRadius': 50,
    width: 80,
    height: 80,
  };

  return (
    <>
      <Header />
      <Container>
        <ThanksContainer>
          <FiCheck size={30} style={iconStyle} />
          <ThanksText>Thank you for your purchase!</ThanksText>
          <CompleteText>Your order completed sucessfully</CompleteText>
          <ReferenceText>
            Here is you order number for reference:
            {' '}
            {orderNumber}
          </ReferenceText>
          <GoBackButton type="button" onClick={() => history.push('/')}>
            Go back home
          </GoBackButton>
        </ThanksContainer>
      </Container>
    </>
  );
};

export default Confirm;
