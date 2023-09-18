import React, { useEffect } from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Splash = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
        navigation.navigate('Start');
    },1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  logo: {
    top: 300,
    left: 130,
    width: 145,
    height:145
  }
});

export default Splash;