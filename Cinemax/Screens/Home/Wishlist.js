import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
//import {useNavigation} from '@react-navigation/native';

const Wishlist = () => {
  const back = require('../../assets/Back.png');
  const img = require('../../assets/WishlistImg.png');
  const folder = require('../../assets/wishlist.png');
  const heart = require('../../assets/heart.png');
  const rate = require('../../assets/Rate.png');


  const [wishlist, setWishlist] = React.useState(1);

  return (
    <View style={styles.window}>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={back} />
          </TouchableOpacity>
          <Text style={styles.title}>Wishlist</Text>
          <View style={{width: 24, height: 24}} />
        </View>
        {wishlist !== 0 ? (
          <View>
            <View style={styles.card}>
              <Image source={img} />
              <View style={{gap: 8}}>
                <Text style={styles.textStyle1}>Action</Text>
                <Text style={styles.textStyle2}>Spider-Man No Way Home</Text>
                <View style={styles.container1}>
                  <View style={styles.container2}>
                    <Text style={styles.textStyle3}>Movie</Text>
                    <Image source={rate} />
                  </View>
                  <Image source={heart} />
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <Image source={img} />
              <View style={{gap: 8}}>
                <Text style={styles.textStyle1}>Action</Text>
                <Text style={styles.textStyle2}>Spider-Man No Way Home</Text>
                <View style={styles.container1}>
                  <View style={styles.container2}>
                    <Text style={styles.textStyle3}>Movie</Text>
                    <Image source={rate} />
                  </View>
                  <Image source={heart} />
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <Image source={img} />
              <View style={{gap: 8}}>
                <Text style={styles.textStyle1}>Action</Text>
                <Text style={styles.textStyle2}>Spider-Man No Way Home</Text>
                <View style={styles.container1}>
                  <View style={styles.container2}>
                    <Text style={styles.textStyle3}>Movie</Text>
                    <Image source={rate} />
                  </View>
                  <Image source={heart} />
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <Image source={folder} />
            <Text style={styles.title}>There is no movie yet!</Text>
            <Text style={[styles.textStyle3, {textAlign: 'center'}]}>
              Find your movie by Type title, categories, years, etc{' '}
            </Text>
          </View>
        )}
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
  textStyle1: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#EBEBEF',
  },
  textStyle2: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#fff',
    width: 166,
  },
  textStyle3: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#92929D',
  },
  card: {
    height: 107,
    backgroundColor: '#252836',
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 16,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
    paddingLeft: 24,
  },
  container: {
    height: 164,
    width: 252,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 169,
    flex: 1,
    gap: 16,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container2: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});

export default Wishlist;
