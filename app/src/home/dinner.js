import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Button } from "react-native";
import { keyExtractor } from "react-native/Libraries/Lists/VirtualizeUtils";
import { useState } from "react";

const DATA = [
    {
        _id: 1,
        foodimg: require('../../res/assets/food/dinner/1.jpg'),
        name: 'Malai Paneer',
        desc: 'It is a paneer curry prepared in a fresh milk cream based rich and spicy gravy where almond and cashew nut paste brings in rich texture while dried fenugreek leaves bring a subtle but definite flavor.',
        quantity: '0',
        price: 'Rs: 170',
        discount: '20%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 2,
        foodimg: require('../../res/assets/food/dinner/2.jpg'),
        name: 'Palak Paneer',
        desc: 'Palak Paneer is one of the most popular Indian dish made with succulent paneer cubes (Indian cottage cheese) in a smooth spinach sauce.',
        quantity: '0',
        price: 'Rs: 150',
        discount: '25%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 3,
        foodimg: require('../../res/assets/food/dinner/3.jpg'),
        name: 'Kadhai Paneer',
        desc: 'Kadai paneer is a simple yet amazingly flavorful paneer dish made by cooking paneer and bell peppers with fresh ground spices known as kadai Paneer.',
        quantity: '0',
        price: 'Rs: 150',
        discount: '10%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 4,
        foodimg: require('../../res/assets/food/dinner/4.jpg'),
        name: 'Paneer Tikka',
        desc: 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor.',
        quantity: '0',
        price: 'Rs: 100',
        discount: '10%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 5,
        foodimg: require('../../res/assets/food/dinner/5.jpg'),
        name: 'Masala Gobhi',
        desc: 'Aloo gobi is a vegetarian dish from the Indian subcontinent made with potatoes (aloo), cauliflower, and Indian spices.',
        quantity: '0',
        price: 'Rs: 80',
        discount: '20%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 6,
        foodimg: require('../../res/assets/food/dinner/6.jpg'),
        name: 'Patta Gobhi',
        desc: 'patta gobhi matar recipe with step by step photos. a home-cooked dry sabzi recipe of cabbage and green peas.',
        quantity: '0',
        price: 'Rs: 80',
        discount: '20%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 7,
        foodimg: require('../../res/assets/food/dinner/7.jpg'),
        name: 'Gajar aloo',
        desc: 'Aloo gajar delicious dry sabzi or veggie preparation with potatoes and carrots.',
        quantity: '0',
        price: 'Rs: 80',
        discount: '30%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 8,
        foodimg: require('../../res/assets/food/dinner/8.jpg'),
        name: 'Tawa Roti',
        desc: 'A charred whole wheat flour Indian bread that is soft and can be served along with any kind of curries.',
        quantity: '0',
        price: 'Rs: 10',
        discount: '0%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 9,
        foodimg: require('../../res/assets/food/dinner/9.jpg'),
        name: 'Rumali Roti',
        desc: 'Rumali roti is one of the unleavened Indian breads that is made traditionally in the Awadhi, Mughlai and Hyderabadi cuisine.',
        quantity: '0',
        price: 'Rs: 15',
        discount: '0%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 10,
        foodimg: require('../../res/assets/food/dinner/10.jpg'),
        name: 'Biryani',
        desc: 'Biryani is a mixed rice dish originating in India. It is made with spices, rice, and meat, or eggs or vegetables such as potatoes in certain regional varieties.',
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
    
    
    const dinner = ({ navigation }) => {
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
    export default dinner;
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