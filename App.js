import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import {imageBackground} from "./constants/FilePaths";
import {CustomButton} from "./components/CustomButton";


export default function App() {
  return (
      <ImageBackground source={imageBackground} style={styles.image}>
        <View style={styles.container}>
            <Text>Testing background</Text>
            <StatusBar style="auto" />
            <CustomButton unfilled title={'Test button 1'} onPress={() => {setVisible(true)}}/>
            <CustomButton unfilled title={'Test button 2'} onPress={() => {setVisible(true)}}/>
            <CustomButton unfilled title={'Test button 3'} onPress={() => {setVisible(true)}}/>
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
