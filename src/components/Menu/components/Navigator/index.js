import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Image, TouchableOpacity, } from 'react-native';
import style from './style';
import menuStyle from '../../style';

const Navigator = ({ isHidden, onClose }) => {
    const navigatorPosition = useRef(new Animated.Value(isHidden ? -Dimensions.get('window').width : 0)).current;

    useEffect(() => {
        Animated.timing(navigatorPosition, {
            toValue: isHidden ? -Dimensions.get('window').width : 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }, [isHidden]);

    return (
        <Animated.View style={[
            style.Navigator,
            {
                right: navigatorPosition
            }
        ]}>
            <TouchableOpacity style={menuStyle.Icon} onPress={() => onClose(true)}>
                <Image source={require('../../../../imgs/close.png')} style={menuStyle.IconImage} />
            </TouchableOpacity>
            
        </Animated.View>
    );
};

export default Navigator;