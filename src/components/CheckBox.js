import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '../assets/images/Images';

const CheckBox = ({
  disable = false,
  isChecked = false,
  rightText,
  leftText,
  checkBoxStyle,
  rightTextStyle,
  leftTextStyle,
  iconCheckTrue = IMAGES.ic_checkbox_login_true,
  iconCheckFalse = IMAGES.ic_checkbox_login_false,
  size = 16,
}) => {
  const [isCheck, setIsCheck] = useState(isChecked);
  return (
    <TouchableOpacity
      style={[
        checkBoxStyle,
        {flexDirection: 'row', margin: 2, alignItems: 'center'},
      ]}
      onPress={() => {
        setIsCheck(!isCheck);
      }}
      disabled={disable}>
      <Text
        style={[
          leftTextStyle,
          {color: isCheck == true ? '#005F94' : '#79AECA'},
        ]}>
        {leftText}
      </Text>
      <Image
        source={isCheck == true ? iconCheckTrue : iconCheckFalse}
        style={{
          width: size,
          height: 16,
          marginHorizontal: 5,
          tintColor: isCheck == true ? '#005F94' : '#79AECA',
        }}
      />
      <Text
        style={[
          rightTextStyle,
          {color: isCheck == true ? '#005F94' : '#79AECA'},
        ]}>
        {rightText}
      </Text>
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({});
