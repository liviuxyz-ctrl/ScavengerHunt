import React from 'react';
import {Text, StyleSheet, View, Image, ImageBackground} from "react-native";
import {CustomButton} from "../components/CustomButton";
import {imageBackground} from "../constants/FilePaths";
import {Color} from "../constants/Colors";

export const SponsorsScreen = ({navigation, route}) => {
    // const {title, img, description} = JSON.parse(route.params);
    // console.log(route);

    return  <ImageBackground source={imageBackground} style={styles.backgroundImage}>
        {/*<Text style={styles.title}>{title}</Text>*/}
        {/*<Image style={styles.image} source={{uri: img}}/>*/}
        {/*<Text style={[styles.subheader, {alignSelf: 'flex-start', marginBottom: 20}]}>{description}</Text>*/}
        <Text style={styles.title}>No sponsors have been added.</Text>
        <CustomButton title={'Home'} onPress={() => {
            navigation.replace('Home');
        }}/>
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
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: Color.white,
        marginBottom: '5%',
    },
    subheader: {
        fontSize: 36,
    },
    image :{
        width: '100%',
        height: 600,
        margin: 50,
    }
});
