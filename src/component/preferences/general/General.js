import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import Text from '../../text/Text';

const General = props => {
  return (
    <View>
      <List.Section>
        <List.Subheader>General</List.Subheader>
        <List.Item title="First Item" right={() => <Text>ssss</Text>} />
        <List.Item title="Second Item" />
      </List.Section>
    </View>
  );
};

export default General;
