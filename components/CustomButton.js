import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from "react-native"
import {Color} from '../constants/Colors.js'

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
        borderWidth: 2,
        borderRadius: 30,
        marginBottom:50,
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 130,
        paddingRight: 130,
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
        borderWidth: 2,
        borderRadius: 30,
        marginBottom:50,
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 130,
        paddingRight: 130,

    },
    textButton: {
        color: Color.white,
        fontWeight: 'bold',
    }
});




