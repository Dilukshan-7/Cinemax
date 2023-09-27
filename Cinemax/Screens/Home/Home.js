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
          <Text style={styles.textStyle3}>Home</Text>
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

const Home = () => {
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = React.useState(1);
  const avatar = require('../../assets/Avatar.png');
  const heart = require('../../assets/heart.png');
  const searchImg = require('../../assets/search.png');
  const vector = require('../../assets/Vector1.png');
  const filter = require('../../assets/filter.png');
  const img1 = require('../../assets/movieImg1.png');
  const img2 = require('../../assets/movieImg2.png');
  const img3 = require('../../assets/movieImg3.png');
  const slider = require('../../assets/Slider2.png');
  const card1 = require('../../assets/Card1.png');
  const card2 = require('../../assets/Card2.png');
  const card3 = require('../../assets/Card3.png');

  const changeTab = tab => {
    setActiveTab(tab);
  };

  const [search, setSearch] = React.useState('');

  const handleSearch = text => {
    setSearch(text);
  };

  const renderScreens = () => {
      return (
        <>
          <View style={styles.header}>
            <View
              style={{width: 254, height: 40, flexDirection: 'row', gap: 15}}>
              <Image source={avatar} />
              <View>
                <Text style={styles.textStyle1}>Hello, Smith</Text>
                <Text style={styles.textStyle2}>
                  Let's stream your favorite movie
                </Text>
              </View>
            </View>
            <Image source={heart} />
          </View>
          <View style={styles.searchBar}>
            <Image source={searchImg} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search a title..."
              placeholderTextColor="#92929D"
              value={search}
              onChangeText={handleSearch}
            />
            <Image source={vector} />
            <Image source={filter} />
          </View>
          <View style={styles.movieSlider}>
            <ScrollView
              horizontal
              contentContainerStyle={{
                height: 166,
                gap: 12,
                marginLeft: 24,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={img1} />
              <Image source={img2} />
              <Image source={img3} />
            </ScrollView>
          </View>
          <Image source={slider} style={{alignSelf: 'center', width: 80}} />
          <View style={styles.categories}>
            <Text style={styles.textStyle1}>Categories</Text>
            <ScrollView
              horizontal
              contentContainerStyle={{flexDirection: 'row'}}
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
          <View style={styles.popularSection}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 24,
                marginRight: 24,
              }}>
              <Text style={styles.textStyle1}>Most Popular</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('MostPopular')}>
                <Text style={styles.textStyle3}>See All</Text>
              </TouchableOpacity>
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
          <View style={[styles.popularSection, {marginBottom: 50}]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 24,
                marginRight: 24,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('UpcomingMovie')}>
                <Text style={[styles.textStyle3, {right: 5}]}>Upcoming Movies</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      );
    //}
  };
  return (
    <View style={styles.window}>
      <ScrollView>{renderScreens()}</ScrollView>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: 'center', // Center the content horizontally
  },
  imageContainer: {
    marginHorizontal: 12, 
  },
  image: {
    resizeMode: 'cover',
  },
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
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    gap: 45,
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24,
  },
  textStyle1: {
    color: '#fff',
    fontSize: 16,
  },
  textStyle2: {
    color: '#92929D',
    fontFamily: 'Montserrat',
    fontSize: 12,
  },
  searchBar: {
    marginTop: 33,
    height: 41,
    borderRadius: 24,
    backgroundColor: '#252836',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24,
    paddingHorizontal: 24,
  },
  searchBar1: {
    width: 276,
    marginTop: 33,
    height: 41,
    borderRadius: 24,
    backgroundColor: '#252836',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
    marginRight: 24,
    paddingLeft: 24,
    gap: 10,
  },
  searchInput: {
    width: 239,
    color: '#fff',
    fontFamily: 'Montserrat',
    fontSize: 14,
  },
  movieSlider: {
    marginTop: 32,
    marginBottom: 12,
  },
  categories: {
    height: 74,
    justifyContent: 'space-between',
    marginLeft: 24,
    marginTop: 24,
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
  popularSection: {
    marginTop: 21,
  },
  textStyle3: {
    color: '#12CDD9',
    fontFamily: 'Montserrat',
    fontSize: 14,
  },
  movieCards: {
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 24,
  },
  movieContainer: {
    height: 147,
    marginLeft: 24,
    marginRight: 24,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  premium: {
    backgroundColor: '#FF8700',
    color: '#fff',
    borderRadius: 6,
    width: 65,
    height: 20,
    fontFamily: 'Montserrat',
    fontSize: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  pgStyle: {
    borderRadius: 3,
    width: 43,
    height: 20,
    fontFamily: 'Montserrat',
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#12CDD9',
    borderColor: '#12CDD9',
    borderWidth: 1,
  },
  container: {
    height: 190,
    width: 252,
    gap: 16,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '50%',
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    width: 188,
  },
});
export default Home;
