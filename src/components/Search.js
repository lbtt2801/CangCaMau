import {View, Image, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import { IMAGES } from '../assets/images/Images';

const Search = ({placeholder, placeholderStyle, placeholderTextColor, textInputStyle, iconStyle}) => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={[styles.container, textInputStyle]}>
      <Image
        source={IMAGES.ic_search}
        style={[{width: 20, height: 20}, iconStyle]}/>
      <TextInput
        style={[styles.placeholder, placeholderStyle]}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
    paddingHorizontal: 20,
    marginVertical: 25,
  },
  placeholder: {
    marginStart: 10,
    color: 'rgba(0, 0, 0, 0.4)',
    fontWeight: 'bold',
    fontSize: 18,
  }
});
