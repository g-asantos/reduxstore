import React, { useCallback, useMemo } from 'react';
import { FiX } from 'react-icons/fi';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import { ICartState } from '../../store/modules/cart/types';
import Cart from '../../components/Cart';

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
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderCartModal: React.FC<orderCartProps> = ({ onClose, setIsOpen }) => {
  const cart: ICartState = useSelector((state: RootStateOrAny) => state.cart);
  const history = useHistory();

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

  const springProps = useSpring({
    opacity: 1,
    zIndex: 10,
    transform: 'translate(0px, 0px)',
    from: {
      opacity: 0,
      transform: 'translateX(-20px, -20px)',
    },
  });

  const goToCheckout = useCallback(
    e => {
      e.preventDefault();

      if (cart.items.length === 0) {
        return;
      }

      setIsOpen(false);
      history.push('/checkout');
    },
    [history, setIsOpen, cart.items.length],
  );

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
                  R$ {total}
                  ,00
                </span>
              </p>
            </ModalFooterTextContainer>
            <ModalFooterButtonContainer>
              <ContinueButton onClick={onClose}>
                Continue Shopping
              </ContinueButton>
              <CheckoutButton onClick={goToCheckout}>Checkout</CheckoutButton>
            </ModalFooterButtonContainer>
          </ModalFooter>
        </ModalContainer>
      </Container>
    </animated.div>
  );
};
export default OrderCartModal;
