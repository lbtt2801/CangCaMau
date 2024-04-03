import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import TextInputCustom from '../components/TextInputCustom';
import {IMAGES} from '../assets/images/Images';

const ChangePasswordScreen = ({navigation}) => {
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [rePass, setRePass] = useState('');
  return (
    <View style={{paddingHorizontal: 12}}>
      <StatusBar backgroundColor='#F5F5F5'/>
      <Header
        title="Đổi mật khẩu"
        titleStyle={{
          textAlign: 'center',
          marginTop: 5,
          marginBottom: 17,
        }}
        isShowIconLeft={true}
        iconLeftData={IMAGES.ic_back}
        iconLeftStyle={{
          tintColor: '#333333',
          width: 20,
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        iconLeftPress={() => {navigation.goBack()}}
      />

      <View style={styles.container}>
        <TextInputCustom
          label="Nhập mật khẩu cũ"
          value={oldPass}
          setValue={value => setOldPass(value)}
        />

        <TextInputCustom
          label="Nhập mật khẩu mới"
          value={newPass}
          setValue={value => setNewPass(value)}
        />

        <TextInputCustom
          label="Nhập lại mật khẩu"
          value={rePass}
          setValue={value => setRePass(value)}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text_button}>Đổi mật khẩu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingBottom: 5,
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#005F94',
    borderRadius: 6,
    alignItems: 'center',
    paddingVertical: 11,
    marginHorizontal: 100,
    marginTop: 20,
  },
  text_button: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
