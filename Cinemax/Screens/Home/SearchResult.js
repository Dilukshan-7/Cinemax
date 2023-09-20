  return (
        <>
          <View style={styles.searchBar1}>
            <Image source={searchImg} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search a title..."
              placeholderTextColor="#92929D"
              value={search}
              onChangeText={handleSearch}
            />
            <TouchableOpacity onPress={() => setSearch('')}>
              <Text
                style={{
                  //fontFamily: 'Montserrat-Medium',
                  fontSize: 12,
                  color: '#EBEBEF',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{gap: 16, marginTop: 30, marginBottom: 30}}>
            <View style={styles.movieContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('MovieDetails')}>
              <Image source={image1} />
              </TouchableOpacity>
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
                  <Text style={[styles.textStyle2, {color: '#fff'}]}>
                    Movie
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.movieContainer}>
             
                <Image source={image2} />
              <View style={{gap: 12}}>
                <Text style={[styles.premium, {backgroundColor: '#12CDD9'}]}>
                  Free
                </Text>
                <Text style={styles.textStyle1}>Riverabdale</Text>
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
                  <Text style={[styles.textStyle2, {color: '#fff'}]}>
                    Movie
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.movieContainer}>
              <Image source={image3} />
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
                  <Text style={[styles.textStyle2, {color: '#fff'}]}>
                    Movie
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.movieContainer}>
              <Image source={image4} />
              <View style={{gap: 12}}>
                <Text style={styles.premium}>Premium</Text>
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
                  <Text style={[styles.textStyle2, {color: '#fff'}]}>
                    Movie
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </>
      );