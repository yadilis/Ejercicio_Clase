import React from 'react'
import { ImageBackground, TextInput, View } from 'react-native'
import { INPUT_COLOR } from '../commons/contants'
import { styles } from '../../home/StyleSheet';
import Icon from 'react-native-vector-icons/MaterialIcons';
//INTERFACE DE PROPS
interface Props{
    placeholder:string;
    handleSetValue: (name:string, value:string) => void;
    name:string;
    isPassword?:boolean;
    hasIcon?:boolean;
    setHiddenPasword?:() => void;  //prop de funcion
}

export const InputComponent = ({placeholder,handleSetValue,name,isPassword=false,hasIcon=false ,setHiddenPasword }:Props) => {
  
  return (
    <View>
       {
        (hasIcon)
       ?
        <Icon name='visibility'
      size={25}
      onPress={setHiddenPasword}
      style={styles.iconPassword}/>
      :null

      }
     
      <TextInput
        placeholder={placeholder}
        keyboardType='default'
        onChangeText={(value) => handleSetValue(name,value)}
        secureTextEntry={isPassword}
        style={styles.imputText}
      /> 
      </View>
  );
}
