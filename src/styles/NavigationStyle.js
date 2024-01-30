import {StyleSheet} from 'react-native';

const navBarStyle = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },

  li: {
    color: '#000000',
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 7,
    padding: 5,
  },

  navIcons: {
    width: 50,
    height: 50,
    marginLeft: 300,
    marginBottom: 10,
  },
});

export default navBarStyle;
