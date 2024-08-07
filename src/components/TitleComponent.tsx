import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { styles } from '../../home/StyleSheet';
//interface
interface Props{
    title:string;
}

export const TitleComponent = ({title}:Props) => {
    const{height} =useWindowDimensions();
  return (
     <Text style={{
        ...styles.globalTitle,
        height:height * 0.12

     }}>{title}</Text>
  )
}
