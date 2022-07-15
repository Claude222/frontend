import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React,{ useState } from 'react';
import Button from '../components/Button';
import colors from '../utils/colors';


const Interest = ({navigation}) => {
const [ selectfirst, setSelectfirst ]=useState(false)
const [ selectsec, setSelectsec ]=useState(false)
const [ selectth, setSelecth ]=useState(false)
const [ selectft, setSelectft ]=useState(false)
const [ selectfv, setSelectfv ]=useState(false)
const [ selectse, setSelectse ]=useState(false)
const [ selectsv, setSelectsv ]=useState(false)
const [ selecteg, setSelecteg]= useState(false)
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <Text style={styles.interText}> Your Interests </Text>
        <Text style={styles.interDes}>
          Customize your interests so that you can discover your most favourite
          books.
        </Text>
        <View style={[styles.options, {marginTop: 16}]}>
          <Button
           onPress={()=> setSelectfirst(!selectfirst)}
            width="40%"
            title="Action"
            bg={ selectfirst === true? colors.orange: colors.grey}
            color={ selectfirst === true? colors.white : colors.black}
            radius={25}
            height={50}
          />
          <Button
            width="50%"
            onPress={()=> setSelectsec(!selectsec)}
            title="Adventure"
            bg={ selectsec === true? colors.orange: colors.grey}
            color={ selectsec === true? colors.white : colors.black}
            radius={25}
            ml={20}
            height={50}
          />
        </View>
        <View style={styles.options}>
          <Button
           onPress={()=> setSelecth(!selectth)}
            width="45%"
            title="Classic"
            bg={ selectth === true? colors.orange: colors.grey}
            color={ selectth === true? colors.white : colors.black}
            radius={25}
            height={50}
          />
          <Button
           onPress={()=> setSelectft(!selectft)}
            width="55%"
            title="Comic Book"
            bg={ selectft === true? colors.orange: colors.grey}
            color={ selectft === true? colors.white : colors.black}
            radius={25}
            ml={16}
            height={50}
          />
        </View>
        <View style={styles.options}>
          <Button
           onPress={()=> setSelectfv(!selectfv)}
            width="70%"
            title="Detective and Mystery"
            bg={ selectfv === true? colors.orange: colors.grey}
            color={ selectfv === true? colors.white : colors.black}
            radius={25}
            height={50}
          />
        </View>
        <View style={styles.options}>
          <Button
           onPress={()=> setSelectse(!selectse)}
            width="55%"
            title="Historical function"
            bg={ selectse === true? colors.orange: colors.grey}
            color={ selectse === true? colors.white : colors.black}
            radius={25}
            height={50}
          />
          <Button
          onPress={()=> setSelectsv(!selectsv)}
            width="45%"
            title="Horror"
            bg={ selectsv === true? colors.orange: colors.grey}
            color={ selectsv === true? colors.white : colors.black}
            radius={25}
            ml={16}
            height={50}
          />
        </View>
        <View style={styles.options}>
          <Button
        
           onPress={()=> setSelecteg(!selecteg)}
            width="50%"
            title="Litrary fiction"
            bg={ selecteg === true? colors.orange: colors.grey}
            color={ selecteg === true? colors.white : colors.black}
            radius={25}
            height={50}
          />
        </View>
        <Image
          style={styles.img}
          source={require('../assets/images/bg.png')}
        />
        <View style={styles.btn}>
          <Button
            onPress={() => navigation.navigate('verfication')}
            title="Done!"
            color={colors.white}
            bg={colors.orange}
            radius={20}
            height={60}
            width="90%"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Interest;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  interText: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '700',
    marginTop: 48,
    color:"black"
  },
  interDes: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 3,
    lineHeight:18,
  },
  options: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 10,
    zIndex:1
  },
  img: {
    width: '100%',
    resizeMode: 'cover',
    marginTop: -80,
    marginBottom: -60,
    // backgroundColor:'red',
   
  },
  btn: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
});
