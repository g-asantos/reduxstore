import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { IState } from '../../store';
import {
  addProductToCartRequest,
  removeProductFromCart,
} from '../../store/modules/cart/actions';
import { ICartItem } from '../../store/modules/cart/types';
import {
  Button,
  ButtonContainer,
  Container,
  QuantityText,
  Table,
  TableData,
  TableRow,
} from './styles';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);
  const failedStock = useSelector<IState, string[]>(
    state => state.cart.failedStockCheck,
  );
  const dispatch = useDispatch();

  const hasFailedStockCheck = useCallback(
    (productId: string) => {
      return failedStock.includes(productId);
    },
    [failedStock],
  );

  useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.length === 0;
  });

  const handleAddProductToCart = useCallback(
    product => {
      dispatch(addProductToCartRequest(product));
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
          {cart.map(item => {
            return (
              <TableRow key={item.product.id}>
                <td>
                  <img
                    src={item.product.image}
                    style={{ width: 100, height: 100 }}
                    alt={item.product.name}
                  />
                </td>
                <TableData>
                  {item.product.name}
                  <ButtonContainer>
                    <Button
                      itemID="add_test"
                      type="button"
                      onClick={() => handleAddProductToCart(item.product)}
                    >
                      <FiPlus size={16} />
                    </Button>
                    <QuantityText>{item.quantity}</QuantityText>
                    <Button
                      itemID="remove_test"
                      type="button"
                      onClick={() => handleRemoveProductFromCart(item.product)}
                    >
                      <FiMinus size={16} />
                    </Button>
                  </ButtonContainer>
                </TableData>
                <TableData>
                  {(Number(item.product.value) * Number(item.quantity)).toFixed(
                    2,
                  )}
                </TableData>
                {hasFailedStockCheck(item.product.id) && (
                  <td style={{ color: 'red' }}>Out of Stock</td>
                )}
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Cart;
