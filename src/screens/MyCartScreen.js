import {Image, ScrollView, Text, View} from 'react-native';
import React, {useContext} from 'react';

import MyContext from '../store/MyContext';

import styles from '../styles/MyCartStyle';

const MyCartScreen = () => {
  const {cart} = useContext(MyContext);

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
            </View>
          ))
        )}
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>{renderItemsInMyCart()}</View>
    </ScrollView>
  );
};

export default MyCartScreen;
