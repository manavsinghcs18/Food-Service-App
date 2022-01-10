import React, { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    ToastAndroid,
} from "react-native";
import AppIcon from "../../component/AppIcon";
import {setData} from "../../utils/Utility";


const signUp = ({navigation}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [dropdown, setDropdown] = useState('What is your father name?');
    const [answer, setAnswer] = useState('');

    const setuserdata=async()=>{
        // console.log("HEllo world");
        let params = {
            firstName : firstName,
            lastName : lastName,
            mobileNumber : mobileNumber,
            emailId : emailId,
            password : password,
            dropdown : dropdown,
            answer : answer
        }
                let user = await setData(emailId+'', params, 'Stored data')
                console.log(user);
            }
    return (
        <View style={styles.container}>
            <AppIcon />
            <View style={styles.inputView}>
                <TextInput
                    onChangeText={(firstName) => setFirstName({ firstName })}
                    style={styles.TextInput}
                    placeholder="First Name."
                    placeholderTextColor="#003f5c"
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    onChangeText={(lastName) => setLastName({ lastName })}
                    style={styles.TextInput}
                    placeholder="Last Name."
                    placeholderTextColor="#003f5c"
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    onChangeText={(mobileNumber) => setMobileNumber({ mobileNumber })}
                    style={styles.TextInput}
                    placeholder="Mobile number."
                    keyboardType={'numeric'}
                    placeholderTextColor="#003f5c"
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    onChangeText={(emailId) => setEmailId({ emailId })}
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
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
            <View style={styles.inputView}>
                <Picker
                    selectedValue={dropdown}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setDropdown( itemValue )}
                >
                    <Picker.Item label="What is your father name?" value="Father's name?" />
                    <Picker.Item label="What is your mother name?" value="Mother's name?" />
                </Picker>
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Your Answer Here"
                    placeholderTextColor="#003f5c"
                    onChangeText={(answer) => setAnswer({ answer })}
                />
            </View>


            <TouchableOpacity
                style={styles.signupBtn}
                onPress={setuserdata}
            >
                <Text style={styles.loginText}
                onPress={()=>{navigation.navigate('Login')
                ToastAndroid.showWithGravityAndOffset("You are successfully signedup", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);}}>Signup</Text>
            </TouchableOpacity>
        </View>
    );

 
}
export default signUp;

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
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: "#050505",
    },
    picker: {
        height: 50,
        width: 250
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
        color: "#050505",
    },
    forgot_signup: {
        width: 280,
        flexDirection: "row",
        justifyContent: 'center',
    },
    signupBtn: {
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

