import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const MovieDetails = () => {
  const bgImage = require('../../assets/spiderBg.png');
  const BgSpider = require('../../assets/spyDetailPg.png');
  const heart = require('../../assets/heart.png');
  const back = require('../../assets/Back.png');
  const calendar = require('../../assets/calendar.png');
  const clock = require('../../assets/clock.png');
  const film = require('../../assets/film.png');
  const vector = require('../../assets/Vector1.png');
  const star = require('../../assets/star.png');
  const playButton = require('../../assets/PlayButton.png');
  const download = require('../../assets/Download1.png');
  const share = require('../../assets/Share.png');
  const avatar = require('../../assets/Avatar.png');
  const close = require('../../assets/Close.png');
  const fb = require('../../assets/Facebook1.png');
  const insta = require('../../assets/insta.png');
  const messenger = require('../../assets/Messenger.png');
  const telegram = require('../../assets/send.png');

  const navigation = useNavigation();

  const [open, setOpen] = React.useState(false);

  return (
    <View style={styles.window}>
      <View style={styles.container}>
        {/* <ScrollView> */}
          <Image
            source={bgImage}
            resizeMode="cover"
            style={{height: 552, width: 'auto'}}
          />
          <LinearGradient
            colors={['rgba(31,29,43,0.2)', 'rgba(31,29,43,1)']} // Define gradient colors and opacity
            style={styles.gradientOverlay}
          />
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Image source={back} />
            </TouchableOpacity>
            <Text style={styles.title}>Spider-Man No Way..</Text>
            <Image source={heart} />
          </View>
          <Image source={BgSpider} style={styles.image} />
          <View style={{flexDirection: 'row', gap: 12, alignSelf: 'center'}}>
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Image source={calendar} />
              <Text style={styles.textStyle1}>2021</Text>
            </View>
            <Image source={vector} />
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Image source={clock} />
              <Text style={styles.textStyle1}>148 Minutes</Text>
            </View>
            <Image source={vector} />
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Image source={film} />
              <Text style={styles.textStyle1}>Action</Text>
            </View>
          </View>
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              gap: 5,
              marginTop: 8,
            }}>
            <Image source={star} />
            <Text style={styles.textStyle2}>4.5</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 16,
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <TouchableOpacity>
              <Image source={playButton} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={download} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Image source={share} />
            </TouchableOpacity>
          </View>
          <Modal animationType="slide" transparent={true} visible={open}>
            <View style={{flex: 1, backgroundColor: 'rgba(31,29,43, 0.9)'}}>
              <View style={styles.centeredModal}>
                <View style={styles.modalView}>
                  <TouchableOpacity
                    onPress={() => setOpen(false)}
                    style={{alignSelf: 'flex-end'}}>
                    <Image source={close} />
                  </TouchableOpacity>
                  <Text style={[styles.textStyle3, {fontSize: 18}]}>
                    Share to
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 16,
                      marginTop: 48,
                      marginBottom: 10,
                    }}>
                    <TouchableOpacity>
                      <Image source={fb} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Image source={insta} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Image source={messenger} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Image source={telegram} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          <View style={styles.story}>
            <View style={{gap: 5, marginRight: 24, left: 20, top: 10}}>
              <Text style={styles.title}>Story Line</Text>
              <Text style={styles.description}>
                For the first time in the cinematic history of Spider-Man, our
                friendly neighborhood hero's identity is revealed, bringing his
                Super Hero responsibilities into conflict with his normal life
                and putting those he cares about most at risk.
                <Text style={{color: '#12CDD9'}}> More</Text>
              </Text>
            </View>
            <View style={{gap: 5, marginBottom: 20, left: 20, top: 10}}>
              <Text style={styles.title}>Cast and Crew</Text>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{marginTop: 5, gap: 12}}>
                <View
                  style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                  <Image source={avatar} />
                  <View>
                    <Text style={styles.textStyle3}>Jon Watts</Text>
                    <Text style={styles.textStyle4}>Directors</Text>
                  </View>
                </View>
                <View
                  style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                  <Image source={avatar} />
                  <View>
                    <Text style={styles.textStyle3}>Chris McKenna</Text>
                    <Text style={styles.textStyle4}>Writers</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center',
                  }}>
                  <Image source={avatar} />
                  <View>
                    <Text style={styles.textStyle3}>Erik Sommers</Text>
                    <Text style={styles.textStyle4}>Writers</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        {/* </ScrollView> */}
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
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={styles.navTab}>
          <Image source={person} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  container: {
    flex: 1,
    position: 'relative', // To allow absolute positioning of child elements
  },
  gradientOverlay: {
    position: 'absolute',
    width: '100%',
    height: 552,
  },
  header: {
    marginTop: -520,
    marginLeft: 28,
    marginRight: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 16,
  },
  textStyle1: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#92929D',
  },
  textStyle2: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#FF8700',
  },
  story: {
    marginLeft: 24,
    marginTop: 0,
    right: 25,
    justifyContent: 'space-between',
    gap: 24,
    backgroundColor: '#1F1D2B'
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontWeight: '400',
    color: '#EBEBEF',
    letterSpacing: 0.12
  },
  textStyle3: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#fff',
    letterSpacing: 0.12
  },
  textStyle4: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    color: '#92929D',
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
    width: 90,
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
  centeredModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#252836',
    borderRadius: 16,
    width: '90%',
    padding: 35,
    alignItems: 'center',
  },
});

export default MovieDetails;
