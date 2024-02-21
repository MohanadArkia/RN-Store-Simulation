import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import Images from '../assets/images/images';
import MyContext from '../store/MyContext';
import styles from '../styles/MyCartStyle';

const CartItem = props => {
  const {item} = props;
  const {setCart, cart} = useContext(MyContext);

  const incrementQuantity = () => {
    const updatedCart = cart.map(product => {
      if (product.id === item.id) {
        return {...product, quantity: (product.quantity || 1) + 1};
      }
      return product;
    });
    setCart(updatedCart);
  };

  const decrementQuantity = () => {
    const updatedCart = cart.map(product => {
      if (product.id === item.id && (product.quantity || 1) > 1) {
        return {...product, quantity: (product.quantity || 1) - 1};
      }
      return product;
    });
    setCart(updatedCart);
  };

  const renderQuantityControls = () => (
    <View style={styles.quantityContainer}>
      <TouchableOpacity onPress={incrementQuantity}>
        <Text style={styles.quantityButton}>+</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{item.quantity}</Text>
      <TouchableOpacity onPress={decrementQuantity}>
        <Text style={styles.quantityButton}>-</Text>
      </TouchableOpacity>
    </View>
  );

  const renderComputerDescription = productItem => {
    return `
      Brand: ${productItem.brand}
      Cpu: ${productItem.cpu}
      Ram: ${productItem.ram}
      Gpu: ${productItem.gpu}
      Storage: ${productItem.storage}
      Price: ${productItem.price}
    `;
  };

  const renderAnythingElse = productItem => {
    return `
      Brand: ${productItem.brand}
      Release: ${productItem.release}
      Price: ${productItem.price}
   `;
  };

  const removeProduct = id => {
    const filteredArr = cart.filter(cartItem => cartItem?.id !== id);
    setCart([...filteredArr]);
  };

  return (
    <View style={styles.imageContainer}>
      <Image source={item.img} style={styles.cartImage} />
      <Text style={styles.txt}>
        {item.cpu
          ? renderComputerDescription(item)
          : item.release
            ? renderAnythingElse(item)
            : ''}
      </Text>
      {renderQuantityControls()}
      <TouchableOpacity onPress={() => removeProduct(item.id)}>
        <Image style={styles.trashCanIcon} source={Images.trashIcon()} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
