import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import {
  addProductToCart,
  removeProductFromCart,
} from '../../store/modules/cart/actions';
import { ICartItem } from '../../store/modules/cart/types';
import { Container } from './styles';

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
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <>
              <tr key={item.product.id}>
                <td>{item.product.name}</td>
                <td>
                  {item.product.value}
                  ,00
                </td>
                <td>{item.quantity}</td>
                <td>{(item.product.value * item.quantity).toFixed(2)}</td>
              </tr>
              <button
                type="button"
                onClick={() => handleAddProductToCart(item.product)}
              >
                PLUS
              </button>
              <button
                type="button"
                onClick={() => handleRemoveProductFromCart(item.product)}
              >
                MINUS
              </button>
            </>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Cart;
