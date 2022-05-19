import React, {useEffect, useState} from 'react';
import {Text, TouchableHighlight} from 'react-native';
import style from './style';

const Button = ({
  children,
  onPress = _ => _,
  double,
  orangeButton,
  greyButton,
  style: parentStyle,
  onPressValue,
  label,
}) => {
  const [underlayColor, setUnderlayColor] = useState(
    style.Button.underlayColor,
  );

  useEffect(() => {
    switch (true) {
      case orangeButton:
        setUnderlayColor(style.ButtonOrange.underlayColor);
        break;
      case greyButton:
        setUnderlayColor(style.ButtonGrey.underlayColor);
        break;
      default:
        setUnderlayColor(style.Button.underlayColor);
    }
  }, [orangeButton, greyButton]);

  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      activeOpacity={0.75}
      onPress={() => onPress(onPressValue || label || children)}
      style={[
        style.Button,
        double && style.ButtonDouble,
        orangeButton && style.ButtonOrange,
        greyButton && style.ButtonGrey,
        {...parentStyle},
      ]}>
      <Text style={[style.Text, orangeButton && style.ButtonOrange.Text]}>
        {label || children}
      </Text>
    </TouchableHighlight>
  );
};

export default Button;
