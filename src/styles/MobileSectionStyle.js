import {StyleSheet} from 'react-native';

const mobileCardStyle = StyleSheet.create({
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
    fontWeight: '500',
    color: '#ffffff',
    fontSize: 18,
  },

  sectionTitle: {
    fontSize: 25,
    color: '#F0EDCF',
    marginLeft: 10,
    marginTop: 15,
  },

  mobileImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginLeft: 170,
    marginTop: -50,
  },
});

export default mobileCardStyle;
