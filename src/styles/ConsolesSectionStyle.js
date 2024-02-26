import {StyleSheet} from 'react-native';

const consoleCardStyle = StyleSheet.create({
  card: {
    width: 320,
    height: 190,
    borderWidth: 2,
    borderColor: '#666666',
    borderRadius: 8,
    padding: 16,
    margin: 10,
    backgroundColor: '#1a1a1a',
  },

  title: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 8,
  },

  text: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 18,
  },

  sectionTitle: {
    fontSize: 25,
    color: '#F0EDCF',
    marginLeft: 10,
    marginTop: 15,
  },

  consoleImg: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginLeft: 170,
    marginTop: -50,
  },
});

export default consoleCardStyle;
