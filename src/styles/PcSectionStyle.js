import {StyleSheet} from 'react-native';

const pcCardStyle = StyleSheet.create({
  card: {
    width: 320,
    height: 230,
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
  },

  pcImage: {
    width: 70,
    height: 70,
    resizeMode: 'center',
    marginLeft: 200,
    marginTop: -150,
  },
});

export default pcCardStyle;
