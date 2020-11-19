import * as React from 'react';
import { Button, Text, View, ImageBackground, StyleSheet, Alert, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Style from './styles';
import CardMotos from '../CardMotos';
// Tela de motos
const image = { uri: "https://i.pinimg.com/564x/7d/5e/36/7d5e360544b7b24c726879f477018c8b.jpg" };
export default function Motos({ navigation }) {
  return (

    <ImageBackground source={image} style={Style.image}>


      <ScrollView>

        <View style={Style.container} >


          <CardMotos
            img="https://img.olx.com.br/images/35/354908010680310.jpg"
            titulo="MT-03 ABS"
            descricao="MASTER OF TORQUE"
            preco="R$25.490"
            proposta="36x de 720,00"
          ></CardMotos>

          <CardMotos
            img="http://motonewsbrasil.com/wp-content/uploads/2019/07/yamaha-tracer-900-gt-2020-2-1024x683.jpg"
            titulo="TRACER 900 GT ABS"
            descricao="curta longas distâncias"
            preco="R$57.890"
            proposta="36x de 1.690,00"
          ></CardMotos>

          <CardMotos
            img="http://motonewsbrasil.com/wp-content/uploads/2020/07/yamaha-mt-07-2021-3-1200x800.jpg"
            titulo="MT-07 ABS"
            descricao="MASTER OF TORQUE"
            preco="R$39.990"
            proposta="36x de 1.190,00"
          ></CardMotos>

          <CardMotos
            img="https://media.motociclismoonline.com.br/uploads/2020/08/1-7.jpg"
            titulo="SUPER TÉNÉRÉ 1200 DX ABS"
            descricao="MASTER OF TORQUE"
            preco="R$71.290"
            proposta="36x de 2.090,00 "
          ></CardMotos>

          <CardMotos
            img="https://mobilidade.estadao.com.br/wp-content/uploads/2020/10/Yamaha_MT09_2021.jpg"
            titulo="MT-09 ABS"
            descricao="MASTER OF TORQUE"
            preco="R$51.190"
            proposta="36x de 1.490,00"
          ></CardMotos>




        </View>
      </ScrollView>
    </ImageBackground>

  );
}
