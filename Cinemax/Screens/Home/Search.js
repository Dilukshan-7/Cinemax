import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = React.useState(1);
  const searchIcon = require('../../assets/search.png');
  const todaymovie = require('../../assets/Image1.png');
  const calendar = require('../../assets/calendar.png');
  const clock = require('../../assets/clock.png');
  const film = require('../../assets/film.png');
  const vector = require('../../assets/Vector1.png');
  const card1 = require('../../assets/Card4.png');
  const card2 = require('../../assets/Card5.png');
  const card3 = require('../../assets/Card6.png');
  const home = require('../../assets/home1.png');
  const searchImg = require('../../assets/searchActive.png');
  const download = require('../../assets/download.png');
  const person = require('../../assets/person.png');

  const [search, setSearch] = React.useState('');


  const changeTab = tab => {
    setActiveTab(tab);
  };

  const handleSearch = text => {
    setSearch(text);
  };

  const renderScreens = () => {
      return (
        <>
          <View style={styles.searchBar}>
            <Image source={searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Type title, cateories, years, etc"
              placeholderTextColor="#92929D"
              value={search}
              onChangeText={handleSearch}
            />
          </View>
          <View style={styles.categories}>
            <ScrollView
              horizontal
              contentContainerStyle={{flexDirection: 'row', gap: 8}}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.tabs}>
                <TouchableOpacity onPress={() => changeTab(1)}>
                  <Text
                    style={
                      activeTab === 1
                        ? [styles.activeTab, {width: 80}]
                        : [styles.tab, {width: 80}]
                    }>
                    All
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeTab(2)}>
                  <Text
                    style={
                      activeTab === 2
                        ? [styles.activeTab, {width: 76}]
                        : [styles.tab, {width: 76}]
                    }>
                    Comedy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeTab(3)}>
                  <Text
                    style={
                      activeTab === 3
                        ? [styles.activeTab, {width: 90}]
                        : [styles.tab, {width: 90}]
                    }>
                    Animation
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeTab(4)}>
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
          <View style={styles.todaySection}>
            <Text style={styles.textStyle1}>Today</Text>
            <View style={{flexDirection: 'row', gap: 16}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('MovieDetails')}>
                <Image source={todaymovie} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.popularSection}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 24,
                marginRight: 24,
              }}>
              <Text style={styles.textStyle1}>Recommend for you</Text>
              <Text style={styles.textStyle3}>See All</Text>
            </View>
            <View style={styles.movieCards}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{gap: 12}}>
                <Image source={card1} />
                <Image source={card2} />
                <Image source={card3} />
              </ScrollView>
            </View>
          </View>
        </>
      );
  };

  return (
   <View style={styles.window}>

        <View style={styles.searchBar}>
          <Image source={searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Type title, cateories, years, etc"
            placeholderTextColor="#92929D"
            value={search}
            onChangeText={handleSearch}
          />
        </View>
        <View style={styles.categories}>
          <ScrollView
            horizontal
            contentContainerStyle={{flexDirection: 'row', gap: 8}}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.tabs}>
              <TouchableOpacity onPress={() => changeTab(1)}>
                <Text
                  style={
                    activeTab === 1
                      ? [styles.activeTab, {width: 80}]
                      : [styles.tab, {width: 80}]
                  }>
                  All
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeTab(2)}>
                <Text
                  style={
                    activeTab === 2
                      ? [styles.activeTab, {width: 76}]
                      : [styles.tab, {width: 76}]
                  }>
                  Comedy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeTab(3)}>
                <Text
                  style={
                    activeTab === 3
                      ? [styles.activeTab, {width: 90}]
                      : [styles.tab, {width: 90}]
                  }>
                  Animation
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeTab(4)}>
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
        <View style={styles.todaySection}>
          <Text style={[styles.textStyle1, {top: 0}]}>Today</Text>
          <View style={{flexDirection: 'row', gap: 16}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MovieDetails')}>
              <Image source={todaymovie} />
            </TouchableOpacity>
            <View style={{gap: 13}}>
              <Text style={styles.premium}>Premium</Text>
              <Text style={[styles.textStyle1, {top: 0}]}>Spider-Man No Way..</Text>
              <View style={{flexDirection: 'row', gap: 8}}>
                <Image source={calendar} />
                <Text style={styles.textStyle4}>2021</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 8}}>
                <Image source={clock} />
                <Text style={styles.textStyle4}>148 Minutes</Text>
                <Text style={styles.pgStyle}>PG-13</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 8}}>
                <Image source={film} />
                <Text style={styles.textStyle4}>Action</Text>
                <Image source={vector} />
                <Text style={[styles.textStyle4, {color: '#fff'}]}>Movie</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.popularSection}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 24,
              marginRight: 24,
            }}>
            <Text style={styles.textStyle1}>Recommend for you</Text>
            <Text style={styles.textStyle3}>See All</Text>
          </View>
          <View style={styles.movieCards}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{gap: 12}}>
              <Image source={card1} />
              <Image source={card2} />
              <Image source={card3} />
            </ScrollView>
          </View>
        </View>
        {renderScreens()}     
    <View style={styles.bottomNavigation}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.navTab}>
          <Image source={home} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <View style={styles.activeNavTab}>
          <Image source={searchImg} />
          <Text style={[styles.textStyle3, {top: 0}]}>Search</Text>
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
  </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    flexDirection: 'row',
    //top: -100,
    bottom: 190,
    gap: 17,
    height: 72,
    marginTop: -520,
    backgroundColor: '#1F1D2B',
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
    width: 90,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#252836',
    borderRadius: 16,
  },
  window: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },

  textStyle1: {
    bottom: 55,
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  searchBar: {
    marginTop: 33,
    height: 41,
    borderRadius: 24,
    backgroundColor: '#252836',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
    marginRight: 24,
    paddingHorizontal: 24,
  },
  searchInput: {
    width: 239,
    color: '#92929D',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  categories: {
    justifyContent: 'space-between',
    marginLeft: 24,
    marginTop: 20,
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    marginTop: 14,
  },
  tab: {
    height: 31,
    color: '#EBEBEF',
    borderRadius: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  activeTab: {
    height: 31,
    color: '#12CDD9',
    backgroundColor: '#252836',
    borderRadius: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  popularSection: {
    marginTop: 75, ///
    marginBottom: 0,
  },
  textStyle3: {
    bottom: 55,
    color: '#12CDD9',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  movieCards: {
    bottom: 55,
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 0,
  },
  todaySection: {
    height: 183,
    justifyContent: 'space-between',
    marginLeft: 24,
    marginTop: 24,
  },
  premium: {
    backgroundColor: '#FF8700',
    color: '#fff',
    borderRadius: 6,
    width: 65,
    height: 20,
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  textStyle4: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#92929D',
  },
  pgStyle: {
    borderRadius: 3,
    width: 43,
    height: 20,
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#12CDD9',
    borderColor: '#12CDD9',
    borderWidth: 1,
  },
});
export default Search;
