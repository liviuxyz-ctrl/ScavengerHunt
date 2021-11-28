import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from "react-native"
import {Color} from '../constants/Colors.js'
import {heightOfScreen, widthOfScreen} from "../constants/ScreenSizes";

export const CustomButton = ({onPress, title}) => {
    const styles = touchableStyle;

    return <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        >
        <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
    }

const touchableStyle = StyleSheet.create({
    container: {
        backgroundColor: Color.darkerBlue,
        borderColor: Color.royalBlue,
        alignItems: "center",
        width: '75%',
        borderWidth: 2,
        borderRadius: 30,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: '10%',
    },
    textButton: {
        color: Color.white,
        fontWeight: 'bold',
    }
});





