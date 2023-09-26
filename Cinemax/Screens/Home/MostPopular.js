import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MostPopular = () => {
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = React.useState(1);
  const back = require('../../assets/Back.png');
  const img1 = require('../../assets/Image1.png');
  const img2 = require('../../assets/Image2.png');
  const img3 = require('../../assets/Image3.png');
  const img4 = require('../../assets/Image4.png');
  const img5 = require('../../assets/Image5.png');
  const calendar = require('../../assets/calendar.png');
  const clock = require('../../assets/clock.png');
  const film = require('../../assets/film.png');
  const vector = require('../../assets/Vector1.png');

  return (
    <View style={styles.window}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={back} style={{width: 32, height: 32}} />
          </TouchableOpacity>
          <Text style={styles.title}>Most Popular Movie</Text>
        </View>
        <View style={{gap: 16, marginTop: 30, marginBottom: 30}}>
          <View style={styles.movieContainer}>
            <Image source={img1} />
            <View style={{gap: 12}}>
              <Text style={styles.premium}>Premium</Text>
              <Text style={styles.textStyle1}>Spider-Man No Way..</Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={calendar} />
                <Text style={styles.textStyle2}>2021</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={clock} />
                <Text style={styles.textStyle2}>148 Minutes</Text>
                <Text style={styles.pgStyle}>PG-13</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={film} />
                <Text style={styles.textStyle2}>Action</Text>
                <Image source={vector} />
                <Text style={[styles.textStyle2, {color: '#fff'}]}>Movie</Text>
              </View>
            </View>
          </View>
          <View style={styles.movieContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SerialDetails')}>
              <Image source={img2} />
            </TouchableOpacity>
            <View style={{gap: 12}}>
              <Text style={[styles.premium, {backgroundColor: '#12CDD9'}]}>
                Free
              </Text>
              <Text style={styles.textStyle1}>Riverdale</Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={calendar} />

                <Text style={styles.textStyle2}>2021</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={clock} />
                <Text style={styles.textStyle2}>148 Minutes</Text>
                <Text style={styles.pgStyle}>PG-13</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={film} />
                <Text style={styles.textStyle2}>Action</Text>
                <Image source={vector} />
                <Text style={[styles.textStyle2, {color: '#fff'}]}>Movie</Text>
              </View>
            </View>
          </View>
          <View style={styles.movieContainer}>
            <Image source={img3} />
            <View style={{gap: 12}}>
              <Text style={styles.premium}>Premium</Text>
              <Text style={styles.textStyle1}>Life of PI</Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={calendar} />
                <Text style={styles.textStyle2}>2021</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={clock} />
                <Text style={styles.textStyle2}>148 Minutes</Text>
                <Text style={styles.pgStyle}>PG-13</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={film} />
                <Text style={styles.textStyle2}>Action</Text>
                <Image source={vector} />
                <Text style={[styles.textStyle2, {color: '#fff'}]}>Movie</Text>
              </View>
            </View>
          </View>
          <View style={styles.movieContainer}>
            <Image source={img4} />
            <View style={{gap: 12}}>
              <Text style={styles.premium}>Premium</Text>
              <Text style={styles.textStyle1}>Movie Dotcase</Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={calendar} />
                <Text style={styles.textStyle2}>2021</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={clock} />
                <Text style={styles.textStyle2}>148 Minutes</Text>
                <Text style={styles.pgStyle}>PG-13</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={film} />
                <Text style={styles.textStyle2}>Action</Text>
                <Image source={vector} />
                <Text style={[styles.textStyle2, {color: '#fff'}]}>Movie</Text>
              </View>
            </View>
          </View>
          <View style={styles.movieContainer}>
            <Image source={img5} />
            <View style={{gap: 12}}>
              <Text style={[styles.premium, {backgroundColor: '#12CDD9'}]}>
                Free
              </Text>
              <Text style={styles.textStyle1}>The Jungle Waiting</Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={calendar} />
                <Text style={styles.textStyle2}>2021</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={clock} />
                <Text style={styles.textStyle2}>148 Minutes</Text>
                <Text style={styles.pgStyle}>PG-13</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Image source={film} />
                <Text style={styles.textStyle2}>Action</Text>
                <Image source={vector} />
                <Text style={[styles.textStyle2, {color: '#fff'}]}>Movie</Text>
              </View>
            </View>
          </View>
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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    textAlign: 'center',
    width: '90%',
  },
  movieContainer: {
    height: 147,
    marginLeft: 24,
    marginRight: 24,
    flexDirection: 'row',
    gap: 16,
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
  textStyle1: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  textStyle2: {
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
export default MostPopular;
