/* eslint-disable prettier/prettier */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { FiX } from 'react-icons/fi';
import { RootStateOrAny, useSelector } from 'react-redux';
import { animated, useSpring } from 'react-spring';
import { ICartState } from '../../store/modules/cart/types';
import Cart from '../Cart';

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
  const cart: ICartState = useSelector((state: RootStateOrAny) => state.cart);

  const total = useMemo(() => {
    const valueArray = cart.items.map(
      item => item.product.value * item.quantity,
    );


    if(valueArray.length === 0){
      return 0;
    }

    // eslint-disable-next-line no-param-reassign
    const totalCount = valueArray.reduce((acc, item) => (acc += item));



    return totalCount;
  }, [cart.items]);

  const springProps = useSpring({
    opacity: 1,
    zIndex: 10,
    transform: 'translate(0px, 0px)',
    from: {
      opacity: 0,
      transform: 'translateX(-20px, -20px)',
    },
  });

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
                <span>
                  {' '}
                  R$
                  {' '}
                  {total}
                  ,00
                </span>
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
