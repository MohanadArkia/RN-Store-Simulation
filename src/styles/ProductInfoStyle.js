import {StyleSheet} from 'react-native';

const ProductInfoStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#323232',
  },

  productSpecs: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: '500',
  },

  img: {
    width: 300,
    height: 300,
    resizeMode: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },
});

export default ProductInfoStyle;
