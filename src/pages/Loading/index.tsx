import Lottie from 'lottie-web';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetCart } from '../../store/modules/cart/actions';

import { AnimationContainer, AnimationText, Container } from './styles';

const Loading: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    Lottie.loadAnimation({
      container: document.querySelector('#animation') as Element,
      renderer: 'svg',
      loop: true,
      autoplay: true,

      // eslint-disable-next-line global-require
      animationData: require('../../assets/35679-click-to-buy-basket.json'),
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetCart());

      history.push('/confirm');
    }, 4000);
  }, [history, dispatch]);

  return (
    <Container>
      <AnimationText>Your Order is processing...</AnimationText>
      <AnimationContainer id="animation" />
    </Container>
  );
};

export default Loading;
