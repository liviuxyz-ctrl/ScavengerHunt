import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { ImageBackground, StyleSheet, View } from 'react-native';
import {HomeScreen} from "./screens/HomeScreen";
import {imageBackground} from "./constants/FilePaths";


const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    return <Stack.Navigator>
                    <Stack.Screen name={'Home'} component={HomeScreen}/>
        </Stack.Navigator>
}

export default function App() {
  return ( <ImageBackground source={imageBackground} style={styles.image}>
      <View style={styles.container}>
              <NavigationContainer>
                  <StatusBar hidden/>
                  <StackNavigator/>
              </NavigationContainer>
      </View>
      </ImageBackground>

  );
}

const styles = StyleSheet.create({
    image:{
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flex: 1,
    },
  container: {
    justifyContent: 'center',
      position: 'absolute',
      elevation: 10,
      flex: 1,
  },
    titleText :{
        color : 'white',
        fontSize: 25,
        paddingBottom: 100,
    },


});


// <ImageBackground source={imageBackground} style={styles.image}>
//     <View style={styles.container}>
//         <Text style={styles.titleText}>Testing background</Text>
//         <StatusBar style="auto" />
//         <CustomButton unfilled title={'Test button 1'} onPress={() => {}}/>
//         <CustomButton unfilled title={'Test button 2'} onPress={() => {}}/>
//     </View>
// </ImageBackground>
