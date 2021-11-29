import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StatusBar} from 'expo-status-bar';
import {HomeScreen} from "./screens/HomeScreen";


const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    return <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Home'} component={HomeScreen}/>
    </Stack.Navigator>
}

export default function App() {
    return (
                <NavigationContainer>
                    <StatusBar hidden/>
                    <StackNavigator/>
                </NavigationContainer>

    );
}

export const styles = StyleSheet.create({
    backgroundImage: {
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    }
});

