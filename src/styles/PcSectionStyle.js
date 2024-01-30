import {StyleSheet} from 'react-native';

const pcCardStyle = StyleSheet.create({
  card: {
    width: 300,
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
    fontWeight: 'bold',
    marginBottom: 8,
  },

  text: {
    color: '#000000',
    fontSize: 18,
  },

  sectionTitle: {
    fontSize: 25,
    color: '#000000',
    marginLeft: 10,
  },

  addProductPlus: {
    fontSize: 30,
    marginLeft: 220,
    marginBottom: -40,
  },

  pcImage: {
    width: 70,
    height: 70,
    resizeMode: 'center',
    marginLeft: 140,
    marginTop: -150,
  },
});

export default pcCardStyle;
