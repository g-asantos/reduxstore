/* eslint-disable react/prop-types */
import React from 'react';
import { FiX } from 'react-icons/fi';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useTransition, animated, useSpring } from 'react-spring';
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
  const cart = useSelector((state: RootStateOrAny) => state.cart);

  const springProps = useSpring({
    opacity: 1,
    reset: open,
    zIndex: 10,
    transform: 'translate(0px, 0px)',
    from: {
      opacity: 0,
      transform: 'translateX(-20px, -20px)',
    },
  });

  console.log(cart);
  return (
    <animated.div style={springProps}>
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
            <Cart />
          </ModalContentContainer>
          <ModalFooter>
            <ModalFooterTextContainer>
              <p>
                Subtotal:
                <span> R$: 20,00</span>
              </p>
            </ModalFooterTextContainer>
            <ModalFooterButtonContainer>
              <ContinueButton onClick={onClose}>
                Continue Shopping
              </ContinueButton>
              <CheckoutButton>Checkout</CheckoutButton>
            </ModalFooterButtonContainer>
          </ModalFooter>
        </ModalContainer>
      </Container>
    </animated.div>
  );
};
export default OrderCartModal;
