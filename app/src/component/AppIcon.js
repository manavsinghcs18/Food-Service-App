import React from "react";
import { Image, StyleSheet } from "react-native";

const AppIcon=(props)=>{
    return(
        <Image style={[styles.image,props.container]} source={require('../../res/assets/icon.jpg')}/>
    );
}
const styles=StyleSheet.create({
    image: {
        marginBottom: 40,
        height: 100,
        width: 100,
        borderRadius: 20
    },
});
export default AppIcon;