import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '../assets/images/Images';
import TabPager from '../components/TabPager';
import HeaderCustom from '../components/HeaderCustom';

const ImportExportScreen = ({navigation}) => {
  const [seleted, setSeleted] = useState(false);
  const [isShowTitle, setIsShowTitle] = useState(true);
  const [isShowSearchBar, setIsShowSearchBar] = useState(false);
  const [isShowIconRight, setIsShowIconRight] = useState(false);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#459AC9" />
      <HeaderCustom
        isShowTitle={isShowTitle}
        title="Thông tin xuất nhập bến"
        titleStyle={{
          color: '#FFF',
          fontSize: 16,
          fontWeight: '700',
        }}
        headerStyle={{
          paddingTop: 5,
          paddingBottom: 17,
          backgroundColor: '#459AC9',
          paddingHorizontal: 12,
        }}
        isShowIconLeft={true}
        iconLeftData={IMAGES.ic_back}
        iconLeftStyle={{width: 20, height: 20, tintColor: '#FFF'}}
        iconLeftPress={() => navigation.goBack()}
        isShowIconRight={isShowIconRight}
        iconRightData={IMAGES.ic_search}
        iconRightStyle={{width: 18, height: 18, tintColor: '#FFF'}}
        iconRightPress={() =>
          isShowSearchBar == false
            ? (setIsShowTitle(false),
              setIsShowSearchBar(true),
              setIsShowIconRight(false))
            : (setIsShowTitle(true),
              setIsShowSearchBar(false),
              setIsShowIconRight(true))
        }
        isShowSearchBar={isShowSearchBar}
        isShowButton={isShowSearchBar}
      />

      {isShowSearchBar == false ? (
        <View style={{flexDirection: 'row', marginTop: 15, marginStart: 12}}>
          <TouchableOpacity
            style={{
              borderBottomColor: '#005F94',
              borderBottomWidth: seleted == true ? 0 : 3,
              marginEnd: 35,
            }}
            onPress={() => (
              setSeleted(false),
              setIsShowTitle(true),
              setIsShowSearchBar(false),
              setIsShowIconRight(false)
            )}>
            <Text
              style={[
                styles.tab_name,
                {color: seleted == true ? '#ADADAD' : '#005F94'},
              ]}>
              Danh sách
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderBottomColor: '#005F94',
              borderBottomWidth: seleted == true ? 3 : 0,
              marginEnd: 35,
            }}
            onPress={() => (setSeleted(true), setIsShowIconRight(true))}>
            <Text
              style={[
                styles.tab_name,
                {color: seleted == true ? '#005F94' : '#ADADAD'},
              ]}>
              Lịch sử yêu cầu
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{flexDirection: 'row', marginStart: 12, marginVertical: 10}}>
          <TouchableOpacity
            style={styles.border}
            onPress={() => navigation.navigate('FilterResults')}>
            <Image
              source={IMAGES.ic_filter}
              style={{width: 14, height: 14, marginEnd: 3}}
            />
            <Text style={styles.text_button}>Lọc</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.border}>
            <Text style={styles.text_button}>Tất cả tình trạng </Text>
            <Image
              source={IMAGES.ic_options}
              style={{width: 10, height: 6, marginStart: 3}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.border}>
            <Text style={styles.text_button}>Tất cả thao tác </Text>
            <Image
              source={IMAGES.ic_options}
              style={{width: 10, height: 6, marginStart: 3}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.border, {backgroundColor: '#e8e8e8'}]}>
            <Image
              source={IMAGES.ic_calendar}
              style={{width: 14, height: 14, marginEnd: 3}}
            />
            <Text style={styles.text_button}>Thời gian gửi</Text>
          </TouchableOpacity>
        </View>
      )}

      <TabPager seleted={seleted} />
    </View>
  );
};

export default ImportExportScreen;

const styles = StyleSheet.create({
  tab_name: {
    fontSize: 14,
    fontWeight: '700',
  },
  text_button: {
    fontSize: 12,
    fontWeight: '400',
    color: '#333333',
  },
  border: {
    borderColor: '#D6D6D6',
    borderWidth: 1,
    borderRadius: 4,
    marginEnd: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
