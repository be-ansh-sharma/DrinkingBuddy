import React from 'react';
import { WheelPicker } from 'react-native-wheel-picker-android';

const Picker = ({
  selectedItem,
  data,
  onItemSelected,
  selectedItemTextColor,
  selectedItemTextSize,
  isCyclic,
}) => {
  return (
    <WheelPicker
      selectedItem={selectedItem}
      data={data}
      isCyclic={isCyclic}
      onItemSelected={onItemSelected}
      selectedItemTextColor={selectedItemTextColor}
      selectedItemTextSize={selectedItemTextSize}
    />
  );
};

export default Picker;
