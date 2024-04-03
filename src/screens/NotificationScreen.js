import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import ItemNotification from '../components/ItemNotification';
import {NotificationList} from '../MockData';

const NotificationScreen = ({naviagation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Thông báo"
        titleStyle={{
          textAlign: 'center',
          marginTop: 5,
        }}
      />

      <Search
        placeholder={'Nhập nội dung tìm kiếm'}
        placeholderStyle={styles.placeholder}
        textInputStyle={styles.textInput}
      />

      <FlatList
        contentContainerStyle={{paddingBottom: 75}}
        data={NotificationList}
        renderItem={({item}) => (
          <ItemNotification
            isNew={item.id < 2 ? true : false}
            icon={item.icon}
            title={item.title}
            content={item.content}
            date={item.date}
            navigation={naviagation}
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 10,
  },
  placeholder: {
    marginStart: 5,
    color: '#333',
    fontWeight: '400',
    fontSize: 14,
  },
  textInput: {
    backgroundColor: 'rgba(51, 51, 51, 0.05)',
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 0,
    marginStart: 20,
    marginEnd: 15,
  },
});
