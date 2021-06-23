
import React from 'react';
import { StyleSheet, Text, View, Image,TextInput,TouchableHighlight,Switch} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ViewHome from './ViewHOME';
import ViewContagio from './ViewCONTAGIO';
import ViewRegistro from './ViewRegistro';
import ViewAjustes from './ViewAJUSTES';
import ViewPortada from './ViewPortada';
import ViewDatos from './ViewDATOS';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ViewPortada">
      <Stack.Screen name="ViewPortada" component={ViewPortada} />
      <Stack.Screen name="ViewContagio" component={ViewContagio} />
      <Stack.Screen name="ViewRegistro" component={ViewRegistro} />
      <Stack.Screen name="ViewAjustes" component={ViewAjustes} />
      <Stack.Screen name="ViewHome" component={ViewHome} />
      <Stack.Screen name="ViewDatos" component={ViewDatos} />
      </Stack.Navigator>
    </NavigationContainer>

    
  );


}