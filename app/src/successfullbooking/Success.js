import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const Success = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.successimage} source={require('../../res/assets/bookingSuccess.png')} />
            <Text style={styles.textstyle}>Your Booking is Successfull</Text>
            <TouchableOpacity style={styles.touchbutton} onPress={()=>{navigation.navigate('home')}}>
                <Text style={styles.text}>Buy More Food Products</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Success;

const styles = StyleSheet.create({
    container:{
        borderColor:'black',
        borderWidth:0.5,
        marginTop:250,
        width:400,
        height:300,
        borderRadius:20,
        marginLeft:5,
        backgroundColor:'#ffba75'
    },
    textstyle:{
        color:'black',
        fontSize:20,
        marginLeft:110,
        marginTop:20,
    },
    successimage:{
        height:150,
        width:150,
        marginLeft:120,
        marginTop:30,
        borderRadius:20,
        borderColor:'black',
        borderWidth:1
    },
    touchbutton:{
        borderColor:'black',
        borderWidth:1,
        width:150,
        height:30,
        marginLeft:120,
        marginTop:20,
        backgroundColor:'white'
    },
    text:{
        color:'black',
        fontSize:25,
        marginLeft:15
    }
    
})