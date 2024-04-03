import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {IMAGES} from '../assets/images/Images';

const TextInputCustom = ({
  label,
  value,
  setValue = () => {},
  otherFunc = () => {},
  isShowIconRight = true,
  iconRightData = IMAGES.ic_delete_text_input,
  iconRightStyle,
  placeholder = '--',
  editable = true,
  isShowKeyboard = true,
}) => {
  return (
    <View style={{paddingHorizontal: 12, marginBottom: 15}}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInput
          editable={editable}
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          placeholderTextColor="#333333"
          showSoftInputOnFocus={isShowKeyboard}
          style={{flex: 1, marginVertical: -10, fontSize: 16}}
        />
        {isShowIconRight == true ? (
          <TouchableOpacity
            onPress={
              iconRightData == IMAGES.ic_delete_text_input
                ? () => setValue('')
                : otherFunc
            }>
            <Image
              source={iconRightData}
              style={[{width: 10, height: 10}, iconRightStyle]}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  label: {
    color: '#ADADAD',
    fontSize: 12,
    fontWeight: '400',
    marginStart: 3,
  },
  container: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#D6D6D6',
    borderBottomWidth: 1,
  },
});
