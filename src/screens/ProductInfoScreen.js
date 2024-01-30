import {Text, View} from 'react-native';
import React from 'react';

import ConsoleCard from '../components/ConsoleCard';
import PcCard from '../components/PcCard';
import MobileCard from '../components/MobileCard';

import styles from '../styles/ProductInfoStyle';

const ProductInfo = props => {
  const {pcCards, consoleCards, mobileCards} = props.route.params;

  return (
    <View style={styles.container}>
      {pcCards && <PcCard {...pcCards} hidePlus={true} />}
      {consoleCards && <ConsoleCard {...consoleCards} hidePlus={true} />}
      {mobileCards && <MobileCard {...mobileCards} hidePlus={true} />}
    </View>
  );
};

export default ProductInfo;
