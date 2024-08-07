import React, { useState } from 'react'
import { StatusBar, Text, View } from 'react-native';
import { TitleComponent } from '../src/components/TitleComponent';
import { PRIMARY_COLOR } from '../src/commons/contants';
import { BodyComponent } from '../src/components/BodyComponent';
import { styles } from '../home/StyleSheet';
import { ButoonComponent } from '../src/components/ButoonComponent';
import { InputComponent } from '../src/components/InputComponent';
import Snackbar from 'react-native-snackbar';

//interface objeto
interface Forlogin{
  email:string;
  password:string;
}


export const LoginScreen = () => {
  //manipular el estado del formulario
  const[forlogin,setForLogin]= useState<Forlogin>({
    email:'',
    password:''

  });
  //permite que se haga visibl y no visible la contraseña
  const [hiddenPassword,setHiddenPasword] = useState<boolean>(true);
  //actualizar el estado del formulario
  const handleSetValues = (name:string, value:string) =>{
  //Cambiar el estado del formulario
  //... operador de programacion crea una copia del objeto 
   setForLogin({...forlogin,[name]:value});

  }
  //Funcion para iniciar sesión
  const  handleSignIn = () =>{
    console.log(forlogin);
    Snackbar.show({
      text: 'Hello world',
      duration: Snackbar.LENGTH_SHORT,
    });
  }

  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
       <TitleComponent title='Iniciar Sesión' />

       <BodyComponent>
        <View>   
        <Text style={styles.titleHeaderBody}>Bienvenido de Nuevo!</Text>
        <Text style={styles.textBody}>Realiza tus compras de manera rápida y segura</Text>
        </View>

        <View style={styles.contentImput}>

        <InputComponent 
        placeholder='Correo'
         handleSetValue={handleSetValues}
          name='email'/>
        <InputComponent 
        placeholder='Contraseña' 
        handleSetValue={handleSetValues} 
        name='password'
        isPassword={hiddenPassword}
        hasIcon={true}
        setHiddenPasword={()=>setHiddenPasword(!hiddenPassword)}
        />
        </View>
        <ButoonComponent texButton='Iniciar' onPress={handleSignIn}/>
        
       </BodyComponent>
    </View>
  )
}
