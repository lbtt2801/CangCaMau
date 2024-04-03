import {
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '../assets/images/Images';
import CheckBox from '../components/CheckBox';
import {storeObject, user} from '../AsyncStorage';

const LoginScreen = ({navigation}) => {
  const [phone, onChangePhone] = useState('');
  const [pass, onChangePass] = useState('');
  const roles = ['Chủ tàu', 'Cán bộ'];
  const [isChecked, setIsChecked] = useState();

  return (
    <ImageBackground
      source={IMAGES.bg_login}
      resizeMode="stretch"
      style={styles.image}>
      <ScrollView>
        <Text style={styles.text}>ĐĂNG NHẬP</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginVertical: 15,
          }}>
          {/* <CheckBox
            rightText={'Chủ tàu'}
            rightTextStyle={styles.text_checkbox}
            isChecked={isChecked == 'Chủ tàu'}
          />
          <CheckBox
            rightText={'Cán bộ'}
            rightTextStyle={styles.text_checkbox}
            isChecked={isChecked == 'Cán bộ'}
          /> */}
          {roles.map((roleName, index) => (
            <TouchableOpacity onPress={() => setIsChecked(roleName)}>
              <CheckBox
                // () => setIsChecked(roleName)
                isChecked={roleName == isChecked ? true : false}
                rightText={roleName}
                rightTextStyle={styles.text_checkbox}
              />
            </TouchableOpacity>
          ))}
        </View>
        <TextInput
          style={styles.text_input}
          onChangeText={onChangePhone}
          value={phone}
          placeholder="Số điện thoại"
          placeholderTextColor="rgba(69, 154, 201, 0.4)"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.text_input}
          onChangeText={onChangePass}
          value={pass}
          placeholder="Mật khẩu"
          placeholderTextColor="rgba(69, 154, 201, 0.4)"
          secureTextEntry={true}
        />
        <CheckBox
          checkBoxStyle={{
            justifyContent: 'flex-end',
          }}
          rightText={'Lưu mật khẩu'}
          rightTextStyle={styles.text_checkbox}
          isChecked={true}
        />
        <View
          style={{
            flex: 0.4,
            alignItems: 'center',
            marginTop: 50,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => (
              navigation.navigate('Home'), storeObject('user', user)
            )}
            style={{
              backgroundColor: '#000000',
              borderRadius: 6,
              alignItems: 'center',
              width: 175,
              backgroundColor: '#005F94',
            }}>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 16.94,
                fontWeight: '700',
                color: '#FFFFFF',
                marginVertical: 10,
              }}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={[styles.text_checkbox, {marginVertical: 50}]}>
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.text_checkbox, {color: '#459AC9'}]}>
              Chủ tàu chưa có tài khoản?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={[
                  styles.text_checkbox,
                  {color: '#005F94', fontWeight: 'bold'},
                ]}>
                {' '}
                Đăng ký ngay
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  text: {
    color: '#005F94',
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginVertical: 65,
  },
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
    marginBottom: 15,
  },
  text_checkbox: {
    fontSize: 14,
    lineHeight: 16.71,
    fontWeight: '400',
    color: '#005F94',
  },
});
