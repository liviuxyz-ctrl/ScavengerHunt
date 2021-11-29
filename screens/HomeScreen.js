import React from 'react';
import {StyleSheet, ImageBackground} from "react-native";
import {CustomButton} from "../components/CustomButton";
import {imageBackground} from "../constants/FilePaths";

export const HomeScreen= ({navigation}) =>{
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
