import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  Navigator: {
    position: 'absolute',
    top: 0,
    zIndex: 3,
    backgroundColor: '#f8f8f8',
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 10
    },
    elevation: 10
  },
});
