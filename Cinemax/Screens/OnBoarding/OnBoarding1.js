import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnBoarding1 = () => {

  const navigation = useNavigation();

  const nextPage = () => {
    navigation.navigate('OnBoarding2')
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //       navigation.navigate('OnBoarding2');
  //   },10000);

  //   return () => clearTimeout(timer);
  // }, [navigation]);



  return (
    <View style={styles.onboarding}>
      <View style={styles.onboardingV}>
      <Image source={require('../../assets/Rectangle.png')} style={{right: 0, left: -10, width:1000, height:470}} />
      <Image source={require('../../assets/Group.png')} style={{top: -380, left: 25, width:322, height:330}} />
      <Image source={require('../../assets/girlPg1.png')} style={styles.girl}/>
        <View style={styles.description}>
          <View style={styles.titleDesc}>
            <View style={styles.div}>
              <Text style={styles.textWrapper}>
                Lorem ipsum dolor sit amet consecteur esplicit
              </Text>
              <Text style={styles.p}>
                Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.overlapGroup}>
                <Image source={require('../../assets/Slider1.png')} style={styles.slider} />
        </View>
        <TouchableOpacity onPress={nextPage} style={styles.navigationButtons}>
            <Image source={require('../../assets/next1.png')} style={styles.nextImage} />
            <Image source={require('../../assets/backIcon.png')} style={styles.iconBack} />
        </TouchableOpacity>     
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboarding: {
    backgroundColor: '#1f1d2b',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  onboardingV: {
    backgroundColor: '#1f1d2b',
    height: 812,
    //position: 'relative',
    width: 375,
  },
  v1Background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  girl:{
    top: 90,//44
    left: 20,
    right: 84,
    position: 'absolute',
    height: 379,
    width: 310
  },
  description: {
    height: 157,
    left: 56,
    position: 'absolute',
    top: 480,//487
    width: 264,
  },
  textWrapper: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    height: 100,
    left: 0,
    letterSpacing: 0.12,
    lineHeight: 28.8,
    position: 'absolute',
    textAlign: 'center',
  },
  p: {
    color: '#999999',
    fontSize: 16,
    fontWeight: 'normal',
    height: 100,
    left: 0,
    letterSpacing: 0.5,
    lineHeight: 24,
    position: 'absolute',
    textAlign: 'center',
    top: 72,
    width: 264,
  },
  overlapGroup: {
    height: 421,
    left: 0,
    position: 'absolute',
    top: 5,
    width: 450,
  },
  slider: {
    height: 11,
    left: 24,
    position: 'absolute',
    top: 720,
    width: 90,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 670,
    left: 285
  },
  nextImage: {
    top: 15,
    width: 80,
    height: 80,
    position:'absolute', 
  },
  iconBack: {
    height: 24,
    position:'absolute',
    width: 24,
    top: 45,
    left: 26
  },
  
});

export default OnBoarding1;