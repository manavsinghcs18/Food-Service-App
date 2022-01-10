import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';


const NotificationsScreen = ({ navigation }) => {
    return (
        <View style={styles.notistyle}>
            <Text style={styles.text}>Thanks, For Comming in Food Service App</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
                <View>
                    <Text style={styles.textStyle}>Log Out</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
export default NotificationsScreen;
const styles = StyleSheet.create({
    notistyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle:{
        color:'black',
        borderColor:'black',
        borderWidth:1,
        width:90,
        height:40,
        fontSize:30,
        padding:5
    },
    text:{
        fontSize:30,
        color:'black',
        marginBottom:50
    }
})