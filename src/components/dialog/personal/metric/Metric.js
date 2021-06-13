import React, { useState } from 'react';
import { Dialog, Button, Portal } from 'react-native-paper';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Picker from 'components/picker/Picker';
import { COLOR } from 'global/styles';
import { updateMetric } from 'store/actions/person';
import { transformRecords } from 'store/actions/slug';

const metricNumbers = ['Metric (Kg, ml)', 'Imperial (lbs, oz.)'];

const Exercise = ({ closeDialogHandler }) => {
  const metric = useSelector(state => state.person.weightType);
  const [metricSelected, setMetricSelected] = useState(metric === 'Kg' ? 0 : 1);
  const dispatch = useDispatch();

  const metricHanlder = item => {
    if (metricSelected !== item) {
      setMetricSelected(item);
    }
  };

  const hideDialog = cancel => {
    if (!cancel) {
      return closeDialogHandler();
    }
    if (
      (metricSelected === 0 && metric === 'Kg') ||
      (metricSelected === 1 && metric === 'lbs')
    ) {
      return;
    }
    let currentMetric = metricSelected === 0 ? 'Kg' : 'lbs';
    dispatch(updateMetric(currentMetric));
    dispatch(transformRecords(currentMetric));
    closeDialogHandler();
  };

  return (
    <View>
      <Portal>
        <Dialog visible={true} onDismiss={hideDialog} dismissable={false}>
          <Dialog.Title style={{ color: COLOR.primary }}>
            Weight System
          </Dialog.Title>
          <Dialog.Content>
            <View style={{ alignSelf: 'center' }}>
              <Picker
                selectedItem={metricSelected}
                data={metricNumbers}
                onItemSelected={metricHanlder}
                selectedItemTextColor={COLOR.primary}
                selectedItemTextSize={20}
              />
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button color={COLOR.faded} onPress={() => hideDialog(false)}>
              Cancel
            </Button>
            <Button onPress={hideDialog}>Update</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default Exercise;