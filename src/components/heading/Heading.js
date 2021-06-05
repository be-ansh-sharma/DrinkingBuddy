import React from 'react';
import Text from 'components/text/Text';
import styles from './Heading.style';

const Heading = ({ children, style }) => {
  return <Text style={{ ...styles.heading, ...style }}>{children}</Text>;
};

export default Heading;
