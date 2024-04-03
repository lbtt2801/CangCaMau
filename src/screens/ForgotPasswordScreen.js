import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '../assets/images/Images';
import Header from '../components/Header';
import ForgotPassword_Step_One from '../components/ForgotPassword_Step_One';
import ForgotPassword_Step_Two from '../components/ForgotPassword_Step_Two';
import ForgotPassword_Step_Three from '../components/ForgotPassword_Step_Three';

const ForgotPasswordScreen = ({navigation}) => {
  const [state, setState] = useState(1);
  const [textButton, setTextButton] = useState('Xác nhận');

  return (
    <ImageBackground
      source={IMAGES.bg_register}
      resizeMode="stretch"
      style={{flex: 1, alignItems: 'center', paddingHorizontal: 15}}>
      <Header
        headerStyle={{backgroundColor: 'transparent'}}
        title=""
        isShowIconLeft={true}
        iconLeftPress={() => {
          switch (state) {
            case 1: {
              navigation.goBack();
              break;
            }
            case 2: {
              setState(state - 1);
              break;
            }
            case 3: {
              setState(state - 1);
              setTextButton('Xác nhận');
              break;
            }
          }
        }}
      />
      <Text style={styles.text_title}>Quên mật khẩu</Text>
      {state == 1 ? (
        <ForgotPassword_Step_One />
      ) : state == 2 ? (
        <ForgotPassword_Step_Two />
      ) : (
        <ForgotPassword_Step_Three />
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => (
          state == 2 ? setTextButton('Đổi mật khẩu') : {},
          state < 3 ? setState(state + 1) : 3,
          state == 3 ? navigation.goBack() : {}
        )}>
        <Text style={styles.text_button}>{textButton}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
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
