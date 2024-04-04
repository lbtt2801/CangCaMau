import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {IMAGES} from '../assets/images/Images';
import Search from './Search';

export default function HeaderCustom({
  headerStyle,
  isShowTitle = true,
  isShowIconLeft = false,
  isShowIconRight = false,
  isShowSearchBar = false,
  isShowButton = false,
  title = 'Title Default',
  titleStyle,
  iconLeftData = IMAGES.ic_back,
  iconRightData,
  iconLeftStyle,
  iconRightStyle,
  buttonPress,
  iconLeftPress = () => {
    Alert.alert('This Action Press of Icon Left ');
  },
  iconRightPress = () => {
    Alert.alert('This Action Press of Icon Right ');
  },
}) {
  const HeaderIconLeft = () => {
    return (
      <TouchableOpacity onPress={iconLeftPress}>
        <Image source={iconLeftData} style={[styles.iconLeft, iconLeftStyle]} />
      </TouchableOpacity>
    );
  };

  const HeaderIconRight = () => {
    return (
      <TouchableOpacity onPress={iconRightPress}>
        <Image
          source={iconRightData}
          style={[styles.iconRight, iconRightStyle]}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.header, headerStyle]}>
      {isShowIconLeft == true ? HeaderIconLeft() : <View></View>}

      {isShowTitle == true ? (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      ) : (
        <></>
      )}

      {isShowSearchBar == true ? (
        <Search
          placeholder={'Nhập số đăng ký tàu, CMND/CCCD...'}
          placeholderStyle={styles.placeholderStyle}
          placeholderTextColor="#FFF"
          textInputStyle={styles.textInputStyle}
          iconStyle={styles.iconSearch}
        />
      ) : (
        <></>
      )}

      {isShowButton == true ? (
        <TouchableOpacity onPress={iconRightPress} style={{marginStart: 15}}>
          <Text style={styles.placeholderStyle}>Đóng</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
      {isShowIconRight == true ? (
        HeaderIconRight()
      ) : (
        <View style={{width: 18}}></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    color: '#000000',
  },
  iconLeft: {
    width: 24,
    height: 24,
  },
  iconRight: {
    width: 18,
    height: 18,
  },
  placeholderStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFF',
    paddingVertical: 0,
  },
  textInputStyle: {
    borderRadius: 100,
    backgroundColor: '#6AAED4',
    marginTop: -6,
    marginBottom: -7,
    height: 34,
  },
  iconSearch: {
    width: 18,
    height: 18,
    tintColor: '#FFF',
    marginEnd: -10,
  },
});
