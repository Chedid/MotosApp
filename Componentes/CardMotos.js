import * as React from 'react';
import { Button, Text, View, ImageBackground, StyleSheet, Alert, Image, TouchableOpacity, ScrollView } from 'react-native';
import Style from '../Estilo/styleinicial';

const image = { uri: "https://i.pinimg.com/564x/7d/5e/36/7d5e360544b7b24c726879f477018c8b.jpg" };
export default function Motos(props) {
    return (

        <ScrollView>

            <View style={Style.caixas}>

                <Image source={{ uri: props.img }}
                    style={Style.imagemitem}
                />

                <Text style={Style.title}>
                    {props.titulo} {"\n"}
                    {props.descricao}
                </Text>
                <View style={Style.subCaixa}>
                    <View style={{ width: 150 }}>
                        <Text style={{ fontSize: 12, marginHorizontal: 15 }}>{props.proposta}</Text>
                        <Text style={{ fontSize: 25 }}> {props.preco}</Text>
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

    );
}
