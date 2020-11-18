import * as React from 'react';
import { Button, Text, View, ImageBackground, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Motos from './Componentes/Motos/index';
import PecasYa from './Componentes/Pecas/index';
import VestuYa from './Componentes/Vestuario/index';

import Style from './Estilo/styleinicial';

const image = { uri: "https://i.pinimg.com/564x/7d/5e/36/7d5e360544b7b24c726879f477018c8b.jpg" };


// Primeira tela do App

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={image} style={Style.image}>
      <Text style={Style.text}>Inside</Text>
      <View style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>

        <View style={{
          width: 150, height: 150, backgroundColor: 'steelblue' }}/>


        <Text style={Style.title}>
          The title and onPress handler are required. It is recommended to set accessibilityLabel
          to help make your app usable by everyone.
      </Text>
        <Button
          title="Ver mais"
          onPress={() => Alert.alert('Disponível nas próximas versões')}
        />
      </View>
    </ImageBackground>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function InicialYa() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: '#f00' }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Peças"
        component={PecasYa}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          ),
          tabBarLabel: 'Peças',

        }}></Tab.Screen>
      <Tab.Screen
        name="Motos"
        component={Motos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="motorbike" color={color} size={size} />
          ),
          tabBarLabel: 'Motos',
        }}></Tab.Screen>
      <Tab.Screen
        name="vestuário"
        component={VestuYa}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="human" color={color} size={size} />
          ),
          tabBarLabel: 'vestuário',
        }}></Tab.Screen>
    </Tab.Navigator>
  );

}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="Yamaha" component={InicialYa} />
        <Stack.Screen name="Motos" component={Motos} />
        <Stack.Screen name="Peças" component={PecasYa} />
        <Stack.Screen name="Vestuario" component={VestuYa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

