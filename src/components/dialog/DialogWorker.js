import React from 'react';
import Weight from './personal/weight/Weight';
import Sleep from './personal/sleep/Sleep';
import Wake from './personal/wake/Wake';
import Exercise from './personal/exercise/Exercise';

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
  }

  return <Name closeDialogHandler={closeDialogHandler} />;
};

export default DialogWorker;
