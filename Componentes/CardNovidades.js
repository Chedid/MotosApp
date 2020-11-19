import * as React from 'react';
import { Button, Text, View, ImageBackground, StyleSheet, Alert, Image, TouchableOpacity, ScrollView } from 'react-native';
import Style from '../Estilo/styleinicial';

const image = { uri: "https://i.pinimg.com/564x/7d/5e/36/7d5e360544b7b24c726879f477018c8b.jpg" };
export default function Motos(props) {
    return (

        <ScrollView>

            <View style={Style.caixas}>
                <View style={{alignItems: "center"}}>


                    <Image source={{ uri: props.img }}
                        style={Style.imagemitem}
                    />

                    <Text style={Style.titleNovidades}> {props.titulo} {"\n"}</Text>
                    <Text style={{ fontSize: 14, margin: "5%", marginVertical: 1, textAlign: "justify" }}> {props.descricao}</Text>

                </View>
            </View>
        </ScrollView>

    );
}
