import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IMAGES} from '../assets/images/Images';
import {
  TagLocation,
  TagRefuse,
  TagReply,
  TagStatus,
  TagWaitConfirm,
  TagWaitReceiving,
} from './Tag';

const ItemImportExport = ({
  state,
  stateStatus,
  request,
  title = 'title',
  content = 'content',
  dateTime = true,
  date = '--',
  importBen = '--',
  exportBen = '--',
}) => {
  return (
    <TouchableOpacity
      style={{
        borderBottomColor: '#D6D6D6',
        borderBottomWidth: 1,
        borderTopColor: '#D6D6D6',
        borderTopWidth: 1,
        paddingVertical: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.title}>{title}</Text>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
          {dateTime == false ? <Text style={styles.text}>{date}</Text> : <></>}
          <Image source={IMAGES.ic_back_right} style={styles.img_icon} />
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        {state == true ? (
          <TagStatus state={stateStatus} />
        ) : (
          <TagLocation state={stateStatus} />
        )}
        {(() => {
          switch (request) {
            case 'khong_nhap_ben':
              return <TagRefuse state={true} />;
            case 'khong_xuat_ben':
              return <TagRefuse state={false} />;
            case 'cho_xac_nhan_nhap_ben':
              return <TagWaitConfirm state={true} />;
            case 'cho_xac_nhan_xuat_ben':
              return <TagWaitConfirm state={false} />;
            case 'duoc_tiep_nhan':
              return <TagReply state={true} />;
            case 'tu_choi':
              return <TagReply state={false} />;
            case 'cho_tiep_nhan':
              return <TagWaitReceiving />;
            default:
              return null;
          }
        })()}
      </View>

      {dateTime == true ? (
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <View style={{flexDirection: 'row', flex: 0.5}}>
            <Text style={styles.text}>Xuất bến: </Text>
            <Text style={styles.dateTime}>{exportBen}</Text>
          </View>
          <View style={{flexDirection: 'row', flex: 0.5}}>
            <Text style={styles.text}>Nhập bến: </Text>
            <Text style={styles.dateTime}>{importBen}</Text>
          </View>
        </View>
      ) : (
        <></>
      )}

      <Text style={[styles.text, {marginTop: dateTime == true ? 0 : 7}]}>
        {content}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemImportExport;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ADADAD',
  },
  dateTime: {
    fontSize: 12,
    fontWeight: '700',
    color: '#333333',
  },
  img_icon: {
    width: 12,
    height: 12,
    tintColor: '#828282',
    marginStart: 5,
    marginEnd: 10,
  },
});
