import React from 'react';
import About from 'components/preferences/others/about/About';
import Privacy from 'components/preferences/others/privacy/Privacy';
import Attribution from 'components/preferences/others/attribution/Attribution';

const Modal = ({ route, navigation }) => {
  const { type } = route?.params;
  let Component;
  switch (type) {
    case 'about':
      Component = About;
      break;
    case 'privacy':
      Component = Privacy;
      break;
    case 'attribution':
      Component = Attribution;
      break;
  }

  if (!Component) {
    return null;
  }

  return <Component />;
};

export default Modal;
