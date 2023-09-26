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

const Trailer = () => {
  const back = require('../../assets/Back.png');
  const img1 = require('../../assets/TrailerVideo.png');
  const calendar = require('../../assets/calendar.png');
  const film = require('../../assets/film.png');
  const vector = require('../../assets/Vector1.png');
  const heart = require('../../assets/heart.png');
  const avatar1 = require('../../assets/Avatar1.png');
  const avatar2 = require('../../assets/Avatar2.png');
  const avatar3 = require('../../assets/Avatar3.png');
  const gallery1 = require('../../assets/GalleryImg1.png');
  const gallery2 = require('../../assets/GalleryImg2.png');
  const gallery3 = require('../../assets/GalleryImg3.png');

  const navigation = useNavigation();

  return (
    <View style={styles.window}>
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.navigate('UpcomingMovie')}>
              <Image source={back} />
            </TouchableOpacity>
            <Text style={styles.title}>Trailer</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
              <Image source={heart} />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.card}>
              <Image source={img1} />
              <Text style={styles.title}>The Batman</Text>
              <View style={{flexDirection: 'row', gap: 12}}>
                <Image source={calendar} />
                <Text style={styles.textStyle1}>
                  Release Date:{' '}
                  <Text style={{color: '#fff'}}>March 2,2022</Text>
                </Text>
                <Image source={vector} />
                <Image source={film} />
                <Text style={styles.textStyle1}>Action</Text>
              </View>
            </View>
            <View style={{gap: 10, alignSelf: 'center', width: 327}}>
              <Text style={styles.title}>Synopsis</Text>
              <Text style={styles.description}>
                THE BATMAN is an edgy, action-packed thriller that depicts
                Batman in his early years, struggling to balance rage with
                righteousness as he investigates a disturbing mystery that has
                terrorized Gotham. Robert Pattinson delivers a raw, intense
                portrayal of Batman as a disillusioned, desperate vigilante
                awakened by the realization..{' '}
                <Text style={{color: '#12CDD9'}}>More</Text>
              </Text>
            </View>
            <View style={{gap: 10, alignSelf: 'center', width: 327}}>
              <Text style={styles.title}>Cast and Crew</Text>
              <ScrollView
                horizontal
                contentContainerStyle={{marginTop: 5, gap: 12}}>
                <View style={styles.avatarContainer}>
                  <Image source={avatar1} />
                  <View>
                    <Text style={styles.textStyle2}>Jon Watts</Text>
                    <Text style={styles.textStyle3}>Directors</Text>
                  </View>
                </View>
                <View style={styles.avatarContainer}>
                  <Image source={avatar2} />
                  <View>
                    <Text style={styles.textStyle2}>Chris McKenna</Text>
                    <Text style={styles.textStyle3}>Writers</Text>
                  </View>
                </View>
                <View style={styles.avatarContainer}>
                  <Image source={avatar3} />
                  <View>
                    <Text style={styles.textStyle2}>Erik Sommers</Text>
                    <Text style={styles.textStyle3}>Writers</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={{gap: 10, alignSelf: 'center', width: 327}}>
              <Text style={styles.title}>Gallery</Text>
              <View style={{flexDirection: 'row', gap: 12}}>
                <Image source={gallery1} />
                <Image source={gallery2} />
                <Image source={gallery3} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <BottomNavigation />
    </View>
  );
};
const BottomNavigation = () => {
  const home = require('../../assets/home.png');
  const search = require('../../assets/search1.png');
  const download = require('../../assets/download.png');
  const person = require('../../assets/person.png');

  const navigation = useNavigation();
  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.activeNavTab}>
          <Image source={home} />
          <Text style={styles.navText}>Home</Text>
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
      <View style={styles.navTab}>
        <Image source={person} />
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
    gap: 32,
    marginTop: 24,
    marginBottom: 40,
  },
  card: {
    alignSelf: 'center',
    gap: 12,
  },
  textStyle1: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#92929D',
  },
  textStyle2: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#fff',
  },
  textStyle3: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    color: '#92929D',
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#EBEBEF',
  },
  bottomNavigation: {
    flexDirection: 'row',
    gap: 17,
    height: 72,
    paddingLeft: 39,
    paddingRight: 39,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F1D2B',
    width: 'auto',
  },
  navTab: {
    width: 48,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeNavTab: {
    width: 116,
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
  avatarContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default Trailer;