import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from '../styles/AppStyle';
import PcStyles from '../styles/PcSectionStyle';
import ConsoleStyles from '../styles/ConsolesSectionStyle';
import MobileStyles from '../styles/MobileSectionStyle';
import NavStyle from '../styles/NavigationStyle';

import ScreenNames from '../../route/ScreenNames';

import {
  renderComputers,
  renderConsoles,
  renderMobiles,
} from '../utils/CardRenderer';

const HomeScreen = props => {
  const onContactPress = () => {
    props.navigation.navigate(ScreenNames.Contact);
  };

  const onAboutPress = () => {
    props.navigation.navigate(ScreenNames.About);
  };

  const onCartIconPress = () => {
    props.navigation.navigate(ScreenNames.MyCart);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={NavStyle.container}>
          <Text style={NavStyle.li} onPress={onContactPress}>
            Contact
          </Text>

          <Text style={NavStyle.li} onPress={onAboutPress}>
            About
          </Text>

          <Text style={NavStyle.li} onPress={onCartIconPress}>
            My Cart
          </Text>
        </TouchableOpacity>

        <Text style={PcStyles.sectionTitle}>Computers Section</Text>
        <ScrollView horizontal>{renderComputers()}</ScrollView>

        <Text style={ConsoleStyles.sectionTitle}>Consoles Section</Text>
        <ScrollView horizontal>{renderConsoles()}</ScrollView>

        <Text style={MobileStyles.sectionTitle}>Mobile Section</Text>
        <ScrollView horizontal>{renderMobiles()}</ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
