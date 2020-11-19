import * as React from 'react';
import { Button, Text, View, ImageBackground, StyleSheet, Alert, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Style from './styles';
import CardServicos from '../CardServicos';
export default function PecasYa({ navigation }) {
    return (
        <View style={{ backgroundColor: "#D3D3D3" }}><ScrollView>
            <View style={{ backgroundColor: "white", height: 60, justifyContent: "center", marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <Image source={{ uri: 'https://www3.yamaha-motor.com.br/file/general/suno-yamaha-logo--hover.png' }}
                        style={Style.imagemitem2}
                    />
                    <Text style={{ fontSize: 23, color: "red", fontWeight: "bold", color: "black", marginHorizontal: 40}}>
                        SERVIÇOS
                    </Text>
                </View>
            </View>
            <View style={Style.container} >

                <CardServicos
                    titulo="MT 03 ABS"
                    titulo2="REVISÃO PREÇO FIXO"
                    km="1.000 KM"
                    meses="ou 6 meses"
                    proposta="6x R$ 28,00"
                    modo="A vista"
                    preco="R$ 168,00"
                ></CardServicos>

            </View>
            <View style={Style.container} >
                <CardServicos
                    titulo="MT 03 ABS"
                    titulo2="REVISÃO PREÇO FIXO"
                    km="5.000 KM"
                    meses="ou 12 meses"
                    proposta="6x R$ 35,00"
                    modo="A vista"
                    preco="R$ 210,00"
                ></CardServicos>
            </View>
            <View style={Style.container} >
                <CardServicos
                    titulo="MT 03 ABS"
                    titulo2="REVISÃO PREÇO FIXO"
                    km="10.000 KM"
                    meses="ou 18 meses"
                    proposta="6x R$ 102,00"
                    modo="A vista"
                    preco="R$ 612,00"
                ></CardServicos>
            </View>
            <View style={Style.container} >
                <CardServicos
                    titulo="MT 03 ABS"
                    titulo2="REVISÃO PREÇO FIXO"
                    km="15.000 KM"
                    meses="ou 24 meses"
                    proposta="6x R$ 89,00                        "
                    modo="A vista"
                    preco="R$ 534,00"
                ></CardServicos>
            </View>
        </ScrollView></View>
    );
}