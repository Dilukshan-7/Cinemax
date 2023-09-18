import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import auth  from '@react-native-firebase/auth';

const SignUp = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignUp = async() => {
    if (fullName !== '' && email !== '' && password !== '' && agreeTerms !== '') {     
        try {
          await auth().createUserWithEmailAndPassword(email, password)
          // Registration successful.
          console.log('User registered successfully:'/*, userCredential.user*/);
          //navigate to login screen
          navigation.navigate('Login');
        }
        catch(error) {
          // Handle registration error
          const errorMessage = error.message;
          console.error('Registration error:', errorMessage);
        };
    } else {
      console.log('Please fill all the fields');
    }
  };

  const toggleAgreeTerms = () => {
    setAgreeTerms(!agreeTerms);
  };

  const Login = () => {
    navigation.navigate('Login');
  };
  const back = () => {
    navigation.navigate('Start');
  };

  const isSignUpButtonDisabled = !(fullName && email && password && agreeTerms);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={back}><Image
        source={require('../../assets/Back.png')}
        style={styles.backIcon}
      /></TouchableOpacity>
      <Text style={styles.header}>Sign Up</Text>
      <Text style={styles.text}>Let's get started</Text>
      <Text style={styles.desc}>The latest movies and series are here</Text>

      {/* Full Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Tiffany"
          placeholderTextColor="#92929D"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
        />
      </View>

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

      {/* Checkbox for Agree to Terms */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={[styles.checkbox, agreeTerms && styles.checkedCheckbox]}
          onPress={toggleAgreeTerms}
        >
          {agreeTerms && (
            <Text style={styles.checkmark}>✓</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.agreeText}>
          I agree to the <Text style={styles.termsAndPrivacyText}>Terms and Services</Text> and <Text style={styles.termsAndPrivacyText}>Privacy Policy</Text>
        </Text>
      </View>

      {/* "Save" button */}
      <TouchableOpacity
        style={[styles.button, isSignUpButtonDisabled && styles.disabledButton]}
        disabled={isSignUpButtonDisabled}
        onPress={handleSignUp} // Navigate to the 'Login' screen when the button is pressed
      >
        <Text style={styles.buttonText}>Sign Up</Text>
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
    top: -92,
    right: 140,
    position: 'absolute',
  },
  header: {
    color: 'white',
    top: -92,
    fontSize: 18,
    letterSpacing: 0.2,
  },
  text: {
    color: 'white',
    top: -50,
    left: 15,
    width: 203,
    height: 33,
    fontSize: 24,
    letterSpacing: 0.7,
    fontWeight: '600',
  },
  desc: {
    color: '#92929D',
    top: -45,
    left: 8,
    width: 177,
    height: 30,
    fontSize: 12,
    letterSpacing: 0.9,
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
    top: -25,
    left: 15,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'transparent',
    top: -40,
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
    bottom: 18,
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
    top: -20,
  },
  disabledButton: {
    backgroundColor: '#92929D',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 57,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  checkbox: {
    top: -43,
    right: 40,
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#92929D',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkedCheckbox: {
    backgroundColor: '#12CDD9',
  },
  checkmark: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  agreeText: {
    color: '#92929D',
    width: 226,
    height: 38,
    fontSize: 12,
    top: -40,
    right: 36,
  },
  termsAndPrivacyText: {
    color: '#12CDD9',
  },
});

export default SignUp;
