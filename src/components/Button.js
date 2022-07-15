import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

const Button = ({ title, onPress, width , height, bg , radius , color ,ml, mt, fontSize, fontWeight}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[styles.main,  {height, width, backgroundColor: bg, borderRadius:radius, marginLeft:ml, marginTop:mt }]}>
      <Text style={[styles.btnText, { color, fontSize, fontWeight }]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    main:{
        width:'100%',
        height:60,
        backgroundColor:colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        alignSelf:'center',
        // paddingHorizontal:2,
    },
    btnText:{
        color:colors.blacll,
        fontSize:14,
        fontWeight:'700'

    }
})