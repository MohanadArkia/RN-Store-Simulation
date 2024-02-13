import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useContext} from 'react';
import styles from '../styles/MyCartStyle';
import MyContext from '../store/MyContext';

import Images from '../assets/images/images';

const MyCartScreen = () => {
  const {cart, setCart, quantity, setQuantity} = useContext(MyContext);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    quantity === 1
      ? setQuantity(1)
      : setQuantity(prevQuantity => prevQuantity - 1);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.price * quantity;
    });
    return totalPrice;
  };

  const removeProduct = index => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const renderQuantityControls = () => (
    <View style={styles.quantityContainer}>
      <TouchableOpacity onPress={incrementQuantity}>
        <Text style={styles.quantityButton}>+</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity onPress={decrementQuantity}>
        <Text style={styles.quantityButton}>-</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItemsInMyCart = () => {
    return (
      <View style={styles.container}>
        {cart.length === 0 ? (
          <View style={styles.emptyCartContainer}>
            <Text style={styles.emptyCartText}>Your cart is empty</Text>
          </View>
        ) : (
          cart.map((item, index) => (
            <View style={styles.imageContainer} key={index}>
              <Image source={item.img} style={styles.cartImage} />
              <Text style={styles.txt} key={index}>
                {item.cpu
                  ? `
                        Brand: ${item.brand}
                        Cpu: ${item.cpu}
                        Ram: ${item.ram}
                        Gpu: ${item.gpu}
                        Storage: ${item.storage}
                        Price: ${item.price}`
                  : item.release
                    ? `
                        Brand: ${item.brand}
                        Release: ${item.release}
                        Price: ${item.price}`
                    : ''}
              </Text>
              <Text>{renderQuantityControls()}</Text>
              <TouchableOpacity onPress={() => removeProduct(index)}>
                <Image
                  style={styles.trashCanIcon}
                  source={Images.trashIcon()}
                />
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>
    );
  };

  const renderPriceAndPayButton = () => {
    if (cart.length === 0) {
      return null;
    }

    return (
      <View style={styles.priceAndPayButtonContainer}>
        <Text style={styles.priceText}>
          Total price: {calculateTotalPrice().toFixed(2)}
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
