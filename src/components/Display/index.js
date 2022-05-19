import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

const Display = ({ text }) => (
    <View style={style.Display}>
        <Text style={style.Text} numberOfLines={1}>{ text }</Text>
    </View>
);

export default Display;