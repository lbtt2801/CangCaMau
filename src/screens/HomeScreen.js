import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import {IMAGES} from '../assets/images/Images';
import ItemHome from '../components/ItemHome';
import {FeatureList} from '../MockData';
import {getObject} from '../AsyncStorage';

const HomeScreen = () => {
  const [name, setName] = useState();
  const [role, setRole] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const user = await getObject('user');
      setName(user.name);
      setRole(user.role)
    };

    fetchData();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 15}}>
      <Header
        headerStyle={{
          paddingBottom: 5,
          borderBottomColor: '#F5F5F5',
          borderBottomWidth: 1,
        }}
        isShowIconLeft={true}
        isShowTitleSup={true}
        iconLeftData={IMAGES.ic_avatar}
        title={name}
        titleStyle={styles.titleStyle}
        title_sup={role}
        title_supStyle={styles.title_supStyle}
        iconLeftStyle={styles.iconLeftStyle}
      />
      <Text style={styles.supTitle}>Quản lý</Text>
      <Text style={styles.title}>TÀU CÁ CÀ MAU</Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {FeatureList.map((feature, index) => (
          <ItemHome
            colorItem={feature.colorFeature}
            iconItem={feature.data_image}
            nameItem={feature.name}
            colorName={feature.colorName}
          />
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  iconLeftStyle: {
    width: 36,
    height: 36,
    marginBottom: 5,
    marginEnd: 5,
  },
  titleStyle: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.36,
  },
  title_supStyle: {
    color: '#005F94',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.06,
  },
  supTitle: {
    color: '#005F94',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21.78,
    letterSpacing: 0.1,
    marginBottom: 5,
    marginTop: 15.2,
  },
  title: {
    textTransform: 'uppercase',
    color: '#005F94',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
    marginBottom: 20,
  },
});
