import React from 'react';
import {StyleSheet} from "react-native";
import {CustomButton} from "../components/CustomButton";
import {imageBackground} from "../constants/FilePaths";
import {ImageBackground} from "react-native";
import {widthOfScreen} from "../constants/ScreenSizes";


export const HomeScreen= ({navigation}) =>{
    console.log(widthOfScreen);
    return <ImageBackground source={imageBackground} style={stylesHome.backgroundImage}>
        <CustomButton  title={'Scan_QR_code'} onPress={() => navigation.navigate('QRScannerScreen')}/>
        <CustomButton  title={'Sponsors'} onPress={() => navigation.navigate('SponsorsScreen')}/>
    </ImageBackground>

}

const stylesHome = StyleSheet.create({
    backgroundImage: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }});
