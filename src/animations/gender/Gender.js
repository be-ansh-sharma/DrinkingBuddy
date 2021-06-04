import React, { useRef } from 'react';
import { Pressable } from 'react-native';
import LottieView from 'lottie-react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setGender } from '../../store/actions/person';

const Gender = () => {
  const genderRef = useRef();
  const gender = useSelector(state => state.person.gender);
  const dispatch = useDispatch();
  const genderHandler = () => {
    if (gender === 'male') {
      dispatch(setGender('female'));
    } else {
      dispatch(setGender('male'));
    }
  };

  const animationHandler = () => {
    if (gender === 'male') {
      genderRef.current.play(30, 0);
    } else {
      genderRef.current.play(0, 30);
    }
  };

  return (
    <Pressable onPress={animationHandler} style={{width: 60}}>
      <LottieView
        ref={genderRef}
        loop={false}
        speed={1.5}
        style={{height: 35, left: 4}}
        onAnimationFinish={genderHandler}
        source={require('../../../assets/animation/gender.json')}
        progress={gender === 'male' ? 1 : 0}
      />
    </Pressable>
  );
};

export default Gender;
