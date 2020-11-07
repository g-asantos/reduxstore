import { combineReducers } from 'redux';
import cart from './cart/reducer';
import details from './details/reducer';

export default combineReducers({
  cart,
  details,
});
