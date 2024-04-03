import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import {IMAGES} from '../assets/images/Images';
import TextInputCustom from '../components/TextInputCustom';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import {getObject, removeObjectFromStorage} from '../AsyncStorage';

const InformationScreen = ({navigation}) => {
  const [state, setState] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalBirthday, setIsShowModalBirthday] = useState(false);
  const [isShowIconRight, setIsShowIconRight] = useState(false);
  const [name, setName] = useState();
  const [cccd, setCCCD] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [address, setAddress] = useState();
  const [ward, setWard] = useState();
  const [district, setDistrict] = useState();
  const [province, setProvince] = useState();
  const [phone, setPhone] = useState();
  const [role, setRole] = useState();
  const [certificate, setCertificate] = useState();
  const [agencies, setAgencies] = useState();
  const [dateRange, setDateRange] = useState('dd/mm/yyyy');

  useEffect(() => {
    const fetchData = async () => {
      const user = await getObject('user');
      setName(user.name);
      setRole(user.role);
      setDateOfBirth(user.dateOfBirth);
      setCCCD(user.cccd);
      setAddress(user.address);
      setWard(user.ward);
      setDistrict(user.district);
      setProvince(user.province);
      setPhone(user.phone);
      setDateRange(user.dateRange);
    };

    fetchData();
  }, []);
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#F5F5F5" />
      <Header
        title="Thông tin cá nhân"
        titleStyle={{
          textAlign: 'center',
          marginTop: 5,
          marginBottom: 17,
        }}
        isShowIconLeft={true}
        iconLeftData={IMAGES.ic_back}
        iconLeftStyle={{
          tintColor: '#333333',
          width: 20,
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        iconLeftPress={() => {
          state == false
            ? navigation.goBack()
            : (setState(false), setIsShowIconRight(false));
        }}
        headerStyle={{marginHorizontal: 12}}
      />

      <View style={{alignItems: 'center'}}>
        <Image
          source={
            state == false ? IMAGES.ic_avatar_black : IMAGES.ic_avatar_white
          }
          style={{width: 80, height: 80}}
        />
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Image
            source={IMAGES.ic_scan}
            style={{width: 16, height: 16, marginEnd: 5}}
          />
          <Text style={styles.text_scan}>Đăng ký bằng CCCD gắn chip</Text>
        </View>
      </View>

      <ScrollView
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <View style={styles.container}>
          <TextInputCustom
            label={name}
            value={name}
            setValue={value => setName(value)}
            isShowIconRight={isShowIconRight}
            isShowKeyboard={isShowIconRight}
          />
          <TextInputCustom
            label="CMND/CCCD"
            value={cccd}
            setValue={value => setCCCD(value)}
            isShowIconRight={isShowIconRight}
            isShowKeyboard={isShowIconRight}
          />
          <TextInputCustom
            label="Ngày sinh"
            value={dateOfBirth}
            setValue={value => setDateOfBirth(value)}
            otherFunc={() => (
              setIsShowModal(true), setIsShowModalBirthday(true)
            )}
            iconRightData={IMAGES.ic_calendar}
            iconRightStyle={{width: 16, height: 16}}
            isShowIconRight={isShowIconRight}
            isShowKeyboard={isShowIconRight}
          />
          <TextInputCustom
            label="Địa chỉ"
            value={address}
            setValue={value => setAddress(value)}
            isShowIconRight={isShowIconRight}
            isShowKeyboard={isShowIconRight}
          />
          <TextInputCustom
            label="Phường/xã"
            value={ward}
            setValue={value => setWard(value)}
            otherFunc={() => {}}
            iconRightData={IMAGES.ic_options}
            iconRightStyle={{width: 10, height: 6}}
            isShowIconRight={isShowIconRight}
            isShowKeyboard={isShowIconRight}
          />
          <TextInputCustom
            label="Quận/huyện"
            value={district}
            setValue={value => setDistrict(value)}
            otherFunc={() => {}}
            iconRightData={IMAGES.ic_options}
            iconRightStyle={{width: 10, height: 6}}
            isShowIconRight={isShowIconRight}
            isShowKeyboard={isShowIconRight}
          />
          <TextInputCustom
            label="Tỉnh/Thành phố"
            value={province}
            setValue={value => setProvince(value)}
            otherFunc={() => {}}
            iconRightData={IMAGES.ic_options}
            iconRightStyle={{width: 10, height: 6}}
            isShowIconRight={isShowIconRight}
            isShowKeyboard={isShowIconRight}
          />
          <TextInputCustom
            label="Số điện thoại"
            value={phone}
            setValue={value => setPhone(value)}
            isShowIconRight={isShowIconRight}
            isShowKeyboard={isShowIconRight}
          />
          <TextInputCustom
            label="Loại thuyền viên"
            value={role}
            setValue={value => setRole(value)}
            otherFunc={() => {}}
            iconRightData={IMAGES.ic_options}
            iconRightStyle={{width: 10, height: 6}}
            isShowIconRight={isShowIconRight}
            isShowKeyboard={isShowIconRight}
          />
        </View>

        <View style={[styles.container, {marginTop: 10}]}>
          <TextInputCustom
            label="Giấy chứng nhận chuyên môn"
            value={certificate}
            setValue={value => setCertificate(value)}
            isShowIconRight={isShowIconRight}
            isShowKeyboard={isShowIconRight}
          />
          <TextInputCustom
            label="Cơ quan cấp"
            value={agencies}
            setValue={value => setAgencies(value)}
            isShowIconRight={isShowIconRight}
            isShowKeyboard={isShowIconRight}
          />
          <TextInputCustom
            label="Ngày cấp"
            value={dateRange}
            setValue={value => setDateRange(value)}
            otherFunc={() => (
              setIsShowModal(true), setIsShowModalBirthday(false)
            )}
            iconRightData={IMAGES.ic_calendar}
            iconRightStyle={{width: 16, height: 16}}
            isShowIconRight={isShowIconRight}
            isShowKeyboard={isShowIconRight}
          />
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: state == false ? 'space-between' : 'center',
          marginHorizontal: 12,
          marginBottom: 20,
        }}>
        {state == false ? (
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#F62825'}]}>
            <Text style={styles.text_button}>Xoá tài khoản</Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#005F94'}]}
          onPress={() =>
            state == false
              ? (setState(true), setIsShowIconRight(true))
              : (setState(false), setIsShowIconRight(false))
          }>
          <Text style={styles.text_button}>
            {state == false ? 'Cập nhật' : 'Xác nhận'}
          </Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="fade" transparent={true} visible={isShowModal}>
        <View style={styles.modalView}>
          <Calendar
            onDayPress={day => {
              isShowModalBirthday == true
                ? setDateOfBirth(moment(day.dateString).format('DD/MM/YYYY'))
                : setDateRange(moment(day.dateString).format('DD/MM/YYYY'));
            }}
          />

          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#005F94'}]}
            onPress={() => setIsShowModal(!isShowModal)}>
            <Text style={styles.text_button}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default InformationScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 5,
    marginHorizontal: 12,
    backgroundColor: '#FFF',
    borderRadius: 6,
  },
  text_scan: {
    color: '#005F94',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
  text_button: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFF',
  },
  button: {
    width: '49%',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  modalView: {
    marginHorizontal: 20,
    marginTop: '20%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
