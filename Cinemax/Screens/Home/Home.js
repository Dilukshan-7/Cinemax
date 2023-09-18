import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

const Home = ({ navigation }) => {

  const next = () => {
    navigation.navigate('Verification');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Avatar.png')} style={styles.Img}/>
      <Text style={styles.text}>Hello, Smith</Text>
      <Text style={styles.desc}>Let's stream your favourite movie</Text>
      <Image source={require('../../assets/heart.png')} style={styles.heart}/>
      <View style={styles.searchContainer}>
        <Image source={require('../../assets/search.png')} style={styles.search}/>
        <TextInput
          style={styles.input}
        />
        <Image source={require('../../assets/Vector1.png')} style={styles.vector}/>
        <Image source={require('../../assets/filter.png')} style={styles.filter}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1D2B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Img: {
    bottom: 270,
    right: 150,
    height: 40,
    width: 40
  },
  text: {
    color: 'white',
    bottom: 320,
    left: 15,
    width: 227,
    height: 34,
    fontSize: 28,
    letterSpacing: 0.7,
    fontWeight: '400',
  },
  desc: {
    color: '#92929D',
    bottom: 320,
    left: 8,
    width: 230,
    height: 20,
    fontSize: 14,
    letterSpacing: 0.5,
    fontWeight: '500',
    textAlign: 'center',
  },
  heart: {
    bottom: 360,
    left: 150,
    height: 27,
    width: 27,
    padding: 1,
  },
  searchContainer: {
    width: 327,
    height:41,
    bottom: 270,
    backgroundColor: '#252836',
    borderRadius: 24,
  },
  search: {
    top: 12,
    left: 13,
    height: 16,
    width: 16,
  },
  vector: {
    bottom: 30,
    left: 270
  },
  filter: {
    bottom: 50,
    left: 290
  },
});

export default Home;