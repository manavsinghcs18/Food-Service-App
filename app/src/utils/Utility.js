import AsyncStorage from '@react-native-async-storage/async-storage';
export const setData = async (key, value) => {
  try {
    let user = await getData(key);
    console.log(JSON.stringify(user));
    if (user != null) {
      return 400;
    }
    else {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log('successfully done');
      return 200;
    }
  } catch (error) {
    console.warn('some error in setdata code');
  }

};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('fetch successfully');
      return JSON.parse(value);
    }
  } catch (error) {
    console.log('error in getData');
    console.warn(error);
  }
};