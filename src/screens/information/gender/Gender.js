import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import styles from './Gender.style';
import Male from 'assets/images/male.svg';
import Female from 'assets/images/female.svg';
import { COLOR } from 'global/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setGender } from 'store/actions/person';
import Icon from 'components/Icons/Icon';
import Heading from 'components/heading/Heading';

const Gender = props => {
  const selectedGender = useSelector(state => state.person.gender);
  const [selected, setSelected] = useState(selectedGender);
  const dispatch = useDispatch();

  const changeAvatar = avatar => {
    if (selected !== avatar) {
      setSelected(avatar);
    }
  };

  const nextScreenHanlder = () => {
    dispatch(setGender(selected));
    props.navigation.navigate('Weight');
  };

  const prevScreenHanlder = () => {
    props.navigation.pop();
  };

  return (
    <View style={styles.container}>
      <Heading>Select Your Gender</Heading>
      <View style={styles.avatarContainer}>
        <View style={styles.male}>
          <Pressable onPress={() => changeAvatar('male')}>
            <Male
              fill={selected === 'male' ? COLOR.primary : 'gray'}
              width="100%"
              height="100%"
              viewBox="0 0 700 800"
            />
          </Pressable>
        </View>
        <View style={styles.female}>
          <Pressable onPress={() => changeAvatar('female')}>
            <Female
              fill={selected === 'female' ? COLOR.primary : 'gray'}
              width="100%"
              height="100%"
              viewBox="0 0 700 800"
            />
          </Pressable>
        </View>
      </View>
      <Icon
        name="chevron-back-outline"
        size={35}
        color={COLOR.background}
        pressHandler={prevScreenHanlder}
        style={styles.prev}
      />
      {!!selected && (
        <Icon
          name="arrow-forward-outline"
          size={35}
          color={COLOR.background}
          pressHandler={nextScreenHanlder}
          style={styles.next}
        />
      )}
    </View>
  );
};

export default Gender;
