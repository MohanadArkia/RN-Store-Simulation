import {StyleSheet} from 'react-native';

const ProductInfoStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },

  productSpecs: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '500',
  },

  img: {
    width: 300,
    height: 300,
    resizeMode: 'center',
    alignSelf: 'center',
  },
});

export default ProductInfoStyle;
