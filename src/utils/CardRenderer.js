import {View} from 'react-native';
import React from 'react';

import PcCard from '../components/PcCard';
import ConsoleCard from '../components/ConsoleCard';
import MobileCard from '../components/MobileCard';

import {Computers} from '../res/PcData';
import {Consoles} from '../res/ConsoleData';
import {Mobile} from '../res/MobileData';

export const renderComputers = () => {
  const computersSpecs = Computers.map((comp, index) => {
    return (
      <View key={index}>
        <PcCard {...comp} />
      </View>
    );
  });
  return computersSpecs;
};

export const renderConsoles = () => {
  const consoles = Consoles.map((con, index) => {
    return (
      <View key={index}>
        <ConsoleCard {...con} />
      </View>
    );
  });
  return consoles;
};

export const renderMobiles = () => {
  const mobiles = Mobile.map((mob, index) => {
    return (
      <View key={index}>
        <MobileCard {...mob} />
      </View>
    );
  });
  return mobiles;
};
