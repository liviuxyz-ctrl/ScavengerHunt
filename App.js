import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ImageBackground, StyleSheet, View} from 'react-native';
import {HomeScreen} from "./screens/HomeScreen";
import {imageBackground} from "./constants/FilePaths";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    return <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Home'} component={HomeScreen}/>
    </Stack.Navigator>
}

export default function App() {
    return (<ImageBackground source={imageBackground} style={styles.backgroundImage}>
            <View style={styles.view}>
                <NavigationContainer>
                    <StatusBar hidden/>
                    <StackNavigator/>
                </NavigationContainer>
            </View>
        </ImageBackground>
    );
}

export const styles = StyleSheet.create({
    backgroundImage: {
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flex: 1,
    },
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',

    }


});

