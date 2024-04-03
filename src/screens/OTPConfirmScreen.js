import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IMAGES} from '../assets/images/Images';
import Header from '../components/Header';

const OTPConfirmScreen = ({navigation}) => {
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
    <ImageBackground
      source={IMAGES.bg_register}
      resizeMode="stretch"
      style={styles.image}>
      <Header
        headerStyle={{backgroundColor: 'transparent'}}
        title=""
        isShowIconLeft={true}
        iconLeftPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.text_title}>OTP xác nhận</Text>
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text_button}>Xác nhận</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default OTPConfirmScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  text_title: {
    color: '#005F94',
    fontSize: 24,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 64,
    marginTop: 20,
  },
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
  button: {
    backgroundColor: '#000000',
    borderRadius: 6,
    alignItems: 'center',
    width: 175,
    backgroundColor: '#005F94',
    paddingVertical: 10,
    marginTop: 48,
  },
  text_button: {
    fontSize: 14,
    lineHeight: 16.94,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  text_sub: {
    fontSize: 14,
    lineHeight: 16.71,
    fontWeight: '400',
    color: '#005F94',
  },
});
