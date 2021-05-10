import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFromStorage = async key => {
  try {
    const result = await AsyncStorage.getItem('@person');
    return result != null ? JSON.parse(result) : null;
  } catch (err) {
    throw err;
  }
};

export const setToStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    throw err;
  }
};

export const changeMetric = (value, system) => {
  if (system === 'Kg') {
    return Math.ceil(+value / 2.205);
  } else {
    return Math.floor(+value * 2.205);
  }
};
