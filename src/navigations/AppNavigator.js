import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SplashScreen from '../screens/SplashScreen';
import OTPConfirmScreen from '../screens/OTPConfirmScreen';
import ScanQRScreen from '../screens/ScanQRScreen';
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {IMAGES} from '../assets/images/Images';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import InformationScreen from '../screens/InformationScreen';
import ImportExportScreen from '../screens/ImportExportScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="TabHome"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          height: 75,
          borderTopStartRadius: 35,
          borderTopEndRadius: 35,
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarIconStyle: {width: 24, marginHorizontal: 5},
      }}>
      <Tab.Screen
        name="TabHome"
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: focused ? '#005F94' : '#000000',
              }}>
              {focused ? 'Trang chủ' : ''}
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.ic_home}
              style={{
                tintColor: focused ? '#005F94' : '#000000',
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TabNotification"
        component={NotificationScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: focused ? '#005F94' : '#000000',
              }}>
              {focused ? 'Thông báo' : ''}
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.ic_notification}
              style={{
                tintColor: focused ? '#005F94' : '#000000',
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TabProfile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: focused ? '#005F94' : '#000000',
              }}>
              {focused ? 'Cá nhân' : ''}
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.ic_profile}
              style={{
                tintColor: focused ? '#005F94' : '#000000',
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'ImportExport'}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="OTPConfirm" component={OTPConfirmScreen} />
        <Stack.Screen name="ScanQR" component={ScanQRScreen} />
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="Information" component={InformationScreen} />
        <Stack.Screen name="ImportExport" component={ImportExportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
