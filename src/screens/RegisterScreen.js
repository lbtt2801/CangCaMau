import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '../assets/images/Images';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState();
  const [cccd, setCCCD] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [pass, setPass] = useState();
  const [rePass, setRePass] = useState();

  return (
    <ImageBackground
      source={IMAGES.bg_register}
      resizeMode="stretch"
      style={styles.image}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text_title}>ĐĂNG KÝ{'\n'}TÀI KHOẢN CHỦ TÀU</Text>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={IMAGES.ic_scan}
            style={{width: 16, height: 16, marginEnd: 5}}
          />
          <TouchableOpacity onPress={() => navigation.navigate('ScanQR')}>
            <Text style={styles.text_scan}>Đăng ký bằng CCCD gắn chip</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.text_input}
          onChangeText={setName}
          value={name}
          placeholder="Họ và Tên"
          placeholderTextColor="rgba(69, 154, 201, 0.4)"
        />
        <TextInput
          style={styles.text_input}
          onChangeText={setCCCD}
          value={cccd}
          placeholder="CCCD/CMND"
          placeholderTextColor="rgba(69, 154, 201, 0.4)"
        />
        <TextInput
          style={styles.text_input}
          onChangeText={setDateOfBirth}
          value={dateOfBirth}
          placeholder="Ngày Sinh"
          placeholderTextColor="rgba(69, 154, 201, 0.4)"
        />
        <TextInput
          style={styles.text_input}
          onChangeText={setAddress}
          value={address}
          placeholder="Địa chỉ"
          placeholderTextColor="rgba(69, 154, 201, 0.4)"
        />
        <TextInput
          style={styles.text_input}
          onChangeText={setPhone}
          value={phone}
          placeholder="Số điện thoại đăng ký"
          placeholderTextColor="rgba(69, 154, 201, 0.4)"
        />
        <TextInput
          style={styles.text_input}
          onChangeText={setPass}
          value={pass}
          placeholder="Mật khẩu"
          placeholderTextColor="rgba(69, 154, 201, 0.4)"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.text_input}
          onChangeText={setRePass}
          value={rePass}
          placeholder="Nhập lại mật khẩu"
          placeholderTextColor="rgba(69, 154, 201, 0.4)"
          secureTextEntry={true}
        />

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('OTPConfirm')}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 16.94,
                fontWeight: '700',
                color: '#FFFFFF',
                // marginVertical: 10,
              }}>
              Đăng ký
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.text_sub, {color: '#459AC9'}]}>
              Chủ tàu đã có tài khoản?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={[
                  styles.text_checkbox,
                  {color: '#005F94', fontWeight: 'bold'},
                ]}>
                {' '}
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  text_title: {
    color: '#005F94',
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign: 'center',
    marginVertical: 50,
    textTransform: 'uppercase',
  },
  text_scan: {
    color: '#005F94',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
  text_input: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: '400',
    color: '#005F94',
    paddingVertical: 5,
    height: 35,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    shadowColor: 'rgba(69, 154, 201, 0.1)',
    shadowRadius: 6,
    borderColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 6,
    alignItems: 'center',
    width: 175,
    backgroundColor: '#005F94',
    paddingVertical: 10,
    marginVertical: 50,
  },
  text_sub: {
    fontSize: 14,
    lineHeight: 16.71,
    fontWeight: '400',
    color: '#005F94',
  },
});
