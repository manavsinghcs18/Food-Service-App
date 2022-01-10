import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ToastAndroid
} from "react-native";
import { useState } from "react";
import AppIcon from "../../component/AppIcon";
import { getData } from "../../utils/Utility";

const login = ({navigation}) => {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');

    const getuserdata=async()=>{
        let params = {
            emailId : emailId,
            password : password,
        }
                let value = await getData(emailId+'', params, 'Stored data')
                console.log(value);
            }

    return (
        <View style={styles.container}>
            <AppIcon />
            <View style={styles.inputView}>
                <TextInput
                        onChangeText={(emailId) => setEmailId({ emailId })}
                        style={styles.TextInput}
                        placeholder="Email."
                        placeholderTextColor="#003f5c"
                        returnKeyType="next"
                        keyboardType="email-address"
                    />
            </View>
            <View style={styles.inputView}>
                <TextInput
                        onChangeText={(password) => setPassword({ password })}
                        style={styles.TextInput}
                        placeholder="Password."
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                    />
            </View>
            <View style={styles.forgot_signup}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Forgotpassword') }}>
                    <Text style={styles.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('SignUp') }}>
                    <Text style={styles.forgot_button}>Signup Here</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
            style={styles.loginBtn} 
            onPress={getuserdata}
                >
                <Text style={styles.loginText} 
                onPress={()=>{navigation.navigate('home')
                ToastAndroid.showWithGravityAndOffset("Welcome to Food Service Application.", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);}}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}
export default login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
        height: 100,
        width: 100,
        borderRadius: 20
    },
    inputView: {
        backgroundColor: "#eba134",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 45,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: "#050505",
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
        color: "#050505",
        fontWeight: "bold"
    },
    forgot_signup: {
        width: 200,
        height: 30,
        flexDirection: "row",
        justifyContent: 'center',
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#ffe2b8",
        borderColor: "#050505",
        borderWidth: 1
    },
    loginText: {
        color: "#050505",
        fontWeight: "bold"
    }
});

