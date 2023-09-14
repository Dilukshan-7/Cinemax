import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Start = () => {

  const navigation = useNavigation();

  const back = () => {
    navigation.navigate('Start');
  };
  const login = () => {
    navigation.navigate('Login')
  }
  const signup = () => {
    navigation.navigate('SignUp')
  }
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //       navigation.navigate('OnBoarding2');
  //   },1000);

  //   return () => clearTimeout(timer);
  // }, [navigation]);

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.name}>CINEMAX</Text>
        <Text style={styles.desc}>Enter your registered Phone Number to Sign Up</Text>

        <TouchableOpacity onPress={signup} style={styles.button}><Text style={styles.buttontxt}>Sign Up</Text></TouchableOpacity>
        <Text style={styles.acc}>I already have an account?
          <TouchableOpacity>
            <Text onPress={login} style={styles.login}>Login</Text>
          </TouchableOpacity>
        </Text>
        <View style={styles.line1} />
        <Text style={styles.signup}> Or Sign up with</Text>
        <View style={styles.line2} />
        <Image source={require('../../assets/google.png')} style={styles.ggl} />
        <Image source={require('../../assets/apple.png')} style={styles.apple} />
        <Image source={require('../../assets/fb.png')} style={styles.fb} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171725',
  },
  logo: {
    top: 124,
    left: 130,
    width: 145,
    height:145
  },
  name: {
    color: 'white',
    top: 84,
    left: 130,
    fontSize: 32,
    fontWeight: '600',
    letterSpacing: 0.7
  },
  desc: {
    top: 94,
    left: 110,
    height: 40,
    width: 200,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: '#92929D',
    lineHeight: 20,
    letterSpacing: 0.7
  },
  button: {
    top: 150,
    left: 20, 
    backgroundColor: '#12CDD9',
    height: 56,
    width: 350,
    borderRadius: 32,
  },
  buttontxt: {
    top: 15,
    left: 135,
    width: 90,
    height: 40,
    color: 'white',
    fontSize: 18,
    letterSpacing: 0.7,
    fontWeight: '500'
  },
  acc: {
    top: 205,
    left: 74,
    color: '#92929D',
    //width: 327,
    height: 56,
    letterSpacing:0.9,
    fontWeight: '500',
    fontSize: 16
  },
  login: {
    color: '#12CDD9',
    top: 2,
    left: 7,
    fontWeight: '500',
    letterSpacing:0.9,
    fontSize: 16
  },
  line1: {
    top: 222,
    left: 70,
    padding: 0,
    width: 63,
    height: 2,  //chng to 1
    backgroundColor: '#252836',
  },
  signup: {
    top: 210,
    left: 140,
    color: '#92929D',
    fontSize: 16,
    letterSpacing: 0.7,
    fontWeight: '500'
  },
  line2: {
    top: 200,
    left: 270,
    padding: 0,
    width: 63,
    height: 2, //chng to 1
    backgroundColor: '#252836',
  },
  ggl: {
    height: 69,
    width: 69,
    top: 256,
    left: 70
  },
  apple: {
    height: 72,
    width: 72,
    top: 182,
    left: 170 
  },
  fb: {
    height: 69,
    width: 69,
    top: 115,
    left: 270
  },
});

export default Start;
