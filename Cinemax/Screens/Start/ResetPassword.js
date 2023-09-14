import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

const ResetPassword = ({ navigation }) => {

  const next = () => {
    navigation.navigate('Verification');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Back.png')}
        style={styles.backIcon}
      />
      <Text style={styles.text}>Reset Password</Text>
      <Text style={styles.desc}>Recover your account password</Text>

      {/* "Save" button */}
      <TouchableOpacity
        style={styles.button}
        onPress={next}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
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
  backIcon: {
    width: 32,
    height: 32,
    top: 50,
    right: 350,
    position: 'absolute',
  },
  text: {
    color: 'white',
    top: -200,
    left: 15,
    width: 227,
    height: 34,
    fontSize: 28,
    letterSpacing: 0.7,
    fontWeight: '500',
  },
  desc: {
    color: '#92929D',
    top: -190,
    left: 8,
    width: 230,
    height: 20,
    fontSize: 14,
    letterSpacing: 0.5,
    fontWeight: '500',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#12CDD9',
    width: 340,
    alignContent: 'center',
    height: 57,
    borderRadius: 55,
    marginTop: 20,
    top: -57,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 57,
  },
});

export default ResetPassword;