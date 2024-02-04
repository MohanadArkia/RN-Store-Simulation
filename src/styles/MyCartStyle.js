import {StyleSheet} from 'react-native';

const MyCartStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 10,
  },

  txt: {
    fontSize: 17,
    color: '#000000',
    marginBottom: 20,
  },

  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cartImage: {
    width: 70,
    height: 70,
  },

  emptyCartContainer: {
    height: 550,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyCartText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default MyCartStyle;
