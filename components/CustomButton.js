import React from 'react'
import {Text, TouchableOpacity, StyleSheet, Dimensions} from "react-native"
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
        width: Dimensions.get('screen').width - 10,
        borderWidth: 2,
        borderRadius: 30,
        marginBottom:20,
        paddingTop: 20,
        paddingBottom: 20,
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
        width: Dimensions.get('screen').width - Dimensions.get('screen').width/10,
        borderWidth: 2,
        borderRadius: 30,
        marginBottom:Dimensions.get('screen').height / 10,
        paddingTop: 20,
        paddingBottom: 20,
    },
    textButton: {
        color: Color.white,
        fontWeight: 'bold',
    }
});




