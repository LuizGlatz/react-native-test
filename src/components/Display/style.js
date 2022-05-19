import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    Display: {
        width: Dimensions.get('window').width,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#333',
        flex: 1
    },
    Text: {
        textAlign: 'right',
        fontSize: 44,
        color: '#fff'
    }
});