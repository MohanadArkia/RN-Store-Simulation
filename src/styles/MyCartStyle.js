import {StyleSheet} from 'react-native';

const MyCartStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 5,
  },

  quantityContainer: {
    alignItems: 'center',
  },

  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  emptyCartContainer: {
    height: 550,
    alignItems: 'center',
    justifyContent: 'center',
  },

  priceAndPayButtonContainer: {
    alignItems: 'center',
  },

  txt: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '500',
    marginBottom: 20,
    marginRight: 10,
  },

  cartImage: {
    width: 80,
    height: 80,
    resizeMode: 'center',
  },

  emptyCartText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
  },

  quantityButton: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },

  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },

  priceText: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 25,
    marginTop: 25,
  },

  payButton: {
    width: '50%',
    marginBottom: 25,
  },

  trashCanIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 5,
  },
});

export default MyCartStyle;
