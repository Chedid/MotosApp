import * as React from 'react';
import { Button, Text, View, ImageBackground, StyleSheet, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Style from './styles';

export default function PecasYa({ navigation }) {
    return (
        <View style={Style.container} >
            <Text>tela peças</Text>
            <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                style={{ width: 400, height: 400 }} />
        </View>
    );
}