import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderCustom from '../components/HeaderCustom';
import {IMAGES} from '../assets/images/Images';
import RadioButton from '../components/RadioButton';

const FilterResultsScreen = ({navigation}) => {
  const radioButtonTinhTrang = [
    'Tất cả tình trạng',
    'Trong bờ',
    'Ngoài biển',
    'Không được nhập bến',
    'Không được xuất bến',
    'Chờ xác nhận xuất bến',
    'Chờ xác nhận nhập bến',
    'Được tiếp nhận',
    'Từ chối',
    'Chờ tiếp nhận yêu cầu',
  ];

  const radioButtonTrangThai = ['Tất cả thao tác', 'Xuất bến', 'Nhập bến'];

  const radioButtonThoiGian = ['Tất cả thời gian', 'date'];

  const [selectedTinhTrang, setSelectedTinhTrang] = useState(
    radioButtonTinhTrang[0],
  );
  const [selectedTrangThai, setSelectedTrangThai] = useState(
    radioButtonTrangThai[0],
  );
  const [selectedThoiGian, setSelectedThoiGian] = useState(
    radioButtonThoiGian[0],
  );

  return (
    <>
      <StatusBar backgroundColor="#459AC9" />
      <HeaderCustom
        title="Lọc kết quả"
        titleStyle={styles.titleStyle}
        headerStyle={styles.headerStyle}
        isShowIconLeft={true}
        iconLeftData={IMAGES.ic_close}
        iconLeftStyle={{width: 20, height: 20, tintColor: '#FFF'}}
        iconLeftPress={() => navigation.goBack()}
      />
      <ScrollView
        style={{marginHorizontal: 12}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Tình trạng duyệt đề nghị</Text>
        <View style={styles.container_radiogr}>
          <StatusBar style="auto" />
          {radioButtonTinhTrang.map((item, index) => (
            <>
              <RadioButton
                label={item}
                selected={selectedTinhTrang}
                setSelected={setSelectedTinhTrang}
                radioButtonStyle={{marginVertical: 15}}
              />
              {index < radioButtonTinhTrang.length - 1 ? (
                <View
                  style={{
                    marginStart: 26,
                    borderBottomColor: '#D6D6D6',
                    borderBottomWidth: 1, //StyleSheet.hairlineWidth,
                  }}
                />
              ) : (
                <></>
              )}
            </>
          ))}
        </View>

        <Text style={styles.title}>Trạng thái</Text>
        <View style={styles.container_radiogr}>
          <StatusBar style="auto" />
          {radioButtonTrangThai.map((item, index) => (
            <>
              <RadioButton
                label={item}
                selected={selectedTrangThai}
                setSelected={setSelectedTrangThai}
                radioButtonStyle={{marginVertical: 15}}
              />
              {index < radioButtonTrangThai.length - 1 ? (
                <View
                  style={{
                    marginStart: 26,
                    borderBottomColor: '#D6D6D6',
                    borderBottomWidth: 1, //StyleSheet.hairlineWidth,
                  }}
                />
              ) : (
                <></>
              )}
            </>
          ))}
        </View>

        <Text style={styles.title}>Thời gian gửi</Text>
        <View style={styles.container_radiogr}>
          <StatusBar style="auto" />
          {radioButtonThoiGian.map((item, index) => (
            <>
              <RadioButton
                label={item}
                selected={selectedThoiGian}
                setSelected={setSelectedThoiGian}
                radioButtonStyle={{marginVertical: 15}}
                isHaveDate={item == 'date' ? true : false}
              />
              {index < radioButtonThoiGian.length - 1 ? (
                <View
                  style={{
                    marginStart: 26,
                    borderBottomColor: '#D6D6D6',
                    borderBottomWidth: 1, //StyleSheet.hairlineWidth,
                  }}
                />
              ) : (
                <></>
              )}
            </>
          ))}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 29,
          }}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#FFFFFF'}]}>
            <Text style={{fontWeight: '700', fontSize: 14, color: '#828282'}}>
              Đặt lại
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#005F94'}]}>
            <Text style={{fontWeight: '700', fontSize: 14, color: '#FFFFFF'}}>
              Áp dụng
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default FilterResultsScreen;

const styles = StyleSheet.create({
  headerStyle: {
    paddingTop: 5,
    paddingBottom: 17,
    backgroundColor: '#459AC9',
    paddingHorizontal: 12,
  },
  titleStyle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
  title: {
    color: '#005F94',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 15,
  },
  container_radiogr: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingStart: 12,
    marginVertical: 5,
  },
  button: {
    borderRadius: 6,
    paddingVertical: 11,
    width: '49%',
    alignItems: 'center',
  },
});
