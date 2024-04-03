import {StyleSheet, TextInput, View} from 'react-native';
import React, { useState } from 'react';

const ForgotPassword_Step_Three = () => {
  const [pass, setPass] = useState('');
  const [repass, setRePass] = useState('');

  return (
    <View style={{width:'100%'}}>
      <TextInput
          style={styles.text_input}
          onChangeText={setPass}
          value={pass}
          placeholder="Nhập mật khẩu mới"
          placeholderTextColor="rgba(69, 154, 201, 0.4)"
          secureTextEntry={true}
        />

        <TextInput
          style={styles.text_input}
          onChangeText={setRePass}
          value={repass}
          placeholder="Nhập lại mật khẩu"
          placeholderTextColor="rgba(69, 154, 201, 0.4)"
          secureTextEntry={true}
        />
    </View>
  );
};

export default ForgotPassword_Step_Three;

const styles = StyleSheet.create({
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
});
