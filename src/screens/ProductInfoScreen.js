import {Text, View} from 'react-native';
import React from 'react';

import ConsoleCard from '../components/ConsoleCard';
import PcCard from '../components/PcCard';
import MobileCard from '../components/MobileCard';

const ProductInfo = props => {
  const pcItems = props.route.params.pcCards;
  const consoleItems = props.route.params.consoleCards;
  const mobileItems = props.route.params.mobileCards;

  return (
    <View>
      <PcCard {...pcItems} />
      <ConsoleCard {...consoleItems} />
      <MobileCard {...mobileItems} />
    </View>
  );
};

export default ProductInfo;
