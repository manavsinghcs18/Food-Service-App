import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./Actions";


const Counter = (props, {navigation, route}) => {
  const [cart, setCart] = useState(props.route.params.paramKey)
  const data = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image style={styles.image} source={require('../../res/assets/icon.jpg')} />
        </View>
        <View>
          <TouchableOpacity style={styles.searchbar}>
            <TextInput>Search Here.</TextInput>
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
      <View style={styles.body}>
        <View>
          <Text style={styles.heading}>Your Cart</Text>
        </View>
        {cart != undefined && <FlatList
          data={cart}
          renderItem={({ item }) =>
            <View style={styles.data}>
              <TouchableOpacity style={styles.foodstyles}>
                <View style={styles.contentstyle}>
                  <Text style={styles.textstyle}>Name: {item.name}</Text>
                  <Text style={styles.descriptionstyle}>Description: {item.desc}</Text>
                  <Text style={styles.pricestyle}>Price: {item.price}</Text>
                  <Text style={styles.discountstyle}>Discount: {item.discount}</Text>
                  <Text style={styles.quantitystyle}>Quantity: {item.count}</Text>
                </View>
              </TouchableOpacity>
            </View>
          } />}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => { navigation.navigate('Success') }}>
          <Text style={styles.footertextstyle}>Place Your Order</Text>
        </TouchableOpacity>
      </View>
    </View>

  );

};

export default Counter;

const styles = StyleSheet.create({

  container: {
    flex: 1,

  },
  data: {
    margin: 5,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  contentstyle: {
    margin: 10
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  quantitystyle:{
    color:'black',
    fontSize:20,

  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
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
  foodstyles: {
    flexDirection: 'row',
    borderColor: "black",
    borderWidth: 1,
    width: 395
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
  textstyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    // textDecorationLine: 'underline',
  },
  descriptionstyle: {
    margin: 5,
    width: 200,
    color: 'black',
  },
  pricestyle: {
    margin: 10,
    color: 'black',
    fontSize: 20
  },
  discountstyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10
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
  body: {
    padding: 2
  },
  heading: {
    color: 'black',
    fontSize: 40,
    textDecorationLine: 'underline',
    width: 150,
    marginLeft: 150
  },
  footer: {
    backgroundColor: 'orange',
    borderColor: 'black',
    borderWidth: 1,
  },
  footertextstyle: {
    color: 'black',
    fontSize: 30,
    height: 40,
    marginLeft: 120,
    marginTop: 10,
  }
});