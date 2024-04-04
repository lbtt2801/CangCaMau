import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '../assets/images/Images';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';

const RadioButton = ({
  label,
  selected,
  setSelected,
  iconCheck = IMAGES.ic_radio_checked,
  iconUnCheck = IMAGES.ic_radio_unchecked,
  radioButtonStyle,
  isHaveDate = false,
}) => {
  const [since, setSince] = useState('                     ');
  const [toDate, setToDate] = useState('                    ');
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalSince, setIsShowModalSince] = useState(false);

  return (
    <>
      {isHaveDate == false ? (
        <TouchableOpacity
          style={[styles.container, radioButtonStyle]}
          onPress={() => setSelected(label)}>
          <Image
            source={selected == label ? iconCheck : iconUnCheck}
            style={styles.image}
          />
          <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
      ) : (
        <View
          style={[
            styles.container,
            {justifyContent: 'space-between'},
            radioButtonStyle,
          ]}>
          <Image
            source={selected == label ? iconCheck : iconUnCheck}
            style={[styles.image, {marginEnd: 10}]}
          />
          <TouchableOpacity
            style={[styles.container_date]}
            onPress={() => (
              setIsShowModal(true),
              setIsShowModalSince(true),
              setSelected(label)
            )}>
            <Image source={IMAGES.ic_calendar} style={styles.image_calendar} />
            <Text style={styles.text_calendar}>Từ ngày</Text>
            <Text style={styles.text_calendar}>{since}</Text>
          </TouchableOpacity>

          <Text style={[styles.text_calendar, {marginHorizontal: 10}]}>-</Text>

          <TouchableOpacity
            style={[styles.container_date]}
            onPress={() => (
              setIsShowModal(true),
              setIsShowModalSince(false),
              setSelected(label)
            )}>
            <Image source={IMAGES.ic_calendar} style={styles.image_calendar} />
            <Text style={styles.text_calendar}>Đến ngày</Text>
            <Text style={styles.text_calendar}>{toDate}</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal animationType="fade" transparent={true} visible={isShowModal}>
        <View style={styles.modalView}>
          <Calendar
            onDayPress={day => {
              isShowModalSince == true
                ? setSince(moment(day.dateString).format('DD/MM/YYYY'))
                : setToDate(moment(day.dateString).format('DD/MM/YYYY'));
            }}
          />

          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#005F94'}]}
            onPress={() => setIsShowModal(!isShowModal)}>
            <Text style={styles.text_button}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginStart: 10,
    fontSize: 14,
    fontWeight: '400',
    color: '#333333',
  },
  image: {
    width: 16,
    height: 16,
  },
  image_calendar: {
    width: 14,
    height: 14,
    tintColor: '#333333',
  },
  text_calendar: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333333',
    marginStart: 5,
  },
  container_date: {
    flexDirection: 'row',
    alignItems: 'center',
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
