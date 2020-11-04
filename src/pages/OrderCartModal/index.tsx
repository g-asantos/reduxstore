/* eslint-disable react/prop-types */
import React from 'react';
import { FiX } from 'react-icons/fi';
import Cart from '../Cart';
import Catalog from '../Catalog';

import {
  CheckoutButton,
  Container,
  ContinueButton,
  DarkContainer,
  ModalButton,
  ModalContainer,
  ModalContentContainer,
  ModalFooter,
  ModalFooterButtonContainer,
  ModalFooterTextContainer,
  ModalHeader,
  ModalHeaderText,
} from './styles';

interface orderCartProps {
  open?: boolean;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const OrderCartModal: React.FC<orderCartProps> = ({ open, onClose }) => {
  if (!open) {
    return null;
  }

  return (
    <Container>
      <DarkContainer />
      <ModalContainer>
        <ModalHeader>
          <ModalHeaderText>Shopping Cart</ModalHeaderText>
          <ModalButton type="button" onClick={onClose}>
            <FiX size={20} />
          </ModalButton>
        </ModalHeader>
        <ModalContentContainer>
          <Catalog />
          <Cart />
        </ModalContentContainer>
        <ModalFooter>
          <ModalFooterTextContainer>
            <p>
              SubTotal:
              <span>R$: 20,00</span>
            </p>
          </ModalFooterTextContainer>
          <ModalFooterButtonContainer>
            <ContinueButton onClick={onClose}>Continue Shopping</ContinueButton>
            <CheckoutButton>Checkout</CheckoutButton>
          </ModalFooterButtonContainer>
        </ModalFooter>
      </ModalContainer>
    </Container>
  );
};
export default OrderCartModal;
