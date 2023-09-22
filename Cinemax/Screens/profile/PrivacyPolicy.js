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

const PrivacyPolicy = () => {
  const navigation = useNavigation();

  const back = require('../../assets/Back.png');

  return (
    <View style={styles.window}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={back} />
          </TouchableOpacity>
          <Text style={styles.title}>Privacy Policy</Text>
          <View style={{width: 24, height: 24}} />
        </View>
        <View style={styles.container}>
          <Text style={styles.textStyle1}>Terms</Text>
          <Text style={styles.textStyle2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
            quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
            consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
            est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
          </Text>
          <Text style={[styles.textStyle2, {marginBottom: 24}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
            quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
            consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
            est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
          </Text>
          <Text style={styles.textStyle1}>
            Changes to the Service and/or Terms:
          </Text>
          <Text style={styles.textStyle2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
            quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
            consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
            est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
          </Text>
          <Text style={styles.textStyle2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare
            quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien,
            consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam
            est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.
          </Text>
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
    marginLeft: 24,
    marginRight: 24,
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
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'space-between',
  },
  textStyle1: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#fff',
    marginBottom: 13,
  },
  textStyle2: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#92929D',
    marginBottom: 8,
  },
});

export default PrivacyPolicy;
