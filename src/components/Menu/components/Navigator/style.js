import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    Navigator: {
        position: 'absolute',
        top: 0,
        zIndex: 3,
        backgroundColor: '#f8f8f8',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
});