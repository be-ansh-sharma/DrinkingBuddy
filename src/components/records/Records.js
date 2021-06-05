import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Text from '../text/Text';
import styles from './Records.style';
import Icon from '../Icons/Icon';
import Record from './record/Record';
import { COLOR } from '../../global/styles';
import dayjs from '../../global/day';
import AddRecordDialog from '../dialog/records/AddRecordDialog';
import { addRecord } from '../../store/actions/slug';
import { setCompleted } from '../../store/actions/information';

const Records = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();
  let records = useSelector(state => state.slug.records);
  let nextNotification = useSelector(
    state => state.information.nextNotification,
  );
  let { cup, dailyGoalType } = useSelector(state => state.person);
  const addRecordHandler = () => {
    setOpenDialog(true);
  };

  const closeDialogHandler = (time, quantity) => {
    if (time && quantity) {
      dispatch(setCompleted(quantity));
      dispatch(addRecord(time, quantity));
      setOpenDialog(false);
    } else {
      setOpenDialog(false);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Today's Records</Text>
          <Icon
            name="add-outline"
            size={20}
            color={COLOR.primary}
            android_disableSound={true}
            pressHandler={addRecordHandler}
          />
        </View>
        <View style={styles.recordBox}>
          <Record
            next={true}
            time={dayjs(nextNotification).format('hh:mm A')}
            cup={cup}
            dailyGoalType={dailyGoalType}
          />
          {!!records.length &&
            records.map((record, index) => {
              return (
                <Record
                  key={index}
                  time={record.time}
                  cup={record.cup}
                  index={index}
                  dailyGoalType={record.dailyGoalType}
                />
              );
            })}
        </View>
      </View>
      {!!openDialog && (
        <AddRecordDialog closeDialogHandler={closeDialogHandler} />
      )}
    </>
  );
};

export default Records;
