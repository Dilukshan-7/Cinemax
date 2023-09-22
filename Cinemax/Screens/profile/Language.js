import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Language = () => {
  const navigation = useNavigation();

  const back = require('../../assets/Back.png');
  const tick = require('../../assets/tick.png');

  return (
    <View style={styles.window}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={back} />
          </TouchableOpacity>
          <Text style={styles.title}>Language</Text>
          <View style={{width: 24, height: 24}} />
        </View>
        <View style={styles.container}>
          <Text style={styles.textStyle2}>Suggested Languages</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textStyle1}>English (UK)</Text>
            <Image source={tick} />
          </View>
          <View style={styles.line} />
          <Text style={styles.textStyle1}>English</Text>
          <View style={styles.line} />
          <Text style={styles.textStyle1}>Bahasa Indonesia</Text>
        </View>
        <View style={[styles.container, {height: 400}]}>
          <Text style={styles.textStyle2}>Suggested Languages</Text>
          <Text style={styles.textStyle1}>Chinese</Text>
          <View style={styles.line} />
          <Text style={styles.textStyle1}>Croatian</Text>
          <View style={styles.line} />
          <Text style={styles.textStyle1}>Czech</Text>
          <View style={styles.line} />
          <Text style={styles.textStyle1}>Danish</Text>
          <View style={styles.line} />
          <Text style={styles.textStyle1}>Filipino</Text>
          <View style={styles.line} />
          <Text style={styles.textStyle1}>Finnish</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  header: {
    marginTop: 30,
    marginLeft: 28,
    marginRight: 28,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  container: {
    width: 327,
    height: 217,
    alignSelf: 'center',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(37, 40, 54, 1)',
    paddingLeft: 24,
    paddingRight: 19,
    paddingTop: 24,
    paddingBottom: 24,
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  textStyle1: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  textStyle2: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#696974',
  },
  line: {
    height: 2,
    width: 286,
    backgroundColor: '#252836',
    alignSelf: 'center',
  },
});

export default Language;
