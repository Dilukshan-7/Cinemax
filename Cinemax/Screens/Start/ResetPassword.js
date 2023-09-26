import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const ResetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {

    function generateOTP() {
      // Generate a random 4-digit OTP
      const otp = Math.floor(Math.random() * (9999 - 1000)) + 1000;   
      // Return the OTP
      return otp;
    }

    try {
      // Generate an OTP
      const otp = generateOTP();

      // Send the OTP to the user's email address
      await auth().sendPasswordResetEmail(email, {
        actionCodeSettings: {
          url: 'https://example.com/verification',
          handleCodeInApp: true,
        },
      });

      // Navigate to the Verification page
      navigation.navigate('Verification', { otp });
    } catch (error) {
      alert('An error occurred while trying to reset your password.'. error);
      console.log(error);
    }
  };

  // const Verification = () => {
  //   const navigation = useNavigation();
  //   const otp = navigation.getParam('otp');

  //   // Verify the user's OTP

  //   // Once the OTP is verified, navigate to the next page
  //   navigation.navigate('Next');
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reset Password</Text>
      <Text style={styles.desc}>Recover your account password</Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleResetPassword}
      >
        <Text style={styles.buttonText}>Send OTP</Text>
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
  text: {
    color: 'white',
    fontSize: 28,
    fontWeight: '500',
  },
  desc: {
    color: '#92929D',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'transparent',
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
