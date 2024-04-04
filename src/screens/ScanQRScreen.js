import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {IMAGES} from '../assets/images/Images';
import {updateObject} from '../AsyncStorage';
const ScanQRScreen = ({navigation}) => {
  getDataFromQR = e => {
    const strGetData = e.data;
    const arrProps = strGetData.split('|');
    const strAddress = arrProps[5]
    const arrPropsAddress = strAddress.split(',');

    updateObject(
      'user',
      arrProps[2],
      arrProps[0],
      arrProps[3].replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3"),
      arrPropsAddress[0] + arrPropsAddress[1],
      arrPropsAddress[2],
      arrPropsAddress[3],
      arrPropsAddress[4],
      arrProps[6].replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3"),
    );
    setTimeout(() => {
      navigation.goBack();
    }, 500);
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#FFFFFF" />
      <Header
        title="Quét QR"
        titleStyle={{
          textAlign: 'center',
          marginTop: 5,
          marginBottom: 17,
          color: '#333333',
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
        iconLeftPress={() => navigation.goBack()}
        headerStyle={{marginHorizontal: 12}}
      />

      <QRCodeScanner
        onRead={this.getDataFromQR}
        flashMode={RNCamera.Constants.FlashMode.off}
        showMarker={true}
        markerStyle={{borderColor: 'red', borderRadius: 25}}
        topContent={
          <Text style={styles.centerText}>
            Đặt mã QR ở trung tâm hình vuông để kiểm tra tự động
          </Text>
        }
      />
    </View>
  );
};

export default ScanQRScreen;

const styles = StyleSheet.create({
  centerText: {
    fontSize: 14,
    fontWeight: '400',
    alignItems: 'center',
    marginBottom: 40,
  },
});
