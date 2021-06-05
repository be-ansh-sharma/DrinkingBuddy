import React, { Fragment } from 'react';
import Icon from 'components/Icons/Icon';
import { COLOR } from 'global/styles';
import styles from './Footer.style';

const Footer = props => {
  const {
    prevScreenHanlder,
    nextScreenHanlder,
    prevIcon,
    nextIcon,
    nextIconSize,
  } = props;
  return (
    <Fragment>
      <Icon
        name={prevIcon || 'chevron-back-outline'}
        size={35}
        color={COLOR.background}
        pressHandler={prevScreenHanlder}
        style={styles.prev}
      />
      <Icon
        name={nextIcon || 'arrow-forward-outline'}
        size={nextIconSize || 35}
        color={COLOR.background}
        pressHandler={nextScreenHanlder}
        style={styles.next}
      />
    </Fragment>
  );
};

export default Footer;
