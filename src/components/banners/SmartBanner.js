import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob';
import { getadUnitID } from 'global/helpers/helper';
import { useSelector } from 'react-redux';

const screenWidth = Dimensions.get('window').width;

const SmartBanner = () => {
  const [error, setError] = useState(true);
  const [hasAds, setHasAds] = useState(false);
  const bannerError = () => setError(true);
  const adsReceived = () => setHasAds(true);
  const { personalizedAds } = useSelector(state => state.information);

  useEffect(() => {
    const exitScreenTimer = setTimeout(() => setError(false), 3000);

    return () => {
      clearTimeout(exitScreenTimer);
    };
  });

  if (error) {
    return null;
  }

  return (
    <View
      style={
        hasAds ? { width: screenWidth } : { height: 0, width: screenWidth }
      }>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={getadUnitID('banner')}
        servePersonalizedAds={personalizedAds}
        onDidFailToReceiveAdWithError={bannerError}
        onAdViewDidReceiveAd={adsReceived}
      />
    </View>
  );
};

export default SmartBanner;
