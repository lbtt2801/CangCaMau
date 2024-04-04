import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ItemImportExport from './ItemImportExport';
import {HISTORY_ImportExport, LIST_ImportExport} from '../MockData';

const TabPager = ({seleted}) => {
  return (
    <View style={{paddingStart: 12}}>
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

