import Constants from 'expo-constants';
export const weightSystem = {
  metric: {
    label: 'kg',
    value: 'metric',
    short: 'ml',
  },
  imperial: {
    label: 'lb',
    value: 'imperial',
    short: 'oz.',
  },
};

export const fontConfig = {
  web: {
    regular: {
      fontFamily: 'OpenSans',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'OpenSans',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'OpenSans',
      fontWeight: 'normal',
    },
  },
};

export const NotificationSetting = {
  default: {
    label: 'Sound and vibrate',
    icon: 'cellphone-sound',
  },
  vibrate: {
    label: 'Vibrate Only',
    icon: 'vibrate',
  },
  sound: {
    label: 'Sound Only',
    icon: 'bell-outline',
  },
  silent: {
    label: 'Silent',
    icon: 'bell-off-outline',
  },
};

const productionIDs = {
  banner: 'ca-app-pub-5569096931231318/5372186268',
  fullScreen: 'ca-app-pub-5569096931231318/1503425148',
};

const testIDs = {
  banner: 'ca-app-pub-3940256099942544/6300978111',
  fullScreen: 'ca-app-pub-3940256099942544/1033173712',
};

export const getadUnitID = key => {
  return Constants.isDevice && !__DEV__ ? productionIDs[key] : testIDs[key];
};
