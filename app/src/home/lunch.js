import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Button } from "react-native";
import { keyExtractor } from "react-native/Libraries/Lists/VirtualizeUtils";
import { useState } from "react";

const DATA = [
    {
        _id: 1,
        foodimg: require('../../res/assets/food/lunch/1.jpg'),
        name: 'Masoor Dal',
        desc: 'Masoor dal is an important dal in the Indian subcontinent, which has a large vegetarian population',
        quantity: '0',
        price: 'Rs: 130',
        discount: '20%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 2,
        foodimg: require('../../res/assets/food/lunch/2.jpg'),
        name: 'Arhar Dal Or Toor Dal',
        desc: 'Skinned and split toovar or toor dal is the most widely-used form of Indian lentil. It is used in popular recipes like South India sambhar, Gujarati dals,etc.',
        quantity: '0',
        price: 'Rs: 150',
        discount: '25%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 3,
        foodimg: require('../../res/assets/food/lunch/3.jpg'),
        name: 'Urad Dal',
        desc: 'Urad dal (split black lentils) is a very popular Indian dal used to make dals, snacks like idlis and dosas to urad dal puris.',
        quantity: '0',
        price: 'Rs: 150',
        discount: '10%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 4,
        foodimg: require('../../res/assets/food/lunch/4.jpg'),
        name: 'Aloo Matar Sabzi',
        desc: 'Aloo mutter is a Punjabi dish from the Indian subcontinent which is made from potatoes and peas in a spiced creamy tomato based sauce.',
        quantity: '0',
        price: 'Rs: 70',
        discount: '10%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 5,
        foodimg: require('../../res/assets/food/lunch/5.jpg'),
        name: 'Rajma',
        desc: 'Rajma, the versatile kidney beans, are a reddish brown, strong-flavoured and hold their shape well even after cooking.',
        quantity: '0',
        price: 'Rs: 180',
        discount: '20%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 6,
        foodimg: require('../../res/assets/food/lunch/6.jpg'),
        name: 'Chole',
        desc: ' chole ki sabzi is a delicious tangy curry from the Punjabi cuisine and made with potatoes, white chickpeas, tomatoes, chilies.',
        quantity: '0',
        price: 'Rs: 100',
        discount: '20%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 7,
        foodimg: require('../../res/assets/food/lunch/7.jpg'),
        name: 'Matar Sabzi',
        desc: 'Green pea or matar is one such vegetable that diabetics may benefit from including in their diet.',
        quantity: '0',
        price: 'Rs: 40',
        discount: '30%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 8,
        foodimg: require('../../res/assets/food/lunch/8.jpg'),
        name: 'Gobhi Aloo Sabzi',
        desc: 'Aloo gobi is a vegetarian dish from the Indian subcontinent made with potatoes (aloo), cauliflower, and Indian spices.',
        quantity: '0',
        price: 'Rs: 50',
        discount: '20%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 9,
        foodimg: require('../../res/assets/food/lunch/9.jpg'),
        name: 'Kasifal Sabzi',
        desc: 'This kaddu or pumpkin sabzi is a favorite at home. It is also known as petha sabzi or kaddu ki sabzi.',
        quantity: '0',
        price: 'Rs: 50',
        discount: '0%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 10,
        foodimg: require('../../res/assets/food/lunch/10.jpg'),
        name: 'Tinde Sabzi',
        desc: 'Punjabi Style Tinda Sabzi is a flavourful sabzi, perfect for a quick weekday lunch. ',
        quantity: '0',
        price: 'Rs: 70',
        discount: '20%',
        addToCart: 'Add to Cart'
    }];




    const Lists = ({ item, addCartOnPress }) => {
        return (
            <View style={styles.data}>
                <TouchableOpacity style={styles.foodstyles}>
                    <Image source={item.foodimg} style={styles.foodimg} />
                    <View style={styles.contentstyle}>
                        <TouchableOpacity><Text style={styles.textstyle} >{item.name}</Text></TouchableOpacity>
                        <Text style={styles.descriptionstyle}>Description: {item.desc}</Text>
                        <Text style={styles.pricestyle}>Price: {item.price}</Text>
                        <Text style={styles.discountstyle}>Discount: {item.discount}</Text>
                        <View style={styles.incdecbutton}>
                            <TouchableOpacity onPress={addCartOnPress}><Text style={styles.addtocart}>{item.addToCart}</Text></TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
    
            </View>
    
        );
    
    }
    
    
    const lunch = ({ navigation }) => {
        const [cart, setCart] = useState([]);
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Image style={styles.image} source={require('../../res/assets/icon.jpg')} />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.searchbar}>
                            <TextInput
                                placeholder="Search Here..."
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { navigation.navigate('cart') }}>
                            <Image style={styles.cartimg} source={require('../../res/assets/cart.jpg')} />
                            {/* <Text style={styles.cartincdecstyle}>{totalQuantity}</Text> */}
                        </TouchableOpacity>
                    </View>
                </View>
    
                <View style={styles.boundary} />
    
                <View>
                    <View><Text style={styles.heading}>Breakfast</Text></View>
                    <FlatList
                        data={DATA}
                        renderItem={({ item, index }) =>
                            <Lists item={item}
                            // First of all create an array.
                            // secondly array consist of objects.
                            // Third we need to push objects in array by clicking onpress.
                                addCartOnPress={async() => {
                                    let obj = item
                                    obj.count = 0
                                    let tempcart=cart
                                    tempcart.push(obj)
                                    for( let index=0;index<tempcart.length;index++){
                                        if (tempcart[index]._id == obj._id) {
                                            tempcart[index].count=tempcart[index].count+1;
                                        }
                                        else{
                                            tempcart.push(obj)
                                        }
                                    }
                                    // console.log(obj);
                                    console.log(tempcart);
                                    navigation.navigate('Counter', {paramKey: tempcart})
                                }}
                            />}
                        keyExtractor={item => item._id}
                    />
                </View>
            </View>
        );
    
    }
    export default lunch;
    const styles = StyleSheet.create({
        container: {
            flex: 1,
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
        data: {
            margin: 5,
        },
        foodstyles: {
            flexDirection: 'row',
            borderColor: "black",
            borderWidth: 1,
            width: 395
        },
        heading: {
            color: 'black',
            fontSize: 40,
            textDecorationLine: 'underline',
            width: 150,
            marginLeft: 150,
        },
        foodimg: {
            height: 200,
            width: 170,
            borderRadius: 10,
            margin: 5
        },
        textstyle: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
            textDecorationLine: 'underline',
        },
        discountstyle: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
            margin: 10
        },
        contentstyle: {
            margin: 10
        },
        descriptionstyle: {
            margin: 5,
            width: 200,
            color: 'black'
        },
        pricestyle: {
            margin: 10,
            color: 'black',
            fontSize: 20
        },
        incdec: {
            borderWidth: 0.5,
            height: 30,
            width: 30,
            flexDirection: 'row',
            fontSize: 30,
            color: 'black',
        },
        incdecbutton: {
            flexDirection: "row",
            marginLeft: 50
        },
        cartincdecstyle: {
            color: 'white',
            backgroundColor: 'black',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            position: 'absolute',
            marginTop: 10,
            width: 15,
            height: 15,
            marginLeft: 40
        },
        addtocart: {
            borderWidth: 1,
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            margin: 10
        }
    
    })