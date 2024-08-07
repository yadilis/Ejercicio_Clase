import React from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { styles } from '../../home/StyleSheet';


export const BodyComponent = (props:any) => {
    //Hook
    const{height } =useWindowDimensions();
        return (
    <View style={{
        ...styles.contentBody,
        height:height*0.88  
     }} >
      {props.children}
    </View>

    )

    }

