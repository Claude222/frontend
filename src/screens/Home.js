import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import React from 'react';
import colors from '../utils/colors';
import Button from '../components/Button';
import BookList from './BookList';
import Authors from './Authors';
import { dh, dw} from '../utils/contants';


const Home = () => {
  const category = [
    {
      title: 'Arts',
      bg: 'pink',
      img: require('../assets/images/c1.png'),
    },
    {
      title: 'Biographies',
      bg: '#67DF81',
      img: require('../assets/images/c2.png'),
    },
    {
      title: 'Business',
      bg: 'yellow',
      img: require('../assets/images/c3.png'),
    },
    {
      title: 'Comic',
      bg: '#616161',
      img: require('../assets/images/c4.png'),
    },
    {
      title: 'Cooking',
      bg: '#59C06B',
      img: require('../assets/images/c5.png'),
    },
  ];
  const books = [
    {
      name: 'A Burning',
      auther: 'By megha majumdar',
      read: 1320,
      typeA: 'fantasy',
      typeB: 'travel',
      img: require('../assets/images/b1.png'),
    },
    {
      name: 'the immortalists',
      auther: 'By chloe benjamin',
      read: 1320,
      typeA: 'biographies',
      typeB: 'history',
      img: require('../assets/images/b2.png'),
    },
    {
      name: 'olive again',
      auther: 'elizbeth strout',
      read: 1320,
      typeA: 'horror',
      typeB: 'fantasy',
      img: require('../assets/images/b3.png'),
    },
    {
      name: 'How much of the hills is gold',
      auther: 'By c pam zhang',
      read: 1320,
      typeA: 'arts',
      typeB: 'kids',
      img: require('../assets/images/b4.png'),
    },
    {
      name: 'love in the time of cholera',
      auther: 'by gabriel garcia marquez',
      read: 132,
      typeA: 'horror',
      typeB: 'fantasy',
      img: require('../assets/images/b5.png'),
    },
  ];
  const authors = [
    {
      name: 'maria renzy',
      typeA: 'horror',
      typeB: 'fantasy',
      img: require('../assets/images/a1.png'),
    },
    {
      name: 'raunakPurohit',
      typeA: 'arts',
      typeB: 'history',
      img: require('../assets/images/a2.png'),
    },
    {
      name: 'masaa cerne',
      typeA: 'self-Hlep',
      typeB: 'medical',
      img: require('../assets/images/a3.png'),
    },
    {
      name: 'neil alvin',
      typeA: 'arts',
      typeB: 'comic',
      img: require('../assets/images/a4.png'),
    },
    {
      name: 'yza barretto',
      typeA: 'romatic',
      typeB: 'biographies',
      img: require('../assets/images/a5.png'),
    },
  ];
  let userImage = require('../assets/images/users.png');

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
        style={{width: '100%'}}>
        <View
          style={{width: '100%', height: 140, backgroundColor: colors.white}}>
          <View
            style={{
              width: '100%',
              height: 140,
              backgroundColor: colors.orange,
              borderBottomRightRadius: 40,
            }}>
            <View style={styles.topSection}>
              <View
                style={{
                  flexDirection: 'row',
                  // width: '52%',
                  // justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={styles.imageWrapper}>
                  <Image style={styles.img} source={userImage} />
                  <View style={styles.badge}></View>
                </View>
                <View style={{ marginLeft: 10}} >
                  <Text style={styles.greeting}>Hi.</Text>
                  <Text style={styles.userName}>Boadesigner96</Text>
                </View>
              </View>
              <View style={styles.bookWrapper}>
                <Image
                  source={require('../assets/images/bookwithnumber.png')}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{width: '100%', height: 240, backgroundColor: colors.orange}}>
          <View
            style={{
              width: '100%',
              height: 240,
              backgroundColor: colors.white,
              borderTopLeftRadius: 40,
              borderBottomLeftRadius: 40,
              // justifyContent:'center',
              // alignItems:'center'
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#6B6B6B',
                marginTop: 20,
                marginLeft: 33,
                fontWeight: '700',
              }}>
              Keep Reading
            </Text>
            <View
              style={{
                width: '84%',
                backgroundColor: colors.orange,
                opacity: 0.8,
                height: 140,
                borderRadius: 25,
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 22,
              }}>
              <Image
                style={{marginTop: 18, marginLeft: 10}}
                source={require('.././assets/images/mbook.png')}
              />
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.white,
                    fontWeight: 'bold',
                    marginTop: 15,
                    marginLeft: 17,
                  }}>
                  Dune
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.white,
                    lineHeight: 18,
                    marginTop: 6,
                    marginLeft: 17,
                  }}>
                  By Farank Herbert
                </Text>
                <AnimatedCircularProgress
                style={{ marginTop:16, marginLeft:16}}
                rotation={-6}
                  size={43}
                  width={4}
                  fill={62}
                  tintColor={ colors.white}
                  onAnimationComplete={() => console.log('onAnimationComplete')}
                  backgroundColor="rgba(0, 0, 0, 0.65)"
                />
                <Text style={{ bottom:dh /23, position:'absolute', fontSize:12, left:26, color:colors.white, fontWeight:'bold'}}>62%</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{width: '100%', height: 160, backgroundColor: colors.white}}>
          <View
            style={{
              width: '100%',
              height: 160,
              backgroundColor: colors.orange,
              borderTopRightRadius: 40,
              borderBottomRightRadius: 40,
            }}>
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 18,
              }}>
              <Text
                style={{fontSize: 16, fontWeight: '700', color: colors.white}}>
                Category
              </Text>
              <Button
                title="View all"
                color={colors.orange}
                bg={colors.white}
                radius={20}
                width="26%"
              />
            </View>
            <ScrollView
              style={{marginLeft: 10}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {category.map((v, i) => (
                <View
                  key={i}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 10,
                  }}>
                  <View
                    style={{
                      width: 62,
                      height: 62,
                      borderRadius: 16,
                      backgroundColor: v.bg,
                    }}>
                    <Image source={v.img} />
                  </View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '700',
                      color: colors.white,
                    }}>
                    {v.title}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
        <View
          style={{width: '100%', height: 700, backgroundColor: colors.orange}}>
          <View
            style={{
              width: '100%',
              height: 700,
              backgroundColor: colors.white,
              borderTopLeftRadius: 40,
              borderBottomLeftRadius: 40,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#6B6B6B',
                marginTop: 20,
                marginLeft: 33,
                fontWeight: '700',
              }}>
              Trending Book
            </Text>

            {books.map((v, i) => (
              <BookList
                key={i}
                image={v.img}
                title={v.name}
                auther={v.auther}
                reads={v.read}
                type1={v.typeA}
                type2={v.typeB}
              />
            ))}
          </View>
        </View>
        <View
          style={{width: '100%', height: 600, backgroundColor: colors.white}}>
          <View
            style={{
              width: '100%',
              height: 600,
              backgroundColor: colors.orange,
              borderTopRightRadius: 40,
              borderBottomRightRadius: 40,
            }}>
            <Text style={styles.heading}>Popular Authors </Text>
            {authors.map((v, i) => (
              <Authors
                key={i}
                title={v.name}
                image={v.img}
                type1={v.typeA}
                type2={v.typeB}
              />
            ))}
            </View>
        </View>
        <View
          style={{width: '100%', height: 700, backgroundColor: colors.orange}}>
          <View
            style={{
              width: '100%',
              height: 700,
              backgroundColor: colors.white,
              borderTopLeftRadius: 40,
              borderBottomLeftRadius: 40,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#6B6B6B',
                marginTop: 20,
                marginLeft: 33,
                fontWeight: '700',
              }}>
              Trending Book
            </Text>

            {books.map((v, i) => (
              <BookList
                key={i}
                image={v.img}
                title={v.name}
                auther={v.auther}
                reads={v.read}
                type1={v.typeA}
                type2={v.typeB}
              />
            ))}
          </View>
        </View>
        <View
          style={{width: '100%', height: 400, backgroundColor: colors.white}}>
          <View
            style={{
              width: '100%',
              height: 400,
              backgroundColor: colors.orange,
              borderTopRightRadius: 40,
              borderBottomRightRadius: 40,
            }}>
            <Text style={styles.heading}>Reading Goals</Text>
            <View style={styles.goalWrapper}>
              <View style={styles.goalContainer}>
                <Text style={styles.readingTitle}>Today's Reading</Text>
                <Image
                  style={{position: 'absolute', bottom: 20, left: 12}}
                  source={require('../assets/images/bbg.png')}
                />
                <Image
                  style={{position: 'absolute', top: 50, left: -8}}
                  source={require('../assets/images/watch.png')}
                />
                <Text style={{fontSize: 22, fontWeight: '600', marginTop: 110}}>
                  {' '}
                  10
                  <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                    {' '}
                    of 40 minutes{' '}
                  </Text>
                </Text>
              </View>
              <View style={styles.goalContainer}>
                <Text style={styles.readingTitle}>Longest Reading Streak</Text>
                <Image
                  style={{position: 'absolute', bottom: 12, left: 18}}
                  source={require('../assets/images/bbg.png')}
                />
                <Image
                  style={{position: 'absolute', top: 48, right: -20}}
                  source={require('../assets/images/trophy.png')}
                />
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '600',
                    color: colors.orange,
                    marginTop: 90,
                  }}>
                  {' '}
                  16 Days
                </Text>
              </View>
              {/* <View style={styles.goalContainer}>
                <Text style={styles.readingTitle}>Today's Reading</Text>
                <Image
                  style={styles.img}
                  source={require('../assets/images/watch.png')}
                />
                <Text style={{fontSize: 22, fontWeight: '600',  position:'absolute', bottom:10,left:8}}>
                  {' '}
                  10
                  <Text style={{fontSize: 10, fontWeight: 'bold',}}>
                    {' '}
                    of 40 minutes{' '}
                  </Text>
                </Text>
              </View>
              <View style={styles.goalContainer}>
                <Text style={styles.readingTitle}>Longest Reading Streak</Text>
                <Image
                  style={styles.img}
                  source={require('../assets/images/watch.png')}
                />
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '600',
                    color: colors.orange,
                    position:'absolute', bottom:6,left:8
                  }}>
                  {' '}
                  16 Days
                </Text>
              </View> */}
            </View>
            <Button
              title="Keep Reading"
              radius={10}
              bg={colors.white}
              color="#6B6B6B"
              height={64}
              width="90%"
              mt={20}
            />
          </View>
        </View>
        <View
          style={{width: '100%', height: 950, backgroundColor: colors.orange}}>
          <View
            style={{
              width: '100%',
              height: 950,
              backgroundColor: colors.white,
              borderTopLeftRadius: 40,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#6B6B6B',
                marginTop: 20,
                marginLeft: 33,
                fontWeight: '700',
              }}>
              More book for you
            </Text>

            {books.map((v, i) => (
              <BookList
                key={i}
                image={v.img}
                title={v.name}
                auther={v.auther}
                reads={v.read}
                type1={v.typeA}
                type2={v.typeB}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.orange,
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  topSection: {
    // height:'22%',
    width: '80%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor:'green',
    marginTop: 40,

    // marginBottom:40
  },
  imageWrapper: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '96%',
    height: '96%',
    borderRadius: 16,
    resizeMode: 'cover',
    backgroundColor: 'red',
  },
  badge: {
    width: 10,
    height: 10,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: -3,
    borderColor: colors.white,
    borderWidth: 2,
    // top:5
  },
  greeting: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  userName: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  bookWrapper: {
    width: '24%',
    height: 20,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: colors.white,
    marginVertical: 25,
    marginLeft: 20,
  },
  goalWrapper: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  goalContainer: {
    height: 198,
    width: '45%',
    borderRadius: 25,
    padding: 10,
    backgroundColor: colors.white,
  },
  readingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6B6B6B',
  },
  img: {
    // backgroundColor:'red',
    width: '100%',
    resizeMode: 'contain',
    marginTop: -20,
    marginBottom: -20,
  },
});
