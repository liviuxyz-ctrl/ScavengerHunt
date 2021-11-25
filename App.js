import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import {Color} from './constants/Colors';
import {imageBackground} from './constants/FilePaths';
import {CustomButton} from "./components/CustomButton";
import {HomeScreen} from "./screens/HomeScreen";


const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    return <Stack.Navigator>
        <Stack.Screen name={'Home'} component={HomeScreen}/>
    </Stack.Navigator>
}

export default function App() {
  return (
      <ImageBackground source={imageBackground} style={styles.image}>
          <NavigationContainer style={styles.container}>
                    <StatusBar hidden/>
                    <StackNavigator/>
          </NavigationContainer>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
    image:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
    titleText :{
        color : 'white',
        fontSize: 25,
        paddingBottom: 100,

    }

});


// <ImageBackground source={imageBackground} style={styles.image}>
//     <View style={styles.container}>
//         <Text style={styles.titleText}>Testing background</Text>
//         <StatusBar style="auto" />
//         <CustomButton unfilled title={'Test button 1'} onPress={() => {}}/>
//         <CustomButton unfilled title={'Test button 2'} onPress={() => {}}/>
//     </View>
// </ImageBackground>
