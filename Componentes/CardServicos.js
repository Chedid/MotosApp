import * as React from 'react';
import { Button, Text, View, ImageBackground, StyleSheet, Alert, Image, TouchableOpacity, ScrollView } from 'react-native';
import Style from '../Estilo/styleinicial';

const image = { uri: "https://i.pinimg.com/564x/7d/5e/36/7d5e360544b7b24c726879f477018c8b.jpg" };
export default function Motos(props) {
    return (

        <View>
            <View style={Style.caixas}>

                <Text style={Style.titleserv}> {props.titulo} </Text>
                <Text style={Style.titleserv}> {props.titulo2} </Text>

                <View style={Style.subCaixa}>
                    <View style={{ width: 250, margin: 10 }}>

                        <Text style={{ fontSize: 16, color: "#1E90FF", textAlign: "left" }} >{props.km} </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 16, color: "black", textAlign: "left" }}> {props.meses} </Text>
                            <Text style={{ fontSize: 16, color: "black", textAlign: "left" }}> {props.proposta} </Text>
                        </View>

                        <Text style={{ fontSize: 16, color: "#32CD32", textAlign: "left" }}> {props.modo} </Text>
                        <View style={{flexDirection: "row", justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 20, color: "black", textAlign: "left" }}> {props.preco} </Text>
                            <TouchableOpacity onPress={() => Alert.alert('Disponível nas próximas versões')}
                                style={Style.botaoanuncio2} >
                                <Text style={{ fontWeight: "bold", color: "white", fontSize: 12}}> Tenho interesse</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
            </View>
        </View>

    );
}
