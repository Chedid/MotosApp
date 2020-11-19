import * as React from 'react';
import { Button, Text, View, ImageBackground, StyleSheet, Alert, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Motos from './Componentes/Motos/index';
import PecasYa from './Componentes/Pecas/index';
import VestuYa from './Componentes/Vestuario/index';

import Style from './Estilo/styleinicial';
import CardNovidades from './Componentes/CardNovidades';
// Primeira tela do App

function HomeScreen({ navigation }) {
  return (
    <CardNovidades
      img="http://motonewsbrasil.com/wp-content/uploads/2020/11/yamaha-ya-1-red-dragonfly-replica-1-1200x800.jpg"
      titulo="Yamaha do Brasil cria uma réplica da YA-1 Red Dragonfly, sua 1ª moto"
      descricao="A Yamaha Motor do Brasil criou uma réplica da sua primeira moto do mundo, a YA-1 Red Dragonfly, em comemoração aos 50 anos da marca no nosso país."
      preco="R$25.490"
      proposta="36x de 720,00"
    ></CardNovidades>
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
        <Stack.Screen name="Yamaha" component={InicialYa} /*options={{headerShown: false}}*/ />
        <Stack.Screen name="Motos" component={Motos} />
        <Stack.Screen name="Peças" component={PecasYa} />
        <Stack.Screen name="Vestuario" component={VestuYa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

