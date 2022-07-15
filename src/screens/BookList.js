import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import book from '../assets/images/book1.png'
import colors from '../utils/colors'
import Button from '../components/Button'
const BookList = ({ navigatiton, image, title, auther, reads, type1, type2 }) => {
  // console.log("IMG", image);
  return (
    <View style={styles.main}>
        <Image 
        source={image}
        style={styles.img}/>
    <View style={{ width:'60%'}}>
    <Text style={styles.title}>{title}</Text>
      <Text style={styles.auther}>{auther}</Text>
      <Image style={{ alignSelf:'flex-end', marginRight:14}} source={require('../assets/images/dot.png')}/>
      <View style={{ flexDirection:'row', alignItems:'center'}}>
      <Image style={{marginRight:2.5}} source={require('../assets/images/eye.png')}/>
      <Text style={styles.reads}>{reads}</Text>
      </View>
      <View style={{ flexDirection:'row', width:'80%', justifyContent:'space-between'}}>
        <Button  width='45%' fontSize={10} fontWeight='700' color={colors.white} radius={10} title={type1} bg='#A65EEA'/>
        <Button  width='45%' fontSize={10} fontWeight='700' color={colors.white} radius={10} title={type2} bg='#F7B731'/>
        {/* <View style={styles.booktype}> </View>
        <View style={styles.booktype}> </View> */}
      </View>
    </View>
    </View>
  )
}

export default BookList

const styles = StyleSheet.create({
    main:{
        marginTop:10,
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
    auther:{
        fontSize:10,
        fontWeight:'300',
        color:colors.greydark,
        marginBottom:10,
        textTransform:'capitalize'
    }
    ,
    reads:{
        fontSize:12,
        fontWeight:'600',
        color:colors.greydark,
        // marginBottom:5
    }
})