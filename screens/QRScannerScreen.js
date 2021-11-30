import React, { useEffect, useState} from "react";
import {StyleSheet, Text, View, ImageBackground} from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner";
import {imageBackground} from "../constants/FilePaths";
import {Color} from "../constants/Colors";


export const QRScannerScreen = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (!hasPermission) {
        return <View style={styles.container}>
            <Text> No camera access! </Text>
        </View>
    }

    return  <ImageBackground source={imageBackground} style={styles.backgroundImage}>
        <Text style={styles.text}> Scan a QR code to get info about the point of interest </Text>
        <BarCodeScanner style={styles.barCodeScanner}
                        onBarCodeScanned={({data}) => {navigation.replace('SponsorsScreen', data)}}/>

    </ImageBackground>
}
    const styles = StyleSheet.create({
        backgroundImage: {
            resizeMode: 'cover',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            fontSize: 24,
            marginBottom: 20,
            color: Color.white,
        },
        barCodeScanner : {
            width: '80%',
            height:'80%',
        }
    })
