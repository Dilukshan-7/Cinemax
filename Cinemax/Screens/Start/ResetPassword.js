import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';

const ResetPassword = ({ navigation }) => {

    const [email, setEmail] = useState('');
  
    const handleResetPassword = async () => {
      try {
        await auth().sendPasswordResetEmail(email);
        alert('A password reset email has been sent to your email address.');
        navigation.navigate('Verification');
      } catch (error) {
        alert('An error occurred while trying to reset your password.');
      }
    };

    const Verification = () => {
      navigation.navigate('Login');
    };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={Verification}>
      <Image
        source={require('../../assets/Back.png')}
        style={styles.backIcon}
      />
      </TouchableOpacity>     
      <Text style={styles.text}>Reset Password</Text>
      <Text style={styles.desc}>Recover your account password</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Tiffanyjersey@gmail.com"
          placeholderTextColor="#92929D"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleResetPassword}
      >
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
}
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
    bottom: 200,
    right: 150,
    position: 'absolute',
  },
  text: {
    color: 'white',
    top: -90,
    left: 15,
    width: 227,
    height: 34,
    fontSize: 28,
    letterSpacing: 0.7,
    fontWeight: '500',
  },
  desc: {
    color: '#92929D',
    top: -70,
    left: 8,
    width: 230,
    height: 20,
    fontSize: 14,
    letterSpacing: 0.5,
    fontWeight: '500',
    textAlign: 'center',
  },
  inputContainer: {
    width: 340,
    marginTop: 20,
  },
  inputLabel: {
    color: 'white',
    fontSize: 16,
    top: -35,
    left: 15,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'transparent',
    top: -50,
    borderWidth: 1,
    borderColor: '#252836',
    borderRadius: 50,
    color: 'white',
    fontSize: 16,
    padding: 10,
  },
  button: {
    backgroundColor: '#12CDD9',
    width: 340,
    alignContent: 'center',
    height: 57,
    borderRadius: 55,
    marginTop: 20,
    top: 0,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 57,
  },
});

export default ResetPassword;