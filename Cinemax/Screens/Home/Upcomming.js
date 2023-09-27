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

const UpcomingMovie = () => {
  const back = require('../../assets/Back.png');
  const img1 = require('../../assets/Upcoming1.png');
  const img2 = require('../../assets/Upcoming2.png');
  const img3 = require('../../assets/Upcoming3.png');
  const calendar = require('../../assets/calendar.png');
  const film = require('../../assets/film.png');
  const vector = require('../../assets/Vector1.png');

  const navigation = useNavigation();

  const [activeTab, setActiveTab] = React.useState(1);
  const selected = tab => {
    setActiveTab(tab);
  };

  const home = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.window}>
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity onPress={home}>
              <Image source={back} />
            </TouchableOpacity>
            <Text style={styles.title}>Upcoming Movie</Text>
            <View style={{width: 24, height: 24}} />
          </View>
          <View style={styles.categories}>
            <ScrollView
              horizontal
              contentContainerStyle={{flexDirection: 'row', gap: 8}}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.tabs}>
                <TouchableOpacity onPress={() => selected(1)}>
                  <Text
                    style={
                      activeTab === 1
                        ? [styles.activeTab, {width: 80}]
                        : [styles.tab, {width: 80}]
                    }>
                    All
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selected(2)}>
                  <Text
                    style={
                      activeTab === 2
                        ? [styles.activeTab, {width: 76}]
                        : [styles.tab, {width: 76}]
                    }>
                    Comedy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selected(3)}>
                  <Text
                    style={
                      activeTab === 3
                        ? [styles.activeTab, {width: 90}]
                        : [styles.tab, {width: 90}]
                    }>
                    Animation
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selected(4)}>
                  <Text
                    style={
                      activeTab === 4
                        ? [styles.activeTab, {width: 111}]
                        : [styles.tab, {width: 111}]
                    }>
                    Documentary
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <View style={styles.container}>
            <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Trailer')}>
              <Image source={img1} />
              </TouchableOpacity>
              <Text style={styles.title}>The Batman</Text>
              <View style={{flexDirection: 'row', gap: 12}}>
                <Image source={calendar} />
                <Text style={styles.textStyle1}>March 2, 2022</Text>
                <Image source={vector} />
                <Image source={film} />
                <Text style={styles.textStyle1}>Action</Text>
              </View>
            </View>
            <View style={styles.card}>
                <Image source={img2} />
              <Text style={styles.title}>Black Panther: Wakanda Forever</Text>
              <View style={{flexDirection: 'row', gap: 12}}>
                <Image source={calendar} />
                <Text style={styles.textStyle1}>November 11, 2022</Text>
                <Image source={vector} />
                <Image source={film} />
                <Text style={styles.textStyle1}>Action</Text>
              </View>
            </View>
            <View style={styles.card}>
              <Image source={img3} />
              <Text style={styles.title}>Minions: The Rise of Gru</Text>
              <View style={{flexDirection: 'row', gap: 12}}>
                <Image source={calendar} />
                <Text style={styles.textStyle1}>July 1, 2022</Text>
                <Image source={vector} />
                <Image source={film} />
                <Text style={styles.textStyle1}>Animation</Text>
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
    fontFamily: 'Montserrat',
    fontSize: 16,
    color: '#fff',
  },
  categories: {
    justifyContent: 'space-between',
    marginLeft: 24,
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    marginTop: 15,
  },
  tab: {
    height: 31,
    color: '#EBEBEF',
    borderRadius: 8,
    textAlign: 'center',
    paddingTop: 8,
    fontFamily: 'Montserrat',
    fontSize: 12,
  },
  activeTab: {
    height: 31,
    color: '#12CDD9',
    backgroundColor: '#252836',
    borderRadius: 8,
    textAlign: 'center',
    paddingTop: 8,
    fontFamily: 'Montserrat',
    fontSize: 12,
  },
  container: {
    alignSelf: 'center',
    gap: 24,
    marginTop: 24,
  },
  card: {
    width: 327,
    gap: 12,
  },
  textStyle1: {
    fontFamily: 'Montserrat',
    fontSize: 12,
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
    fontFamily: 'Montserrat',
    fontSize: 14,
  },
});

export default UpcomingMovie;
