import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../../home/StyleSheet'
import { Text } from 'react-native'
interface Props {
    texButton:string;
    onPress:() => void;
}


export const ButoonComponent = ({texButton,onPress}:Props) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={styles.button}>
        <Text style={styles.buttonTex}>{texButton}</Text>
        
    </TouchableOpacity>
  )
}
