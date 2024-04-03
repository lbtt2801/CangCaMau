import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {IMAGES} from '../assets/images/Images';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
    //   navigation.navigate('Login');
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <ImageBackground
      source={IMAGES.bg_splash_screen}
      resizeMode="stretch"
      style={{flex: 1, alignItems: 'center'}}>
      <Image
        source={IMAGES.ic_splash_screen}
        style={{width: 170, height: 200, marginTop: 70}}
      />
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
