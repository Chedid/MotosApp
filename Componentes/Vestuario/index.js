import * as React from 'react';
import { Button, Text, View, ImageBackground, StyleSheet, Alert, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Style from './styles';

export default function PecasYa({ navigation }) {
    return (
        <View style={Style.container}>
        <ScrollView >
                <View style={Style.postContainer}>
                    <Text style={Style.postTitle}> Estudando React native</Text>
                    <Text style={Style.postDescription}>
                        Somos uma rede com cerca de 400 concessionários autorizados
                        Yamaha ao redor de todo Brasil. Conheça a potência, economia,
                        segurança, conforto, design e muito mais vantagens
                </Text>
                </View>

                <View style={Style.postContainer}>
                    <Text style={Style.postTitle}> Estudando React native</Text>
                    <Text style={Style.postDescription}>
                        Somos uma rede com cerca de 400 concessionários autorizados
                        Yamaha ao redor de todo Brasil. Conheça a potência, economia,
                        segurança, conforto, design e muito mais vantagens
                </Text>
                </View>

                <View style={Style.postContainer}>
                    <Text style={Style.postTitle}> Estudando React native</Text>
                    <Text style={Style.postDescription}>
                        Somos uma rede com cerca de 400 concessionários autorizados
                        Yamaha ao redor de todo Brasil. Conheça a potência, economia,
                        segurança, conforto, design e muito mais vantagens
                </Text>
                </View>

                <View style={Style.postContainer}>
                    <Text style={Style.postTitle}> Estudando React native</Text>
                    <Text style={Style.postDescription}>
                        Somos uma rede com cerca de 400 concessionários autorizados
                        Yamaha ao redor de todo Brasil. Conheça a potência, economia,
                        segurança, conforto, design e muito mais vantagens
                </Text>
                </View>
        </ScrollView>
        </View>
    );
}