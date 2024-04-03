import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {RNCamera} from 'react-native-camera';

const ScanQRScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        captureAudio={false}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
    </View>
  );
};

export default ScanQRScreen;

const styles = StyleSheet.create({});
