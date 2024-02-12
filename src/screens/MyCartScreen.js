import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import MyContext from '../store/MyContext';
import styles from '../styles/MyCartStyle';

const MyCartScreen = () => {
  const {cart} = useContext(MyContext);

  const [quantities, setQuantities] = useState(() => {
    const initialQuantities = {};
    cart.forEach(initQuantity => {
      initialQuantities[initQuantity.id] = 1;
    });
    return initialQuantities;
  });

  const [price, setPrice] = useState(
    cart.reduce((acc, item) => ({...acc, [item.id]: item.price}), {}),
  );

  const quantityController = (item, increment) => {
    const currentQuantity = quantities[item.id] || 0;

    const newQuantity = increment
      ? currentQuantity + 1
      : Math.max(currentQuantity - 1, 1);

    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [item.id]: newQuantity,
    }));

    setPrice(prevPrices => ({
      ...prevPrices,
      [item.id]: newQuantity * item.price,
    }));
  };

  const renderQuantityControls = item => (
    <View style={styles.quantityContainer}>
      <TouchableOpacity onPress={() => quantityController(item, true)}>
        <Text style={styles.quantityButton}>+</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantities[item.id] || 0}</Text>
      <TouchableOpacity onPress={() => quantityController(item, false)}>
        <Text style={styles.quantityButton}>-</Text>
      </TouchableOpacity>
    </View>
  );

  const renderPriceAndPayButton = () => {
    if (cart.length === 0) {
      return null;
    }

    const totalPrice = Object.values(price).reduce(
      (acc, itemPrice) => acc + itemPrice,
      0,
    );

    return (
      <View style={styles.priceAndPayButtonContainer}>
        <Text style={styles.priceText}>
          Total price: {totalPrice.toFixed(2)}
        </Text>
        <TouchableOpacity style={styles.payButton}>
          <Button title="Pay" />
        </TouchableOpacity>
      </View>
    );
  };

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
              <Text>{renderQuantityControls(item)}</Text>
            </View>
          ))
        )}
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
