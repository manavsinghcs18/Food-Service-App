import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Button } from "react-native";
import { keyExtractor } from "react-native/Libraries/Lists/VirtualizeUtils";
import { useState } from "react";

const DATA = [
    {
        _id: 1,
        foodimg: require('../../res/assets/food/breakfast/1.jpg'),
        name: 'Idli Sambhar and Chutney',
        desc: 'It is a kind of south indian breakfast made up of suji, nariyal and many vegitables',
         
        price: 'Rs: 120',
        discount: '20%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 2,
        foodimg: require('../../res/assets/food/breakfast/2.jpg'),
        name: 'Dhosa Sambhar',
        desc: 'A dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice.',
         
        price: 'Rs: 150',
        discount: '25%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 3,
        foodimg: require('../../res/assets/food/breakfast/3.jpg'),
        name: 'Kachodi Sabzi',
        desc: 'Aloo ki sabzi with kachori, an Indian street food potato curry served with lentil stuffed deep fried pastry.',
         
        price: 'Rs: 50',
        discount: '10%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 4,
        foodimg: require('../../res/assets/food/breakfast/4.jpg'),
        name: 'Aloo Paratha and curd',
        desc: 'This potato stuffed flatbread is a popular Indian breakfast that is so good.',
         
        price: 'Rs: 70',
        discount: '10%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 5,
        foodimg: require('../../res/assets/food/breakfast/5.jpg'),
        name: 'Uttapam',
        desc: 'Uttapam are savory pancakes with crispy golden edges and a pillowy soft center topped with veggies.',
         
        price: 'Rs: 100',
        discount: '20%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 6,
        foodimg: require('../../res/assets/food/breakfast/6.jpg'),
        name: 'Aloo Matar and Poori',
        desc: 'Aloo matar is a simple dish made by ghee rice, plain rice, poori, roti, paratha or even with bread.',
         
        price: 'Rs: 100',
        discount: '20%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 7,
        foodimg: require('../../res/assets/food/breakfast/7.jpg'),
        name: 'Dhokla',
        desc: 'Dhokla is a vegetarian culinary dish that is found mainly in the Indian state of Gujarat and parts of adjacent states.',
         
        price: 'Rs: 30',
        discount: '30%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 8,
        foodimg: require('../../res/assets/food/breakfast/8.jpg'),
        name: 'Poha',
        desc: 'Poha is flattened rice that is steam cooked with onions, spices and herbs.',
         
        price: 'Rs: 50',
        discount: '20%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 9,
        foodimg: require('../../res/assets/food/breakfast/9.jpg'),
        name: 'Oats',
        desc: 'The oat sometimes called the common oat, is a species of cereal grain grown for its seed, which is known by the same name.',
         
        price: 'Rs: 20',
        discount: '0%',
        addToCart: 'Add to Cart'
    },
    {
        _id: 10,
        foodimg: require('../../res/assets/food/breakfast/10.jpg'),
        name: 'Omelette',
        desc: 'An omelette (also spelled omelet) is a dish made from beaten eggs, fried with butter or oil in a frying pan',
         
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


const breakfast = ({ navigation }) => {
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
                                        // await setCart(tempcart)
                                    }
                                    else{
                                        // console.log(tempcart)
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
export default breakfast;
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