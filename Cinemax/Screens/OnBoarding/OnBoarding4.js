import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const OnBoarding4 = () => {

  const navigation = useNavigation();

  const nextPage = () => {
    navigation.navigate('OnBoarding5')
  }

  return (
    <View style={styles.container}>
      {/* Top Row */}
      <View style={styles.topRow}>
          <Image source={require('../../assets/pg4Bg.png')} style={styles.bg} />
          <Image source={require('../../assets/blckBgPg4.png')} style={styles.textbg} />
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
              <Image source={require('../../assets/Slider1.png')} style={styles.slider} />
            </View>
            <TouchableOpacity onPress={nextPage} style={styles.navigationButtons}>
              <Image source={require('../../assets/next2.png')} style={styles.nextImage} />
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
  bg: {
    width: 390,
    height: 820,
    borderRadius: 15,
    left: -25,
    top: -45,
  },
  textbg: {
    right: 10,
    position: 'absolute',
    top: 450,
    height: 300,
    width: 360,
    borderRadius: 32,
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
    width: 312,
    top: -390,
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
    width: 327,
    height: 85,
    left: -160,
    top: -290,
    position: 'absolute',
    textAlign: 'center',
    color: '#92929D',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.12,
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
    width: 76,
    top: -174,
    left: -160,
    position: 'absolute',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //position: 'absolute',
  },
  nextImage: {
    top: -220,
    left: 100,
    width: 80,
    height: 80,
    position:'absolute', 
  },
  iconBack: {
    top: -190,
    left: 127,
    height: 24,
    position:'absolute',
    width: 24,

  },
});

export default OnBoarding4;