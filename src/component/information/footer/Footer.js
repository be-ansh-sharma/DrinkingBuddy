import React, { Fragment } from 'react';
import Icon from '../../Icons/Icon';
import { COLOR } from '../../../global/styles';
import styles from './Footer.style';

const Footer = props => {
  const { prevScreenHanlder, nextScreenHanlder } = props;
  return (
    <Fragment>
      <Icon
        name="chevron-back-outline"
        size={35}
        color={COLOR.background}
        pressHandler={prevScreenHanlder}
        style={styles.prev}
      />
      <Icon
        name="arrow-forward-outline"
        size={35}
        color={COLOR.background}
        pressHandler={nextScreenHanlder}
        style={styles.next}
      />
    </Fragment>
  );
};

export default Footer;
