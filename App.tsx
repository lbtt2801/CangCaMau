import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import AppNavigator from './src/navigations/AppNavigator'
import SplashScreen from './src/screens/SplashScreen'

const App = () => {
  return (
    // <LoginScreen/>
    // <RegisterScreen/>
    <AppNavigator/>
    // <SplashScreen/>
  )
}

export default App

const styles = StyleSheet.create({})