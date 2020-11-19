import * as React from 'react';
import { Button, Text, View, ImageBackground, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import Style from './Pecas/styles';

export default function Motos(props) {
    return (

        <TouchableOpacity onPress={() => Alert.alert('Disponível nas próximas versões')}
            style={Style.box}
        >
            <View style={{ maxWidth: '100%' }}>
                <Image source={{ uri: props.img }}
                    style={Style.imagemitem}
                />
                <Text style={Style.textotitulo}>{props.textodesc}</Text>

                <Text style={Style.textopreco}> {props.textopreco}</Text>

                <Text style={{ color: 'black', fontSize: 12, marginHorizontal: 10 }}> {props.textoproposta} </Text>

                <Text style={{ color: '#32CD32', fontSize: 12, margin: 1, marginHorizontal: 10 }}> {props.frete} </Text>
            </View>
        </TouchableOpacity >

    );
}
