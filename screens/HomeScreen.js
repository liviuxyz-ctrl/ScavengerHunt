import React from 'react';
import {View} from "react-native";
import {CustomButton} from "../components/CustomButton";


export const HomeScreen= ({navigation}) =>{
    return <View>
                    <CustomButton unfilled title={'Scan QR code'} onPress={() => navigation.navigate('QRScannerScreen')}/>
                    <CustomButton unfilled title={'Sponsors'} onPress={() => navigation.navigate('SponsorsScreen')}/>
            </View>
}
