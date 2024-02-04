import {View} from 'react-native';
import React from 'react';

import PcCard from '../components/PcCard';
import ConsoleCard from '../components/ConsoleCard';
import MobileCard from '../components/MobileCard';

import {Computers} from '../res/PcData';
import {Consoles} from '../res/ConsoleData';
import {Mobile} from '../res/MobileData';

export const renderComputers = props => {
  const computersSpecs = Computers.map((comp, index) => {
    return (
      <View key={index}>
        <PcCard
          brand={comp.brand}
          cpu={comp.cpu}
          ram={comp.ram}
          gpu={comp.gpu}
          storage={comp.storage}
          price={comp.price}
          img={comp.img}
        />
      </View>
    );
  });
  return computersSpecs;
};

export const renderConsoles = () => {
  const consoles = Consoles.map((con, index) => {
    return (
      <View key={index}>
        <ConsoleCard
          brand={con.brand}
          release={con.release}
          price={con.price}
          img={con.img}
        />
      </View>
    );
  });
  return consoles;
};

export const renderMobiles = () => {
  const mobiles = Mobile.map((mob, index) => {
    return (
      <View key={index}>
        <MobileCard
          brand={mob.brand}
          release={mob.release}
          price={mob.price}
          img={mob.img}
        />
      </View>
    );
  });
  return mobiles;
};
