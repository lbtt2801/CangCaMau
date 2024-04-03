import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {IMAGES} from '../assets/images/Images';
import TabPager from '../components/TabPager';

const ImportExportScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor="#459AC9" />
      <Header
        title="Thông tin xuất nhập bến"
        titleStyle={{
          textAlign: 'center',
          color: '#FFFFFF',
        }}
        isShowIconLeft={true}
        iconLeftData={IMAGES.ic_back}
        iconLeftStyle={{
          tintColor: '#FFFFFF',
          width: 20,
          height: 20,
        }}
        iconLeftPress={() => {
          state == false
            ? navigation.goBack()
            : (setState(false), setIsShowIconRight(false));
        }}
        headerStyle={{
          paddingTop: 5,
          paddingBottom: 17,
          paddingHorizontal: 12,
          backgroundColor: '#459AC9',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />

      <TabPager/>
    </View>
  );
};

export default ImportExportScreen;

const styles = StyleSheet.create({});
