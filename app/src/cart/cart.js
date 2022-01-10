import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, ScrollView, FlatList } from "react-native";



// const Lists = (props) => {

//     const { item } = props;
//     return (
//         <View style={styles.data}>

//             <TouchableOpacity style={styles.foodstyles}>
//                 <Image source={item.foodimg} style={styles.foodimg} />
//                 <View style={styles.contentstyle}>
//                     <TouchableOpacity><Text style={styles.textstyle} >{item.name}</Text></TouchableOpacity>
//                     <Text style={styles.descriptionstyle}>Description: {item.desc}</Text>
//                     <Text style={styles.pricestyle}>Price: {item.price}</Text>
//                     <Text style={styles.discountstyle}>Discount: {item.discount}</Text>
//                     {/* <View style={styles.incdecbutton}>
//                         <TouchableOpacity  onPress={onSub}><Text style={styles.incdec}>-</Text></TouchableOpacity>
//                         <Text style={styles.incdec}>{item.quantity}</Text>
//                         <TouchableOpacity  onPress={onAdd}><Text style={styles.incdec}>+</Text></TouchableOpacity>
//                     </View> */}

//                 </View>
//             </TouchableOpacity>


//         </View>

//     );

// }
const cart = ({route, navigation }) => {
    // state = {
    //     DATA,
    // };
    // onSub = (item, index) => {
    //     const DATA = [...this.state.DATA];
    //     DATA[index].quantity -= 1;
    //     this.setState({ DATA });
    // }
    // onAdd = (item, index) => {
    //     const DATA = [...this.state.DATA];
    //     DATA[index].quantity += 1;
    //     this.setState({ DATA });
    // }

    // const { DATA } = this.state;
    // let totalQuantity = 0;
    // DATA.forEach((item) => {
    //     totalQuantity += item.quantity;
    // })
    return (
        // <View style={styles.container}>
        //     <View style={styles.header}>
        //         <View>
        //             <Image style={styles.image} source={require('../../res/assets/icon.jpg')} />
        //         </View>
        //         <View>
        //             <TouchableOpacity style={styles.searchbar}>
        //                 <TextInput>Search Here.</TextInput>
        //             </TouchableOpacity>
        //         </View>
        //         <View>
        //             <TouchableOpacity>
        //                 <Image style={styles.cartimg} source={require('../../res/assets/cart.jpg')} />
        //             </TouchableOpacity>
        //         </View>
        //     </View>

        //     <View style={styles.boundary} />
        //     <View>
        //         <View><Text style={styles.heading}>Your Cart Item</Text></View>
        //         <FlatList

        //             data={DATA}
        //             renderItem={({ item, index }) =>
        //                 <Lists
        //                     item={item}

        //                 // onSub={() => this.onSub(item, index)}
        //                 // onAdd={() => this.onAdd(item, index)}
        //                 />}
        //             keyExtractor={item => item._id}
        //         />
        //     </View>
        //     {/* <View style={styles.boundary} /> */}
        //     {/* Footer */}
        //     {/* <View >
        //         <TouchableOpacity style={styles.footer}>
        //             <Text>Place Your Order</Text>
        //         </TouchableOpacity>
        //     </View> */}
        // </View>
        <View>
        <Text>
          {route.params.paramKey}
        </Text>
        </View>
        


    );
}

export default cart;
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
        alignItems: "center"
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
        // backgroundColor: 'grey',
        borderColor: "black",
        borderWidth: 1,
        width: 395
    },
    body: {
        padding: 2
    },
    heading: {
        color: 'black',
        fontSize: 40,
        textDecorationLine: 'underline',
        width: 250,
        marginLeft: 120
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
        // backgroundColor: 'green'
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


    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },

    incdec: {
        borderWidth: 0.5,
        height: 30,
        width: 30,
        flexDirection: 'row',
        fontSize: 30,
        color: 'black',
        // backgroundColor:'yellow'
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
    }

})