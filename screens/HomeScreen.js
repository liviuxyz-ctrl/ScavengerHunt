import React from 'react';
import {Button, View} from "react-native";
import {CustomButton} from "../components/CustomButton";

export const HomeScreen= ({navigation}) =>{
    return <View style={{flex:1}}>
        <CustomButton unfilled title={'Scan QR code'} onPress={() => navigation.navigate('QRScannerScreen')}/>
        <CustomButton unfilled title={'Sponsors'} onPress={() => navigation.navigate('SponsorsScreen')}/>
        </View>
}
