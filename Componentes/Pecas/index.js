import * as React from 'react';
import { Button, Text, View, ImageBackground, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Style from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const image = { uri: "https://i.pinimg.com/564x/7d/5e/36/7d5e360544b7b24c726879f477018c8b.jpg" };

export default function VestuYa({ navigation }) {
    return (
        <ImageBackground source={image} style={Style.image}>


            <ScrollView>

                <View style={Style.container} >

                    <View style={Style.box}>

                        <View style={{ maxWidth: '100%' }}>

                            <Image source={{ uri: 'https://http2.mlstatic.com/D_NQ_NP_940648-MLB43331989071_092020-O.webp' }}
                                style={Style.imagemitem}
                            />
                            <Text style={Style.textotitulo}>
                                Eliminador De Rabeta Mt07 Mt 07 Yamaha P/ Peças Originais
                            </Text>
                            <Text style={Style.textopreco}>
                                R$69 em 12x R$5,75 {"\n"} 
                                <Text style={{color: '#32CD32'}}> sem juros </Text>
                                
                            </Text>
                            <TouchableOpacity onPress={() => Alert.alert('Disponível nas próximas versões')}
                                style={Style.botaoanuncio} >
                                <Text style={{fontWeight: "bold"}}>
                                    Ver mais
                            </Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={Style.box} />
                    <View style={Style.box} />
                    <View style={Style.box} />
                    <View style={Style.box} />
                    <View style={Style.box} />
                    <View style={Style.box} />
                    <View style={Style.box} />



                </View>
            </ScrollView>
        </ImageBackground>
    );
}
