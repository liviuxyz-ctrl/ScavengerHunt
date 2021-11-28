import React from 'react';
import {View} from "react-native";
import {CustomButton} from "../components/CustomButton";
import {styles} from "../App";


export const HomeScreen= ({navigation}) =>{
    return <View style={styles.view}>
                    <CustomButton  title={'Scan_QR_code'} onPress={() => navigation.navigate('QRScannerScreen')}/>
                    <CustomButton  title={'Sponsors'} onPress={() => navigation.navigate('SponsorsScreen')}/>
            </View>
}
