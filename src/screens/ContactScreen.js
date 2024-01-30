import {Text, View} from 'react-native';
import React from 'react';

import ContactScreenStyle from '../styles/ContactStyle';

const ContactScreen = () => {
  return (
    <View style={ContactScreenStyle.container}>
      <Text style={ContactScreenStyle.txt}>Email: test@gmail.com</Text>
      <Text style={ContactScreenStyle.txt}>Phone: (123) - 456789</Text>
    </View>
  );
};

export default ContactScreen;
