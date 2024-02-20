import {Button, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import React, {useContext} from 'react';
import styles from '../styles/MyCartStyle';
import MyContext from '../store/MyContext';

import CartItem from '../components/CartItem';

const MyCartScreen = () => {
  const {cart} = useContext(MyContext);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const renderEmptyCart = () => {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      </View>
    );
  };

  const renderCart = () => {
    if (cart.length === 0) {
      return renderEmptyCart();
    }
    return cart.map((cartItem, index) => (
      <CartItem item={cartItem} key={index} />
    ));
  };

  const renderItemsInMyCart = () => {
    return <View style={styles.container}>{renderCart()}</View>;
  };

  const renderPriceAndPayButton = () => {
    if (cart.length === 0) {
      return null;
    }

    return (
      <View style={styles.priceAndPayButtonContainer}>
        <Text style={styles.priceText}>
          Total price: {calculateTotalPrice()}
        </Text>
        <TouchableOpacity style={styles.payButton}>
          <Button title="Pay" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {renderItemsInMyCart()}
        {renderPriceAndPayButton()}
      </View>
    </ScrollView>
  );
};

export default MyCartScreen;
