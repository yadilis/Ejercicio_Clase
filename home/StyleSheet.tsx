import React from 'react'
import { StyleSheet } from 'react-native'
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../src/commons/contants'

 export const styles =StyleSheet.create ({
    globalTitle:{
        color:SECUNDARY_COLOR,
        fontSize:27,
        paddingHorizontal:30,
        paddingVertical:30,
        fontWeight:'bold'
    },
   contentBody:{
    backgroundColor:SECUNDARY_COLOR,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingHorizontal:40,
    paddingTop:40,


   },
   titleHeaderBody:{
    fontSize:18,
    fontWeight:'bold',
    color:'black'


   },
   textBody:{
    fontSize:15
   },
   imputText:{

    backgroundColor:'#cdb2a2',
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius:10
   },
   contentImput:{
    marginTop:20,
    gap:10
   },
   button:{
    backgroundColor:PRIMARY_COLOR,
    paddingVertical:15,
    borderRadius:10,
    marginTop:30
   },
   buttonTex:{
    color:SECUNDARY_COLOR,
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center'
   },
   iconPassword:{
    position:'absolute',
    right:20,
    zIndex:1,
    marginTop:10
   }


 });
  
