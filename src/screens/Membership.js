import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
// import {Icon} from '../assets/icons/Icon';
import BookList from './BookList';
import Feather from 'react-native-vector-icons/Feather'
const Membership = ({navigation}) => {
  let userImage = require('../assets/images/userr.png')
  return (
    <ScrollView style={{backgroundColor: colors.orange}}>
      <SafeAreaView style={styles.main}>
        {/* <View></View>
      <View style={{ paddingHorizontal:28}}> */}
        <View style={styles.topSection}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            style={styles.iconWrapper}>
            <Feather
              // type="feather"
              name="chevron-left"
              color={colors.white}
              size={20}
            />
          </TouchableOpacity>
          <View style={styles.rightIcons}>
            <TouchableOpacity onPress={()=>navigation.navigate('home')} activeOpacity={0.8} style={styles.iconWrapper}>
              <Feather  name="bell" color={colors.white} size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('home')} activeOpacity={0.8} style={styles.iconWrapper}>
              <Feather name="grid" color={colors.white} size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.userWrapper}>
          <View style={styles.imageWrapper}>
            <Image style={styles.img} source={ userImage}/>
            <View style={styles.badge}>
              <Image source={require('../assets/images/badge.png')} />
            </View>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.title}>Boadesigner96</Text>
            <View style={styles.readdata}>
              <View>
                <Text style={styles.number}>23</Text>
                <Text style={styles.readText}>Total Read </Text>
              </View>
              <View>
                <Text style={styles.number}>
                  1973 <Text style={styles.readText}>hr</Text>
                </Text>
                <Text style={styles.readText}>Total Reading</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.heading}>Reading Goals</Text>
        <View style={styles.goalWrapper}>
          <View style={styles.goalContainer}>
            <Text style={styles.readingTitle}>Today's Reading</Text>
            <Image
              style={{ position:'absolute', bottom:20, left:12}}
              source={require('../assets/images/bbg.png')}
            />
            <Image
              style={{position:'absolute', top:50, left:-8}}
              source={require('../assets/images/watch.png')}
            />
            <Text style={{fontSize: 22, fontWeight: '600', marginTop:110}}>
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
              style={{ position:'absolute', bottom:12, left:12}}
              source={require('../assets/images/bbg.png')}
            />
            <Image
              style={{ position:'absolute', top:48, right:-20}}
              source={require('../assets/images/trophy.png')}
            />
            <Text
              style={{fontSize: 22, fontWeight: '600', color: colors.orange, marginTop:90}}>
              {' '}
              16 Days
            </Text>
          </View>
        </View>
        <Text style={styles.heading}>Collections</Text>
        <View 
          style={{ width: '100%', alignItems: 'center', height: 330, backgroundColor:colors.white}}>
            <View
          style={{ width: '100%', alignItems: 'center', height: 330,  backgroundColor:colors.orange, borderBottomRightRadius:40}}>

          </View>
          <View
            style={{
              opacity: 0.4,
              borderRadius: 20,
              width: '86%',
              height: 124,
              backgroundColor: colors.white,
              position:'absolute'
            //   left:14,
            //   right:14
            }}></View>
          <View
            style={{
              opacity: 0.4,
              borderRadius: 20,
              width: '90%',
              height: 124,
              backgroundColor: colors.white,
              position: 'absolute',
              top: 8,
            //   left:14,
            //   right:14
            }}></View>
          <View 
            style={{
              borderRadius: 20,
              width: '90%',
              backgroundColor: colors.white,
              position: 'absolute',
              top: 14,
            //   left:14,
            //   right:14
            }}>
            <BookList
              image={ require('../assets/images/b1.png')}
              title="Olive, again"
              auther="Elizabeth Strout"
              reads={200}
              type1="Horror"
              type2="Fantasy"
            />
            <BookList
               image={ require('../assets/images/b2.png')}
              title="How much of these hills is gold"
              auther="By c pam"
              reads={200}
              type1="Horror"
              type2="Fantasy"
            />
          </View>
        </View>
      {/* </View> */}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 60,
          backgroundColor: colors.orange,
          borderTopLeftRadius: 40,
        }}>
             <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 60,
          backgroundColor: colors.white,
          borderTopLeftRadius: 40,
        }}></View>
        </View>
      </SafeAreaView>
    
    </ScrollView>
  );
};

export default Membership;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.orange,
    // paddingHorizontal: 28,
  },
  topSection: {
    // backgroundColor:'red',
    width: '100%',
    // height:40,
    marginTop: 54,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal:28
  },
  iconWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
  },
  userWrapper: {
    width: '100%',
    marginRight: 10,
    marginTop: 10,
    // backgroundColor:'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:28
  },
  imageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '96%',
    height: '96%',
    borderRadius: 100,
    resizeMode: 'cover',
    backgroundColor: 'red',
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -10,
    borderColor: colors.white,
    borderWidth: 2,
    // top:5
  },
  userInfo: {
    width: '60%',
    // backgroundColor:colors.black
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.white,
    marginTop: 10,
  },
  readdata: {
    flexDirection: 'row',
    
  },
  number: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.white,
  },
  readText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '400',
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: colors.white,
    marginVertical: 25,
    paddingHorizontal:28
  },
  goalWrapper: {
    //   backgroundColor:colors.orange,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:28
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
