import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Verification = () => {
  const [otp1, setOtp1] = React.useState('');
  const [otp2, setOtp2] = React.useState('');
  const [otp3, setOtp3] = React.useState('');
  const [otp4, setOtp4] = React.useState('');
  const [isFocused1, setIsFocused1] = React.useState(false);
  const [isFocused2, setIsFocused2] = React.useState(false);
  const [isFocused3, setIsFocused3] = React.useState(false);
  const [isFocused4, setIsFocused4] = React.useState(false);
  
  const navigation = useNavigation();

  const back = () => {
    navigation.navigate('ResetPassword');
  };

  const handleFocus1 = () => {
    setIsFocused1(true);
  };

  const handleBlur1 = () => {
    setIsFocused1(false);
  };

  const handleFocus2 = () => {
    setIsFocused2(true);
  };

  const handleBlur2 = () => {
    setIsFocused2(false);
  };
  const handleFocus3 = () => {
    setIsFocused3(true);
  };

  const handleBlur3 = () => {
    setIsFocused3(false);
  };
  const handleFocus4 = () => {
    setIsFocused4(true);
  };

  const handleBlur4 = () => {
    setIsFocused4(false);
  };

  const handleOTP1Change = number => {
    setOtp1(number);
  };
  const handleOTP2Change = number => {
    setOtp2(number);
  };
  const handleOTP3Change = number => {
    setOtp3(number);
  };
  const handleOTP4Change = number => {
    setOtp4(number);
  };
  const Continue = () => {
    const otp = `${otp1}${otp2}${otp3}${otp4}`;

    // Verify the OTP using Firebase.
    firebase.auth().confirmPasswordReset(otp).then(() => {
      // Navigate to the NewPassword screen.
      navigation.navigate('NewPassword');
    }).catch((error) => {
      // Handle the error.
      const errorMessage = error.message;
      console.error('Error verifying OTP:', errorMessage);
      alert('Invalid OTP. Please try again.');
    });
  };
  const Resend = async() => {
    const email = navigation.getParam('email'); 
    // Send the OTP to the user's email address again.
    firebase.auth().sendPasswordResetEmail(email);
  };

  return (
    <View style={styles.window}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
          <Image source={require('../../assets/Back.png')} />
        </TouchableOpacity>
      </View>
      <Text style={[styles.textStyle1, {marginTop: 46}]}>
        Verify Your Account
      </Text>
      <Text style={[styles.textStyle2, {marginTop: 10, width: 304}]}>
        We have just sent you 4 digit code via your email{' '}
        <Text style={{color: '#fff'}}>example@gmail.com</Text>
      </Text>
      <View style={styles.numberContainer}>
        <TextInput
          keyboardType="numeric"
          style={isFocused1 || otp1 ? styles.focusInput : styles.numberInput}
          value={otp1}
          onChangeText={handleOTP1Change}
          onFocus={handleFocus1}
          onBlur={handleBlur1}
        />
        <TextInput
          keyboardType="numeric"
          style={isFocused2 || otp2 ? styles.focusInput : styles.numberInput}
          value={otp2}
          onChangeText={handleOTP2Change}
          onFocus={handleFocus2}
          onBlur={handleBlur2}
        />
        <TextInput
          keyboardType="numeric"
          style={isFocused3 || otp3 ? styles.focusInput : styles.numberInput}
          value={otp3}
          onChangeText={handleOTP3Change}
          onFocus={handleFocus3}
          onBlur={handleBlur3}
        />
        <TextInput
          keyboardType="numeric"
          style={isFocused4 || otp4 ? styles.focusInput : styles.numberInput}
          value={otp4}
          onChangeText={handleOTP4Change}
          onFocus={handleFocus4}
          onBlur={handleBlur4}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={Continue}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', gap: 5, alignSelf: 'center'}}>
        <Text style={styles.textStyle3}>Didn't receive code?</Text>
        <TouchableOpacity onPress={Resend}>
          <Text style={[styles.textStyle3, {color: '#12CDD9'}]}>Resend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 50,
    marginTop: 30,
  },
  textStyle1: {
    color: '#fff',
    //fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    fontSize: 28,
  },
  textStyle2: {
    color: '#92929D',
    //fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 14,
  },
  textStyle3: {
    color: '#92929D',
    //fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    marginTop: 42,
  },
  numberContainer: {
    height: 64,
    gap: 16,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 32,
  },
  numberInput: {
    width: 63,
    height: 64,
    backgroundColor: 'rgba(37, 40, 54, 1)',
    borderRadius: 15,
    textAlign: 'center',
    fontSize: 28,
    color: '#fff',
    //fontFamily: 'Montserrat-SemiBold',
  },
  focusInput: {
    width: 63,
    height: 64,
    backgroundColor: 'rgba(37, 40, 54, 1)',
    borderRadius: 15,
    textAlign: 'center',
    fontSize: 28,
    color: '#fff',
    //fontFamily: 'Montserrat-SemiBold',
    borderWidth: 1.5,
    borderColor: '#12CDD9',
  },
  button: {
    width: 327,
    height: 56,
    borderRadius: 32,
    backgroundColor: '#12CDD9',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 64,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    //fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
});

export default Verification;
