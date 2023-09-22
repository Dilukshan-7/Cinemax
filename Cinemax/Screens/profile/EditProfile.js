import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BottomNavigation = () => {
  const home = require('../../assets/home1.png');
  const search = require('../../assets/search1.png');
  const download = require('../../assets/download.png');
  const person = require('../../assets/person1.png');

  const navigation = useNavigation();
  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.navTab}>
          <Image source={home} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <View style={styles.navTab}>
          <Image source={search} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Download')}>
        <View style={styles.navTab}>
          <Image source={download} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={styles.activeNavTab}>
          <Image source={person} />
          <Text style={styles.navText}>Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const EditProfile = () => {
  const navigation = useNavigation();

  const back = require('../../assets/Back.png');
  const editProfile = require('../../assets/EditProfile.png');

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [number, setNumber] = React.useState('');

  const handleNameChange = name => {
    setName(name);
  };

  const handleEmailChange = emailText => {
    setEmail(emailText);
  };
  const handlePasswordChange = password => {
    setPassword(password);
  };
  const handleNumberChange = number => {
    setNumber(number);
  };
  return (
    <View style={styles.window}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={back} />
          </TouchableOpacity>
          <Text style={styles.title}>Edit Profile</Text>
          <View style={{width: 24, height: 24}} />
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
            <Image source={editProfile} />
          </TouchableOpacity>
          <Text style={styles.textStyle1}>Tiffany</Text>
          <Text style={styles.textStyle2}>Tiffanyjearsey@gmail.com</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputFieldContainer}>
            <View>
              <Text style={[styles.label, {width: 70}]}>Full Name</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Tiffany"
                placeholderTextColor="rgba(146, 146, 157, 1)"
                value={name}
                onChangeText={handleNameChange}
              />
            </View>
          </View>
          <View style={styles.inputFieldContainer}>
            <View>
              <Text style={[styles.label, {width: 100}]}>Email Address</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Tiffanyjearsey@gmail.com"
                placeholderTextColor="rgba(146, 146, 157, 1)"
                value={email}
                onChangeText={handleEmailChange}
              />
            </View>
          </View>
          <View style={styles.inputFieldContainer}>
            <View>
              <Text style={[styles.label, {width: 70}]}>Password</Text>
              <TextInput
                style={styles.inputField}
                placeholder="••••••••••••••••••••••••"
                placeholderTextColor="rgba(146, 146, 157, 1)"
                value={password}
                onChangeText={handlePasswordChange}
              />
            </View>
          </View>
          <View style={styles.inputFieldContainer}>
            <View>
              <Text style={[styles.label, {width: 100}]}>Phone Number</Text>
              <TextInput
                style={styles.inputField}
                placeholder="+1 82120142305"
                placeholderTextColor="rgba(146, 146, 157, 1)"
                value={number}
                onChangeText={handleNumberChange}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    flexDirection: 'row',
    gap: 17,
    height: 72,
    marginLeft: 39,
    marginRight: 39,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navTab: {
    width: 48,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeNavTab: {
    width: 98,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#252836',
    borderRadius: 16,
  },
  navText: {
    color: '#12CDD9',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
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
    gap: 5,
    alignItems: 'center',
  },
  textStyle1: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  textStyle2: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#B1B1B1',
  },
  inputContainer: {
    marginTop: 40,
    marginLeft: 24,
    marginRight: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
  },
  inputFieldContainer: {
    width: 327,
    height: 53,
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#252836',
  },
  inputField: {
    width: 263,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    paddingLeft: 15,
    paddingBottom: 20,
  },
  label: {
    height: 15,
    color: '#EBEBEF',
    marginTop: -5,
    marginLeft: 15,
    backgroundColor: '#1F1D2B',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  button: {
    width: 327,
    height: 56,
    borderRadius: 32,
    backgroundColor: '#12CDD9',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
});

export default EditProfile;
