import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const imageBackground =require("./Images/backgound_blue.jpg");

export default function App() {
  return (
      <ImageBackground source={imageBackground} style={styles.image}>
        <View style={styles.container}>
            <Text>Testing background</Text>
            <StatusBar style="auto" />
        </View>
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

});
