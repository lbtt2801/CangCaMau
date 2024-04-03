import {View} from 'react-native';
import React from 'react';

const EllipseCustom = ({size = 10, color = '#459AC9', styleEllipse}) => {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: 100,          
        },
        styleEllipse,
      ]}></View>
  );
};

export default EllipseCustom;
