import AsyncStorage from '@react-native-async-storage/async-storage';

const getFromStorage = async key => {
  try {
    const result = await AsyncStorage.getItem('@person');
    return result != null ? JSON.parse(result) : null;
  } catch (err) {
    throw err;
  }
};

const setToStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    throw err;
  }
};

export { getFromStorage, setToStorage };
