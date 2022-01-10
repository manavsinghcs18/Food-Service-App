import React from "react";
import { Picker } from '@react-native-picker/picker';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useState } from "react";
import AppIcon from "../../component/AppIcon";
// import Utility from "../../utils/Utility";

const forgotpassword = ({navigation}) => {
    const [emailId, setEmailId] = useState('');
    const [dropdown, setDropdown] = useState('What is your father name?');
    const [answer, setAnswer] = useState('');

    return (
        <View style={styles.container}>
            <AppIcon />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(emailId) => setEmailId({ emailId })}
                />
            </View>
            <View style={styles.inputView}>
                <Picker
                    selectedValue={dropdown}
                    style={styles.picker}
                    onValueChange={(itemValue,itemIndex) => setDropdown( itemValue )}
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
            <TouchableOpacity style={styles.signupBtn}
            onPress={()=>{navigation.navigate('Login')}}
            // onPress={async () => {
            //     Utility.sharedInstance._retrieveData(this.state.emailId)
            //     this.props.navigation.navigate('Login');
            // }}
            >
                <Text style={styles.loginText}>Recover Password</Text>
            </TouchableOpacity>
        </View>
    );

}
export default forgotpassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
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


