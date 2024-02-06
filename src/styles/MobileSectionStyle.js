import {StyleSheet} from 'react-native';

const mobileCardStyle = StyleSheet.create({
  card: {
    width: 320,
    height: 190,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    margin: 10,
    backgroundColor: 'white',
  },

  title: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 8,
  },

  text: {
    fontWeight: '500',
    color: '#000000',
    fontSize: 18,
  },

  sectionTitle: {
    fontSize: 25,
    color: '#000000',
    marginLeft: 10,
    marginTop: 15,
  },

  addProductPlus: {
    fontSize: 30,
    marginLeft: 220,
    marginBottom: -22,
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
