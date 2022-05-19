import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  Button: {
    width: Dimensions.get('window').width / 4,
    height: 80,
    underlayColor: '#fff',
    backgroundColor: '#f8f8f8',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonDouble: {
    width: Dimensions.get('window').width / 2,
  },
  ButtonOrange: {
    backgroundColor: '#f39c12',
    borderColor: '#e38c02',
    underlayColor: '#fba81a',
    Text: {
      color: '#fff',
    },
  },
  ButtonGrey: {
    underlayColor: '#f0f0f0',
    backgroundColor: '#e8e8e8',
    borderColor: '#e0e0e0',
  },
  Text: {
    fontSize: 24,
  },
});
