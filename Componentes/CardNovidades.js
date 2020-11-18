import * as React from 'react';
import { Button, Text, View, ImageBackground, StyleSheet, Alert, Image, TouchableOpacity, ScrollView } from 'react-native';
import Style from '../Estilo/styleinicial';

const image = { uri: "https://i.pinimg.com/564x/7d/5e/36/7d5e360544b7b24c726879f477018c8b.jpg" };
export default function Motos(props) {
    return (
        <ImageBackground source={image} style={Style.image}>
            <ScrollView>
                <Text style={Style.text}>Novidades</Text>


                <View style={Style.caixas}>

                    <Image source={{ uri: 'https://img.olx.com.br/images/35/354908010680310.jpg' }}
                        style={Style.imagemitem}
                    />

                    <Text style={Style.title}>
                        MT-03 ABS{"\n"}
                        MASTER OF TORQUE
                    </Text>
                    <View style={Style.subCaixa}>
                        <View style={{width: 150}}>
                            <Text style={{fontSize: 25}}> RS 30,000</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => Alert.alert('Disponível nas próximas versões')}
                                style={Style.botaoanuncio} >
                                <Text style={{ fontWeight: "bold", color: "white" }}> Tenho interesse</Text>
                            </TouchableOpacity>
                        </View>


                    </View>

                </View>
            </ScrollView>
        </ImageBackground>
    );
}
