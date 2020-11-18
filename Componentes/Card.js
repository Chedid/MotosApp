import * as React from 'react';
import { Button, Text, View, ImageBackground, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import Style from './Pecas/styles';

export default function Motos(props) {
    return (
        <View style={Style.box}>
            <View style={{ maxWidth: '100%' }}>
                <Image source={{ uri: props.img }}
                    style={Style.imagemitem}
                />
                <Text style={Style.textotitulo}>
                    {props.textodesc}
            </Text>
                <Text style={Style.textopreco}>
                    {props.textopreco}{"\n"}
                    <Text style={{ color: '#32CD32' }}> sem juros </Text>
                </Text>
                <TouchableOpacity onPress={() => Alert.alert('Disponível nas próximas versões')}
                    style={Style.botaoanuncio} >
                    <Text style={{ fontWeight: "bold", color: "white" }}> Ver mais</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
