import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ItemImportExport from './ItemImportExport';
import {HISTORY_ImportExport, LIST_ImportExport} from '../MockData';

const TabPager = () => {
  const [seleted, setSeleted] = useState(false);

  return (
    <View style={{paddingStart: 12}}>
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <TouchableOpacity
          style={{
            borderBottomColor: '#005F94',
            borderBottomWidth: seleted == true ? 0 : 3,
            marginEnd: 35,
          }}
          onPress={() => setSeleted(false)}>
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
          onPress={() => setSeleted(true)}>
          <Text
            style={[
              styles.tab_name,
              {color: seleted == true ? '#005F94' : '#ADADAD'},
            ]}>
            Lịch sử yêu cầu
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        {seleted == false ? (
          <FlatList
            data={LIST_ImportExport}
            renderItem={({item}) => (
              <ItemImportExport
                state={item.state}
                stateStatus={item.stateStatus}
                request={item.request}
                title={item.title}
                content={item.content}
                importBen={item.importBen}
                exportBen={item.exportBen}
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <FlatList
            data={HISTORY_ImportExport}
            renderItem={({item}) => (
              <ItemImportExport
                state={item.state}
                stateStatus={item.stateStatus}
                request={item.request}
                title={item.title}
                content={item.content}
                dateTime={item.dateTime}
                date={item.date}
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default TabPager;

const styles = StyleSheet.create({
  tab_name: {
    fontSize: 14,
    fontWeight: '700',
  },
  touch: {},
});
