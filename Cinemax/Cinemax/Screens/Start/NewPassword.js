import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

const NewPassword = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const resetPassword = () => {
    navigation.navigate('Login');
  };

  const back = () => {
    navigation.navigate('Start');
  };

  const checkButtonEnabled = () => {
    setIsButtonEnabled(password.trim() !== '' && confirmPassword.trim() !== '');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={back}>
        <Image
          source={require('../../assets/Back.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Create New Password</Text>
      <Text style={styles.desc}>Enter your New password</Text>

      {/* New Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>New Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={!showPassword}
          onChangeText={(text) => {
            setPassword(text);
            checkButtonEnabled(); // Check the button status when text changes
          }}
          value={password}
        />
        <TouchableOpacity
          style={styles.showPasswordButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Image
            source={require('../../assets/eyeOff.png')}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={!showConfirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            checkButtonEnabled(); // Check the button status when text changes
          }}
          value={confirmPassword}
        />
        <TouchableOpacity
          style={styles.showPasswordButton}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <Image
            source={require('../../assets/eyeOff.png')}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={resetPassword}
        style={[styles.button, !isButtonEnabled && styles.buttonDisabled]}
        disabled={!isButtonEnabled}
      >
        <Text style={styles.buttonText}>Reset</Text>
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
    bottom: 115,
    right: 150,
    position: 'absolute',
  },
  text: {
    color: 'white',
    top: -100,
    left: 15,
    width: 400,
    height: 34,
    fontSize: 28,
    letterSpacing: 0.7,
    fontWeight: '400',
    textAlign: 'center'
  },
  desc: {
    color: '#92929D',
    top: -90,
    left: 8,
    width: 255,
    height: 45,
    fontSize: 17,
    letterSpacing: 0.9,
    fontWeight: '400',
    textAlign: 'center',
  },
  inputContainer: {
    width: 340,
    marginTop: 20,
  },
  inputLabel: {
    color: 'white',
    fontSize: 16,
    top: -38,
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
  showPasswordButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  eyeIcon: {
    top: -20,
    width: 24,
    height: 24,
  },
  button: {
    backgroundColor: '#12CDD9',
    width: 340,
    alignContent: 'center',
    height: 57,
    borderRadius: 55,
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#92929D', // Disabled button color
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 57,
  },
});

export default NewPassword;
