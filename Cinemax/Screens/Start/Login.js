import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
//import * as firebase from '@react-native-firebase/auth'; // Import Firebase authentication module

  const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    // Check if both email and password fields have valid input
    const isValid = email.trim() !== '' && password.trim() !== '';
    setIsButtonEnabled(isValid);
  }, [email, password]);

//  const handleLogin = () => {
//     navigation.navigate('Home');
//   } 

  const handleLogin = async () => {
    if (email !== '' && password !== '' ) {
        await auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Login successful, navigate to another screen.
          console.log('User logged in successfully:', userCredential.user);
          //navigate to another screen here
          // For example, navigate to a "Home" screen
          navigation.navigate('Home');
        })
        .catch((error) => {
          // Handle login error
          const errorMessage = error.message;
          console.error('Login error:', errorMessage);
          //display an error message to the user if needed
        });
    } else {
      console.log('Please Provide an Email and Password');
    }
  };

  const resetPassword = () => {
    navigation.navigate('ResetPassword');
  };

  const back = () => {
    navigation.navigate('Start');
  };

  const home = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={back}>
        <Image
          source={require('../../assets/Back.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <Text style={styles.header}>Login</Text>
      <Text style={styles.text}>Hi, Tiffany</Text>
      <Text style={styles.desc}>Welcome back! Please enter your details.</Text>

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

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
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

      <TouchableOpacity
        onPress={handleLogin}
        style={[styles.button, !isButtonEnabled && styles.buttonDisabled]}
        disabled={!isButtonEnabled}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={resetPassword}>
        <Text style={styles.login}>Forgot Password</Text>
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
  header: {
    color: 'white',
    top: -142,
    fontSize: 18,
    letterSpacing: 0.2,
  },
  text: {
    color: 'white',
    top: -100,
    left: 15,
    width: 138,
    height: 34,
    fontSize: 28,
    letterSpacing: 0.7,
    fontWeight: '400',
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
  login: {
    color: '#12CDD9',
    fontSize: 17,
    letterSpacing: 1,
    top: -110,
    left: 100,
  },
});

export default Login;
