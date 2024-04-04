import AsyncStorage from '@react-native-async-storage/async-storage';

export const user = {
  phone: '0328467924',
  pass: '123456',
  name: 'Lê Bùi Tấn Trưởng',
  cccd: '052202022114',
  dateOfBirth: '28/01/2002',
  address: '106 Lưu Chí Hiếu',
  ward: 'Tây Thạnh',
  district: 'Tân Phú',
  province: 'Hồ Chí Minh',
  role: 'Thuyền Trưởng',
  email: 'lebuitantruong@gmail.com',
  dateRange: '01/04/2024',
  isWarning: 'yes',
};

export const storeObject = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('Lưu trữ thành công');
  } catch (error) {
    console.log('Lưu trữ lỗi: ', error);
  }
};

export const getObject = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue !== null) {
      const value = JSON.parse(jsonValue);
      console.log('Truy xuất dữ liệu: ', value);
      return value;
    } else {
      console.log('Không tìm thấy dữ liệu.');
      return null;
    }
  } catch (error) {
    console.log('Lỗi truy xuất dữ liệu: ', error);
    return null;
  }
};

export const updateObject = async (key, name, cccd, dateOfBirth, address, ward, district, province, dateRange,) => {
  try {
    const currentData = await AsyncStorage.getItem(key);
    if (currentData !== null) {
      const parsedData = JSON.parse(currentData);
      parsedData.name = name;
      parsedData.cccd = cccd;
      parsedData.dateOfBirth = dateOfBirth;
      parsedData.address = address;
      parsedData.ward = ward;
      parsedData.district = district;
      parsedData.province = province;
      parsedData.dateRange = dateRange;
      await AsyncStorage.setItem(key, JSON.stringify(parsedData));
      console.log("Đã cập nhật dữ liệu thành công!");
    }
  } catch (error) {
    console.log("Lỗi khi cập nhật dữ liệu: ", error);
  }
};

export const removeObjectFromStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("Đã xóa dữ liệu thành công!");
  } catch (error) {
    console.log("Lỗi khi xóa dữ liệu: ", error);
  }
};