import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const ForgotPassword_Step_Two = () => {
  const [countdown, setCountDown] = useState(59);
  const [phone, onChangePhone] = useState('');

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountDown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);
  return (
    <View style={{width: '100%'}}>
      <TextInput
        style={styles.text_input}
        onChangeText={onChangePhone}
        value={phone}
        placeholder="OTP xác nhận"
        placeholderTextColor="rgba(69, 154, 201, 0.4)"
        keyboardType="numeric"
      />

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 15,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            disabled={countdown == 0 ? false : true}
            onPress={() => {
              setCountDown(59);
            }}>
            <Text
              style={[
                styles.text_sub,
                {color: '#459AC9', textDecorationLine: 'underline'},
              ]}>
              Gửi lại OTP
            </Text>
          </TouchableOpacity>
          <Text
            style={[styles.text_sub, {color: '#005F94', fontWeight: 'bold'}]}>
            {' '}
            {countdown}
            {'s'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword_Step_Two;

const styles = StyleSheet.create({
  text_input: {
    width: '100%',
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
  text_sub: {
    fontSize: 14,
    lineHeight: 16.71,
    fontWeight: '400',
    color: '#005F94',
  },
});
