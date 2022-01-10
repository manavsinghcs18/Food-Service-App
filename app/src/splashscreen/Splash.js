import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AppIcon from '../component/AppIcon';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 3000);
    }, [])
    return (
        <View style={styles.splashimg}>
            <AppIcon />
        </View>
    );
}
export default Splash;
const styles = StyleSheet.create({
    splashimg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});