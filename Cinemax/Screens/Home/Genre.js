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

const Genre = () => {
  const back = require('../../assets/Back.png');
  const emptyRadio = require('../../assets/Radio1.png');
  const radio = require('../../assets/Radio2.png');
  const img1 = require('../../assets/GenreImg1.png');
  const img2 = require('../../assets/GenreImg2.png');
  const img3 = require('../../assets/GenreImg3.png');
  const img4 = require('../../assets/GenreImg4.png');
  const img5 = require('../../assets/iGenreImg5.png');
  const img6 = require('../../assets/GenreImg6.png');
  const img7 = require('../../assets/GenreImg7.png');
  const img8 = require('../../assets/GenreImg8.png');

  const navigation = useNavigation();

  const [genre, setGenre] = React.useState('Action');

  return (
    <View style={styles.window}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={back} />
          </TouchableOpacity>
          <Text style={styles.title}>Genre</Text>
          <View style={{width: 24, height: 24}} />
        </View>
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image source={img1} style={styles.image} />
              {genre === 'Action' ? (
                <TouchableOpacity>
                  <Image source={radio} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setGenre('Action')}>
                  <Image source={emptyRadio} />
                </TouchableOpacity>
              )}
              <Text style={styles.textStyle1}>Action</Text>
            </View>
            <View style={styles.card}>
              <Image source={img2} style={styles.image} />
              {genre === 'Horror' ? (
                <TouchableOpacity>
                  <Image source={radio} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setGenre('Horror')}>
                  <Image source={emptyRadio} />
                </TouchableOpacity>
              )}
              <Text style={styles.textStyle1}>Horror</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image source={img3} style={styles.image} />
              {genre === 'Fantasy' ? (
                <TouchableOpacity>
                  <Image source={radio} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setGenre('Fantasy')}>
                  <Image source={emptyRadio} />
                </TouchableOpacity>
              )}
              <Text style={styles.textStyle1}>Fantasy</Text>
            </View>
            <View style={styles.card}>
              <Image source={img4} style={styles.image} />
              {genre === 'Anime' ? (
                <TouchableOpacity>
                  <Image source={radio} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setGenre('Anime')}>
                  <Image source={emptyRadio} />
                </TouchableOpacity>
              )}
              <Text style={styles.textStyle1}>Anime</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image source={img5} style={styles.image} />
              {genre === 'Romance' ? (
                <TouchableOpacity>
                  <Image source={radio} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setGenre('Romance')}>
                  <Image source={emptyRadio} />
                </TouchableOpacity>
              )}
              <Text style={styles.textStyle1}>Romance</Text>
            </View>
            <View style={styles.card}>
              <Image source={img6} style={styles.image} />
              {genre === 'Sci-fi' ? (
                <TouchableOpacity>
                  <Image source={radio} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setGenre('Sci-fi')}>
                  <Image source={emptyRadio} />
                </TouchableOpacity>
              )}
              <Text style={styles.textStyle1}>Sci-fi</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image source={img7} style={styles.image} />
              {genre === 'Comedy' ? (
                <TouchableOpacity>
                  <Image source={radio} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setGenre('Comedy')}>
                  <Image source={emptyRadio} />
                </TouchableOpacity>
              )}
              <Text style={styles.textStyle1}>Comedy</Text>
            </View>
            <View style={styles.card}>
              <Image source={img8} style={styles.image} />
              {genre === 'Adventures' ? (
                <TouchableOpacity>
                  <Image source={radio} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setGenre('Adventures')}>
                  <Image source={emptyRadio} />
                </TouchableOpacity>
              )}
              <Text style={styles.textStyle1}>Adventures</Text>
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
    height: 368,
    alignSelf: 'center',
    gap: 17,
  },
  cardContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 17,
  },
  card: {
    width: 155,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    gap: 10,
  },
  image: {
    position: 'absolute',
  },
  textStyle1: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#fff',
  },
});

export default Genre;
