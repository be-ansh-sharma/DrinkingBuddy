import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import Text from '../../text/Text';
import styles from './General.style';

const General = props => {
  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader style={styles.subHeader}>General</List.Subheader>
        <List.Item title="First Item" right={() => <Text>ssss</Text>} />
        <List.Item title="Second Item" />
      </List.Section>
    </View>
  );
};

export default General;
