import React from 'react';
import Weight from './personal/weight/Weight';
import Sleep from './personal/sleep/Sleep';
import Wake from './personal/wake/Wake';
import Exercise from './personal/exercise/Exercise';
import Reset from './others/reset/Reset';
import Setting from './others/setting/Setting';
import Metric from './personal/metric/Metric';
import NotificationMode from './general/notificationmode/NotificationMode';
import ChangeCup from './controls/changecup/ChangeCup';

const DialogWorker = ({ Name, closeDialogHandler }) => {
  if (!Name) {
    return null;
  }

  switch (Name) {
    case 'weight':
      Name = Weight;
      break;
    case 'sleep':
      Name = Sleep;
      break;
    case 'wake':
      Name = Wake;
      break;
    case 'exercise':
      Name = Exercise;
      break;
    case 'reset':
      Name = Reset;
      break;
    case 'setting':
      Name = Setting;
      break;
    case 'metric':
      Name = Metric;
      break;
    case 'notificationmode':
      Name = NotificationMode;
      break;
    case 'changecup':
      Name = ChangeCup;
      break;
  }

  return <Name closeDialogHandler={closeDialogHandler} />;
};

export default DialogWorker;
