import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {IMAGES} from '../assets/images/Images';

export default function Header({
  headerStyle,
  isShowTitle = true,
  isShowTitleSup = false,
  isShowIconLeft = false,
  isShowIconRight = false,
  title = 'Title Default',
  titleStyle,
  title_sup,
  title_supStyle,
  iconLeftData = IMAGES.ic_back,
  iconRightData,
  iconLeftStyle,
  iconRightStyle,
  iconLeftPress = () => {
    Alert.alert('This Action Press of Icon Left ');
  },
  iconRightPress = () => {
    Alert.alert('This Action Press of Icon Right ');
  },
}) {
  const HeaderIconLeft = () => {
    return (
      <TouchableOpacity onPress={() => iconLeftPress()}>
        <Image source={iconLeftData} style={[styles.iconLeft, iconLeftStyle]} />
      </TouchableOpacity>
    );
  };

  const HeaderIconRight = () => {
    return (
      <TouchableOpacity onPress={() => iconRightPress()}>
        <Image
          source={iconRightData}
          style={[styles.iconRight, iconRightStyle]}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.header, headerStyle]}>
      {isShowIconLeft == true ? HeaderIconLeft() : () => {}}
      {isShowTitleSup == true ? (
        <View style={{flex: 1}}>
          <Text style={[styles.title, titleStyle]}>
            {isShowTitle == true ? title : {}}
          </Text>
          <Text style={[styles.title, title_supStyle]}>
            {isShowTitleSup == true ? title_sup : {}}
          </Text>
        </View>
      ) : (
        <Text style={[styles.title, titleStyle]}>
          {isShowTitle == true ? title : {}}
        </Text>
      )}
      {isShowIconRight == true ? HeaderIconRight() : () => {}}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    // marginTop: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    // paddingVertical: 17,
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    color: '#000000',
    flex: 1,
  },
  iconLeft: {
    width: 24,
    height: 24,
  },
  iconRight: {
    width: 19,
    height: 22,
  },
});
