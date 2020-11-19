import * as React from 'react';
import { Button, Text, View, ImageBackground, StyleSheet, Alert, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Motos from './Componentes/Motos/index';
import PecasYa from './Componentes/Pecas/index';
import VestuYa from './Componentes/Servicos/index';

import Style from './Estilo/styleinicial';
import CardNovidades from './Componentes/CardNovidades';
// Primeira tela do App

function HomeScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: "#D3D3D3" }}><ScrollView>
      <View style={{ backgroundColor: "white", height: 60, justifyContent: "center", marginVertical: 5 }}>
        <View style={{flexDirection: 'row', alignItems: "center"}}>
          <Image source={{ uri: 'https://www3.yamaha-motor.com.br/file/general/suno-yamaha-logo--hover.png' }}
            style={Style.imagemitem2}
          />
          <Text style={{ fontSize: 23, color: "red", fontWeight: "bold", color: "black", marginHorizontal: 40 }}>
            NOVIDADES
        </Text>
        </View>
      </View>
      <CardNovidades
        img="http://motonewsbrasil.com/wp-content/uploads/2020/11/yamaha-ya-1-red-dragonfly-replica-1-1200x800.jpg"
        titulo="Yamaha do Brasil cria uma réplica da YA-1 Red Dragonfly, sua 1ª moto"
        descricao="A Yamaha Motor do Brasil criou uma réplica da sua primeira moto do mundo, a YA-1 Red Dragonfly, em comemoração aos 50 anos da marca no nosso país."
      ></CardNovidades>

      <CardNovidades
        img="http://motonewsbrasil.com/wp-content/uploads/2020/11/yamaha-tracer-9-2021-europa-1-1200x800.jpg"
        titulo="Yamaha TRACER 9 2021 é lançada: novo nome, design e motor maior de 890cc"
        descricao="A Yamaha lançou na Europa a TRACER 9 2021, sua Sport Touring de alta cilindrada. Ela chega
           com novo nome (era TRACER 900), novo design e motor maior, de 890cc."
      ></CardNovidades>

      <CardNovidades
        img="http://motonewsbrasil.com/wp-content/uploads/2020/11/yamaha-nmax-160-abs-2021-1.jpg"
        titulo="Yamaha NMax 160 2021 totalmente renovada é lançada no Brasil"
        descricao="A Yamaha lançou no Brasil o modelo 2021 da NMax 160 ABS totalmente renovada. Ela chega com novos
          faróis e lanternas em LED, novo painel e novo motor."
      ></CardNovidades>

      <CardNovidades
        img="http://motonewsbrasil.com/wp-content/uploads/2020/11/yamaha-mt-07-2021-europa-7.jpg"
        titulo="Yamaha MT-07 amadurece e ganha novo visual para 2021 na Europa"
        descricao="A Yamaha lançou na Europa a nova MT-07 2021, que chega com novo visual,
           iluminação em LED, melhorias nos freios e novos pneus."
      ></CardNovidades>

      <CardNovidades
        img="http://motonewsbrasil.com/wp-content/uploads/2020/10/yamaha-mt-09-2021-europa-leak-3.jpg"
        titulo="Vazam imagens da nova Yamaha MT-09 2021: nova frente, painel e motor"
        descricao="A Yamaha está para lançar o modelo 2021 atualizado da MT-09 na Europa e Ásia. Agora,
           algumas imagens vazaram antes do lançamento, e mostram como será o novo modelo."
      ></CardNovidades>

      <CardNovidades
        img="http://motonewsbrasil.com/wp-content/uploads/2020/09/yamaha-nmax-160-star-wars-edition-1.jpg"
        titulo="Yamaha lança NMax 160 Special Edition inspirada em Star Wars"
        descricao="A Yamaha lançou no Brasil a NMax 160 Special Edition, inspirada em Star Wars. Ela chega
           em duas versões: Aliança Rebelde e Império Galáctico."
      ></CardNovidades>
    </ScrollView>
    </View>

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
            <MaterialCommunityIcons name="screwdriver" color={color} size={size} />
          ),
          tabBarLabel: 'Serviços',
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
        <Stack.Screen name="Serviços" component={VestuYa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

