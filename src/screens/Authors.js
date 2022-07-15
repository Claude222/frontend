import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import Button from '../components/Button'
const Authors = ({ navigatiton, image, title, auther, reads, type1, type2 }) => {
  // console.log("IMG", image);
  return (
    <View style={styles.main}>
        <Image 
        source={image}
        style={styles.img}/>
    <View style={{ width:'60%'}}>
    <Text style={styles.title}>{title}</Text>

      <View style={{ flexDirection:'row', width:'80%', justifyContent:'space-between', marginTop:10}}>
        <Button  width='45%' fontSize={10} fontWeight='700' color={colors.white} radius={10} title={type1} bg={ type1 === 'horror'&&'#A65EEA' || type1 === 'arts' && '#FC5C65'||  type1 === 'self-Help'&& '#FFCF87' || type1 ==='romatic'&&'#F8448F'}/>
        <Button  width='45%' fontSize={10} fontWeight='700' color={colors.white} radius={10} title={type2} bg={ type2 === 'fantasy'&&'#F7B731' || type2 === 'history' && '#FF7043'||  type2 === 'medical'&& '#2F80ED' || type2 ==='comic'&&'#616161'|| type2 === 'biographies' &&'#26DE81'}/>
      </View>
    </View>
    </View>
  )
}

export default Authors

const styles = StyleSheet.create({
    main:{
        // marginTop:10,
        padding:16,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%'
    },
    img:{
        width:'40%',
        resizeMode:'contain'
    },
    booktype:{
        backgroundColor:colors.orange
    },
    title:{
        fontSize:16,
        fontWeight:'600',
        color:colors.blacll,
        marginBottom:5,
        textTransform:'capitalize'
    },
})