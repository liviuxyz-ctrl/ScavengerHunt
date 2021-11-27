import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from "react-native"
import {Color} from '../constants/Colors.js'
import {heightOfScreen, widthOfScreen} from "../constants/ScreenSizes";

export const CustomButton = ({unfilled, onPress, title}) => {
    const styles = unfilled ? unfilledStyle : filledStyle;

    return <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        >
        <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
    }

const filledStyle = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: Color.darkerBlue,
        borderColor: Color.royalBlue,
        width: widthOfScreen - widthOfScreen/10,
        borderWidth: 2,
        borderRadius: 30,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: heightOfScreen / 10,
    },
    textButton: {
        color: Color.white,
        fontWeight: 'bold',
    }
});

const unfilledStyle = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: Color.darkerBlue,
        borderColor: Color.royalBlue,
        width: widthOfScreen - widthOfScreen/10,
        borderWidth: 2,
        borderRadius: 30,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: heightOfScreen / 10,
    },
    textButton: {
        color: Color.white,
        fontWeight: 'bold',
    }
});




