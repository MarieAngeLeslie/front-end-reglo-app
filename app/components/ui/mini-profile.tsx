import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function MiniProfile({width, height, imgUrl = '', username, style}:{width:number, height:number,imgUrl?: string, username: string, style?: any} ) {
    return(
        <View style={[styles.imgContainer, {width, height}, style]}>
            { imgUrl ?
                <Image
                style={[styles.tinyLogo, {width, height}]}
                source={{uri:imgUrl}}
                />
                : <Text style={styles.usernameAbbreviation}> {username.substring(0, 2).toUpperCase()} </Text> }
        </View>
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
        objectFit: 'cover',
    },
    imgContainer:{
        backgroundColor: "#3c3d4f",
        borderRadius: 50,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'rgba(119,120,140,0.66)',
    },
    usernameAbbreviation:{
        color:'white',
        fontSize:15,
    }
});
