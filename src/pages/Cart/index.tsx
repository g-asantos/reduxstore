import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { IState } from '../../store';
import {
  addProductToCart,
  removeProductFromCart,
} from '../../store/modules/cart/actions';
import { ICartItem } from '../../store/modules/cart/types';
import {
  Button,
  ButtonContainer,
  Container,
  QuantityText,
  Table,
  TableContainer,
  TableData,
  TableRow,
} from './styles';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(
    product => {
      dispatch(addProductToCart(product));
    },
    [dispatch],
  );

  const handleRemoveProductFromCart = useCallback(
    product => {
      dispatch(removeProductFromCart(product));
    },
    [dispatch],
  );

  return (
    <Container>
      <Table>
        <tbody>
          {cart.map(item => (
            <TableContainer>
              <TableRow key={item.product.id}>
                <img
                  src={item.product.image}
                  style={{ width: 100, height: 100 }}
                  alt="something"
                />
                <TableData>
                  {item.product.name}
                  <ButtonContainer>
                    <Button
                      type="button"
                      onClick={() => handleAddProductToCart(item.product)}
                    >
                      <FiPlus size={16} />
                    </Button>
                    <QuantityText>{item.quantity}</QuantityText>
                    <Button
                      type="button"
                      onClick={() => handleRemoveProductFromCart(item.product)}
                    >
                      <FiMinus size={16} />
                    </Button>
                  </ButtonContainer>
                </TableData>
                <TableData>
                  {(item.product.value * item.quantity).toFixed(2)}
                </TableData>
              </TableRow>
            </TableContainer>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Cart;
