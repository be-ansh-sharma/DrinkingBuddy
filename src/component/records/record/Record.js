import React from 'react';
import { View } from 'react-native';
import Text from '../../text/Text';
import styles from './Record.style';
import Icon from '../../Icons/Icon';
import { Menu } from 'react-native-paper';
import { deleteRecord } from '../../../store/actions/slug';
import { useDispatch } from 'react-redux';

const Record = ({ index, next, time, cup, dailyGoalType }) => {
  const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch();
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const removeRecordHandler = () => {
    dispatch(deleteRecord(index, cup));
    setVisible(false);
  };

  if (next) {
    return (
      <View style={styles.container}>
        <Icon name="timer-outline" size={20} color="white" />
        <View>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.subText}>Upcoming</Text>
        </View>
        <Text style={styles.amount}>
          {cup} {dailyGoalType}
        </Text>
        <View>
          <Icon
            name="ellipsis-vertical-outline"
            size={20}
            color="transparent"
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Icon name="water-outline" size={20} color="white" />
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.amount}>
        {cup} {dailyGoalType}
      </Text>
      <View>
        <View>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Icon
                name="ellipsis-vertical-outline"
                size={20}
                color="white"
                pressHandler={openMenu}
              />
            }>
            <Menu.Item onPress={() => { }} title="Edit" />
            <Menu.Item onPress={removeRecordHandler} title="Delete" />
          </Menu>
        </View>
      </View>
    </View>
  );
};

export default Record;
