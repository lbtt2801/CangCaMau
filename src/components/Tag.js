import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const TagStatus = ({state}) => {
  return (
    <View
      style={{
        backgroundColor: state == true ? '#2B13C0' : '#FD397A',
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 2,
        marginEnd: 5,
      }}>
      <Text style={styles.text}>{state == true ? 'Nhập bến' : 'Xuất bến'}</Text>
    </View>
  );
};

export const TagLocation = ({state}) => {
  return (
    <View
      style={{
        backgroundColor: state == true ? '#FF820F' : '#459AC9',
        paddingHorizontal: 7,
        paddingVertical: 2,
        borderRadius: 10,
        marginEnd: 5,
      }}>
      <Text style={styles.text}>
        {state == true ? 'Trong bờ' : 'Ngoài biển'}
      </Text>
    </View>
  );
};

export const TagRefuse = ({state}) => {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 10,
        borderColor: '#F62825',
        borderWidth: 1,
        marginEnd: 5,
      }}>
      <Text style={styles.text_refuse}>
        {state == true ? 'Không được nhập bến' : 'Không được xuất bến'}
      </Text>
    </View>
  );
};

export const TagWaitConfirm = ({state}) => {
  return (
    <View
      style={{
        backgroundColor: state == true ? '#583CFF' : '#FF9F47',
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 10,
        marginEnd: 5,
      }}>
      <Text style={styles.text}>
        {state == true ? 'Chờ xác nhận xuất bến' : 'Chờ xác nhận nhập bến'}
      </Text>
    </View>
  );
};

export const TagReply = ({state}) => {
  return (
    <View
      style={{
        backgroundColor: state == true ? '#FFC737' : '#F62825',
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 10,
        marginEnd: 5,
      }}>
      <Text style={styles.text}>
        {state == true ? 'Được tiếp nhận' : 'Từ chối'}
      </Text>
    </View>
  );
};

export const TagWaitReceiving = () => {
  return (
    <View
      style={{
        backgroundColor: '#0ABB87',
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 10,
        marginEnd: 5,
      }}>
      <Text style={styles.text}>Chờ tiếp nhận yêu cầu</Text>
    </View>
  );
};
// export default Role

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '400',
  },
  text_refuse: {
    color: '#F62825',
    fontSize: 10,
    fontWeight: '400',
  },
});
