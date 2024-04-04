import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ItemHome = ({colorItem, colorName, iconItem, nameItem, navFunc}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: colorItem}]}
      onPress={navFunc}>
      <Image source={iconItem} style={styles.icon} />
      <Text style={[styles.name, {color: colorName}]}>{nameItem}</Text>
    </TouchableOpacity>
  );
};

export default ItemHome;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 25,
    width: '48%',
    maxWidth: 170,
    maxHeight: 150,
    marginBottom: 15,
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 17,
    marginTop: 13,
  },
  icon: {
    width: 60,
    height: 60,
  },
});
