import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './Preferences.style';
import General from 'components/preferences/general/General';
import Personal from 'components/preferences/personal/Personal';
import Others from 'components/preferences/others/Others';
import SmartBanner from 'components/banners/SmartBanner';
import { useDispatch } from 'react-redux';
import { validateAdCounter } from 'store/actions/slug';

const Preferences = ({ navigation }) => {
  const [showBanner, setShowBanner] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (showBanner === false) {
        setShowBanner(true);
      }
      dispatch(validateAdCounter());
    });

    return unsubscribe;
  }, [dispatch, navigation, showBanner]);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <General />
          <Personal />
          <Others />
        </View>
      </ScrollView>
      {showBanner && <SmartBanner />}
    </>
  );
};

export default Preferences;
