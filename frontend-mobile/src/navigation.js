import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';

import {LoginScreen} from './screens/LogIn';
import {HomeScreen} from './screens/Home';
import {AulasScreen} from './screens/Aulas';


const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
          
        <Stack.Screen name="Inicial" component={HomeScreen} />

        <Stack.Screen name="Matematica" component={AulasScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
