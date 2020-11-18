import * as React from 'react';
import { Button, Text, View, ImageBackground, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Style from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../Card';


const image = { uri: "https://i.pinimg.com/564x/7d/5e/36/7d5e360544b7b24c726879f477018c8b.jpg" };

export default function VestuYa({ navigation }) {
    return (
        <ImageBackground source={image} style={Style.image}>


            <ScrollView>

                <View style={Style.container} >


                    <Card
                        textodesc="Eliminador De Rabeta Mt07 Mt 07 Yamaha P/ Peças Originais"
                        img="https://http2.mlstatic.com/D_NQ_NP_940648-MLB43331989071_092020-O.webp"
                        textopreco="R$69 em 12x R$5,75"
                    ></Card>

                    <Card
                        textodesc="Par Retrovisor Gvs Mt 03 Mt 07 Mt 09 Giro 360 C Rosca Yamaha"
                        img="https://http2.mlstatic.com/D_NQ_NP_997386-MLB31179470789_062019-O.webp"
                        textopreco="R$143,35 12x R$11,95"
                    ></Card>

                    <Card
                        textodesc="Manete Esportivo Xj6 Mt-03 Xt 660 Mt-07 R1 R3 A Laser Yamaha"
                        img="https://http2.mlstatic.com/D_NQ_NP_962819-MLB32081251118_092019-O.webp"
                        textopreco="R$143,35 12x R$11,95"
                    ></Card>

                    <Card
                        textodesc="2 Velas Ngk Lmar8a-9 Ignição Yamaha Mt07 Mt-07 Mt 07"
                        img="https://http2.mlstatic.com/D_NQ_NP_621695-MLB43416042770_092020-O.webp"
                        textopreco="R$139 12x R$11,58"
                    ></Card>

                    <Card
                        textodesc="Kit Completo Pastilha Freio Fischer Yamaha Yamaha Mt07-mt09"
                        img="https://http2.mlstatic.com/D_NQ_NP_814539-MLB42309451819_062020-O.webp"
                        textopreco="R$229,99 12x R$19,17"
                    ></Card>

                    <Card
                        textodesc="Kit Troca Oleo E Filtro Yamaha Mt-07 Mt-09 Yamalube 10w40"
                        img="https://http2.mlstatic.com/D_NQ_NP_769223-MLB40653907466_022020-O.webp"
                        textopreco="R$156 12x R$13,00"
                    ></Card>


                </View>
            </ScrollView>
        </ImageBackground>
    );
}
