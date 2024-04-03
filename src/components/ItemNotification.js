import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IMAGES} from '../assets/images/Images';
import EllipseCustom from './EllipseCustom';

const ItemNotification = ({
  title = 'Cảnh báo',
  content = 'Xem chi tiết cảnh báo ngày 10 tháng 10 2022',
  date = '01/10/2022',
  icon = IMAGES.ic_warning,
  isNew = false,
  navigation,
}) => {
  return (
    <TouchableOpacity
      style={{flex: 1, paddingStart: 20, flexDirection: 'column'}}>
      {isNew == true ? (
        <EllipseCustom
          styleEllipse={{
            position: 'absolute',
            marginTop: 22,
            marginHorizontal: 5,
          }}
        />
      ) : (
        <></>
      )}
      <View style={styles.container}>
        <Image source={icon} style={{width: 40, height: 40, marginTop: 15}} />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            marginHorizontal: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Text style={styles.title}>{title}</Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.date}>{date}</Text>
              <Image
                source={IMAGES.ic_back_right}
                style={{
                  width: 12,
                  height: 12,
                  tintColor: '#828282',
                }}
              />
            </View>
          </View>
          <Text style={styles.content}>{content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemNotification;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: '#D6D6D6',
    borderBottomColor: '#D6D6D6',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  title: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
  date: {
    color: '#ADADAD',
    fontSize: 12,
    fontWeight: '400',
  },
  content: {
    color: '#0D0D0D',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 15,
  },
});
