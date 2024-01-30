import {Text, View} from 'react-native';
import React from 'react';

import ConsoleCard from '../components/ConsoleCard';
import PcCard from '../components/PcCard';
import MobileCard from '../components/MobileCard';

const ProductInfo = props => {
  const {pcCards, consoleCards, mobileCards} = props.route.params;
  return (
    <View>
      {pcCards && <PcCard {...pcCards} />}
      {consoleCards && <ConsoleCard {...consoleCards} />}
      {mobileCards && <MobileCard {...mobileCards} />}
    </View>
  );
};

export default ProductInfo;
