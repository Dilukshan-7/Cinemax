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

const Notifications = () => {
  const navigation = useNavigation();

  const back = require('../../assets/Back.png');
  const switchImg = require('../../assets/Switch.png');
  const switchImg1 = require('../../assets/Switch1.png');

  const [switch1, setSwitch1] = React.useState(true);

  return (
    <View style={styles.window}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={back} />
          </TouchableOpacity>
          <Text style={styles.title}>Notification</Text>
          <View style={{width: 24, height: 24}} />
        </View>
        <View style={styles.container}>
          <Text style={styles.textStyle1}>Messages Notifications</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textStyle2}>Show Notifications</Text>
            {switch1 ? (
              <TouchableOpacity onPress={() => setSwitch1(!switch1)}>
                <Image source={switchImg} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setSwitch1(!switch1)}>
                <Image source={switchImg1} />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.line} />
          <Text style={styles.textStyle2}>Exceptions</Text>
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
    height: 163,
    alignSelf: 'center',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(37, 40, 54, 1)',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    paddingBottom: 24,
  },
  textStyle1: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#92929D',
  },
  textStyle2: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: '#fff',
  },
  line: {
    height: 2,
    width: 295,
    backgroundColor: '#252836',
    alignSelf: 'center',
  },
});

export default Notifications;
