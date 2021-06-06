import React from 'react';
import { View } from 'react-native';
import About from 'components/preferences/others/about/About';

const Modal = ({ route, navigation }) => {
  const { type } = route?.params;
  let Component;
  switch (type) {
    case 'about':
      Component = About;
      break;
  }

  if (!Component) {
    return null;
  }

  return <Component />;
};

export default Modal;
