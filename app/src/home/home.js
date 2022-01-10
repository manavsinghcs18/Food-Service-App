import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
const home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.navigate('NotificationScreen') }}>
                    <View>
                        <Image style={styles.image} source={require('../../res/assets/icon.jpg')} />
                    </View>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity style={styles.searchbar}>
                        <TextInput
                            placeholder="Search Here..."
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Image style={styles.cartimg} source={require('../../res/assets/cart.jpg')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.boundary} />

            <ScrollView>
                <View style={styles.body}>
                    <TouchableOpacity
                        style={styles.menulist}
                        onPress={() => { navigation.navigate('breakfast') }}>
                        <Image style={styles.menuimage} source={require('../../res/assets/food/breakfast.jpg')} />
                        <Text style={styles.menutext}>Breakfast</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menulist}
                        onPress={() => { navigation.navigate('lunch') }}>
                        <Image style={styles.menuimage} source={require('../../res/assets/food/lunch.jpg')} />
                        <Text style={styles.menutext}>Lunch</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menulist}
                        onPress={() => { navigation.navigate('snaks') }}>
                        <Image style={styles.menuimage} source={require('../../res/assets/food/snaks.jpg')} />
                        <Text style={styles.menutext}>Snaks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menulist}
                        onPress={() => { navigation.navigate('dinner') }}>
                        <Image style={styles.menuimage} source={require('../../res/assets/food/dinner.jpg')} />
                        <Text style={styles.menutext}>Dinner</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
export default home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        marginBottom: 0,
    },
    header: {
        flexDirection: "row",
        margin: 5,
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 10
    },
    searchbar: {
        marginLeft: 20,
        marginTop: 5,
        borderColor: 'black',
        color: 'black',
        borderWidth: 1,
        width: 270,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    cartimg: {
        marginLeft: 10,
        height: 50,
        width: 50
    },
    boundary: {
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    menulist: {
        borderColor: "black",
        borderWidth: 1,
    },
    menuimage: {
        width: 350,
        height: 150,
        margin: 25,
    },
    menutext: {
        fontWeight: "bold",
        color: "black",
        width: 100,
        height: 20,
        fontSize: 20,
        marginLeft: 170
    }
})