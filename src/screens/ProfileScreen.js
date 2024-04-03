import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import {IMAGES} from '../assets/images/Images';
import {getObject, removeObjectFromStorage} from '../AsyncStorage';

const ItemProfile = ({
  iconLeft,
  title,
  text = '',
  iconRight,
  navigation = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={navigation}
      style={{
        paddingHorizontal: 12,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginBottom: 1,
      }}>
      <Image source={iconLeft} style={{width: 20, height: 20, marginEnd: 10}} />
      <Text
        style={{fontSize: 14, fontWeight: '400', color: '#333333', flex: 1}}>
        {title}
      </Text>

      {text == '' ? (
        <Image source={iconRight} style={{width: 12, height: 12}} />
      ) : (
        <Text style={{fontSize: 14, fontWeight: '400', color: '#333333'}}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const ProfileScreen = ({navigation}) => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [isWarning, setIsWarning] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const user = await getObject('user');
      setName(user.name);
      setPhone(user.phone);
      setIsWarning(user.isWarning == 'yes' ? true : false);
    };

    fetchData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#459AC9" />

      <Header
        title="Cá nhân"
        titleStyle={{
          textAlign: 'center',
          marginTop: 5,
          marginBottom: 17,
          color: '#FFFFFF',
        }}
        headerStyle={{backgroundColor: '#459AC9'}}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Information');
        }}
        style={{
          paddingVertical: 15,
          paddingHorizontal: 12,
          backgroundColor: '#FFF',
          flexDirection: 'row',
          marginBottom: 5,
        }}>
        <Image
          source={IMAGES.ic_avatar}
          style={{width: 48, height: 48, marginEnd: 10}}
        />

        <View style={{flexDirection: 'column', flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.name}>{name}</Text>
            <Image
              source={IMAGES.ic_warning_profile}
              style={{width: 14, height: 14, display: isWarning == true ? 'flex' : 'none',}}
            />
          </View>
          <Text style={styles.sub_text}>{phone}</Text>
          <Text style={styles.sub_text}>Chủ tàu</Text>
        </View>

        <View style={{justifyContent: 'center'}}>
          <Image
            source={IMAGES.ic_back_right}
            style={{width: 12, height: 12, alignItems: 'center'}}
          />
        </View>
      </TouchableOpacity>

      <ItemProfile
        iconLeft={IMAGES.ic_version}
        title="Phiên bản"
        text="2.0.1.1"
      />
      <ItemProfile
        iconLeft={IMAGES.ic_introduce}
        title="Giới thiệu và hướng dẫn"
        iconRight={IMAGES.ic_back_right}
      />
      <ItemProfile
        iconLeft={IMAGES.ic_setting}
        title="Cài đặt"
        iconRight={IMAGES.ic_back_right}
      />
      <ItemProfile
        navigation={() => navigation.navigate('ChangePassword')}
        iconLeft={IMAGES.ic_password}
        title="Đổi mật khẩu"
        iconRight={IMAGES.ic_back_right}
      />

      <TouchableOpacity
        onPress={() => (
          removeObjectFromStorage('user'), navigation.navigate('Login')
        )}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 6,
          paddingVertical: 14,
          marginHorizontal: 12,
          marginTop: 20,
          alignItems: 'center',
        }}>
        <Text style={styles.text_button}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
    lineHeight: 19,
    marginEnd: 3,
  },
  sub_text: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ADADAD',
    lineHeight: 15,
    marginTop: 5,
  },
  text_button: {
    fontSize: 14,
    fontWeight: '700',
    color: '#005F94',
  },
});
