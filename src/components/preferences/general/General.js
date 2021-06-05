import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import Text from '../../text/Text';
import styles from './General.style';
import DarkMode from '../../../animations/darkmode/DarkMode';

const General = props => {
  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader style={styles.subHeader}>General</List.Subheader>
        <List.Item
          title="Reminder Mode"
          right={() => <Text>Coming Soon</Text>}
        />
        <List.Item title="Reminder Sound" />
        <List.Item title="Dark Mode" right={() => <DarkMode />} />
      </List.Section>
    </View>
  );
};

export default General;
