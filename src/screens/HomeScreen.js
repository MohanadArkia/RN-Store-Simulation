import {ScrollView, View, Text} from 'react-native';
import React from 'react';

import styles from '../styles/AppStyle';
import PcStyles from '../styles/PcSectionStyle';
import ConsoleStyles from '../styles/ConsolesSectionStyle';
import MobileStyles from '../styles/MobileSectionStyle';

import {
  renderComputers,
  renderConsoles,
  renderMobiles,
} from '../utils/CardRenderer';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.myPaddingTop}>
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
