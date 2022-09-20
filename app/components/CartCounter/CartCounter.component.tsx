import React, { useMemo } from 'react';
import { View, Text, Button, Image } from 'react-native';

import Images from '../../assets/images';
import useCartCounter from './useCartCounter';
import s, { btnColor } from './CartCounter.style';

const CartCounter = () => {
  const { count, increment, decrement } = useCartCounter();
  const spacer = useMemo(() => <View style={s.spacer} />, []);

  const incrementButton = useMemo(
    () => <Button onPress={increment} color={btnColor} title="ADD" />,
    [increment],
  );

  const decrementButton = useMemo(
    () => <Button onPress={decrement} color={btnColor} title="REMOVE" />,
    [decrement],
  );

  const cart = useMemo(
    () => (
      <View style={s.cartContainer}>
        <Image style={s.cart} source={Images.CartIcon} resizeMode="contain" />
        <Text style={s.countBadge}>{count}</Text>
      </View>
    ),
    [count],
  );

  console.log('RE-RENDERED');

  return (
    <View style={s.container}>
      <View style={s.buttonContainer}>
        {decrementButton}
        {spacer}
        {incrementButton}
      </View>
      {cart}
    </View>
  );
};

export default CartCounter;
