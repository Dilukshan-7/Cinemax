import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const OnBoarding3 = () => {

  const navigation = useNavigation();

  const nextPage = () => {
    navigation.navigate('OnBoarding4')
  }

  return (
    <View style={styles.container}>
      {/* Top Row */}
      <Image source={require('../../assets/Rectangle.png')} style={styles.rectangleImage} />
      <View style={styles.topRow}>
          <Image source={require('../../assets/Onbrd3.png')} style={styles.topCenterImage} />
          <Image source={require('../../assets/starPg3.png')} style={styles.rating} />
          <Image source={require('../../assets/tymPg3.png')} style={styles.duration} />
      </View>

      {/* Bottom Row */}
      <View style={styles.bottomRow}>
        <View style={styles.textContainer}>
          
            <Text style={styles.titleText}>
              Lorem ipsum dolor sit amet consecteur esplicit
            </Text>

            <Text style={styles.descriptionText}>
              Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient.
            </Text>

            <View style={styles.overlapGroup}>
              <Image source={require('../../assets/Slider3.png')} style={styles.slider} />
            </View>
            <TouchableOpacity onPress={nextPage} style={styles.navigationButtons}>
              <Image source={require('../../assets/next3.png')} style={styles.nextImage} />
              <Image source={require('../../assets/backIcon.png')} style={styles.iconBack} />
            </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  rectangleImage: {
    right: 0,
    left: -10,
    width: 1000,
    height: 410,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  rating: {
    width: 75,
    height: 95,
    borderRadius: 15,
    left: -320,
    top: -565,
    borderColor: 'white',
    borderWidth: 0.1,
  },
  topCenterImage: {
    width: 360,
    height: 400,
    borderRadius: 15,
    left: 20,
    bottom: 450,
  },
  duration: {
    width: 70,
    height: 90,
    borderRadius: 15,
    right: 158,
    bottom: 560,
    borderColor: 'white',
    borderWidth: 0.1,
  },
  bottomRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // textContainer: {
  //   width: 327,
  //   height: 165,
  //   left: 24,
  //   top: 458,
  //   position: 'absolute',
  // },
  titleText: {
    width: 322,
    top: -410,
    left: -160,
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 26,
    fontWeight: '400',
    lineHeight: 38.4,
    letterSpacing: 0.12,
    flexWrap: 'wrap',
  },
  descriptionText: {
    width: 244,
    height: 85,
    left: -130,
    top: -320,
    position: 'absolute',
    textAlign: 'center',
    color: '#92929D',
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0.12,
    lineHeight: 20,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  // overlapGroup: {
  //   height: 421,
  //   position: 'absolute',
  //   width: 450,
  // },
  slider: {
    height: 10,
    width: 79,
    top: -162,
    left: -160,
    position: 'absolute',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //position: 'absolute',
  },
  nextImage: {
    top: -205,
    left: 100,
    width: 80,
    height: 80,
    position:'absolute', 
  },
  iconBack: {
    top: -175,
    left: 127,
    height: 24,
    position:'absolute',
    width: 24,

  },
});

export default OnBoarding3;
