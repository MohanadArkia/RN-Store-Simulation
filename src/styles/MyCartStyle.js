import {StyleSheet} from 'react-native';

const MyCartStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#323232',
  },

  emptyCartContainer: {
    height: 710,
    justifyContent: 'center',
    alignItems: 'center',
  },

  priceAndPayButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  quantityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt: {
    fontSize: 17,
    color: '#ffffff',
    fontWeight: '500',
    marginRight: 10,
  },

  cartImage: {
    width: 80,
    height: 80,
    resizeMode: 'center',
    backgroundColor: '#ffffff',
  },

  emptyCartText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  quantityButton: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  priceText: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 25,
    marginTop: 25,
  },

  payButton: {
    width: 200,
    marginBottom: 25,
  },

  trashCanIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  cartIcon: {
    width: 50,
    height: 50,
  },
});

export default MyCartStyle;
