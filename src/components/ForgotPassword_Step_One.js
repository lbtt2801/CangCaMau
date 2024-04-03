import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const ForgotPassword_Step_One = () => {
  const [phone, onChangePhone] = useState('');
  
  return (
    <View style={{width: '100%'}}>
      <TextInput
        style={styles.text_input}
        onChangeText={onChangePhone}
        value={phone}
        placeholder="Số điện thoại đăng ký"
        placeholderTextColor="rgba(69, 154, 201, 0.4)"
        keyboardType="numeric"
      />
    </View>
  );
};

export default ForgotPassword_Step_One;

const styles = StyleSheet.create({
  text_input: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: '400',
    color: '#005F94',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    shadowColor: 'rgba(69, 154, 201, 0.1)',
    shadowRadius: 6,
    borderColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
  },
  text_button: {
    fontSize: 14,
    lineHeight: 16.94,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
