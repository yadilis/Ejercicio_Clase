import 'react-native-gesture-handler';
import React from 'react';
import { LoginScreen } from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigaitor/StackNavigator';

 const App = () => {
  return (
 <NavigationContainer>
   <StackNavigator/>
 </NavigationContainer>
     
  
  );
}
export default App;