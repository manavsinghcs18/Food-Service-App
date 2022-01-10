import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput,FlatList } from 'react-native';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./Actions";


const Counter = (props,{ route, navigation }) => {
  const[cart,setCart]=useState(props.route.params.paramKey)
  const data = useSelector(state => state);
  const dispatch = useDispatch();
  // console.log(JSON.stringify(cart))
// console.log("Data" + JSON.stringify(props.route.params.paramKey))
  return (
    // <SafeAreaView style={styles.background}>
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
        <View><Text style={styles.heading}>Your Cart</Text></View>
        {/* <Text>
          {props.route.params.paramKey}
        </Text>
        <Pressable onPress={() => dispatch(increment())}>
          <Text>+</Text>
        </Pressable>
        <Text>{data.counter}</Text>
        <Pressable onPress={() => dispatch(decrement())}>
          <Text>-</Text>
        </Pressable> */}
        {cart!=undefined && <FlatList 
        data={cart} 
        renderItem= {({item}) => 
          <View>
            <Text>{item.name}</Text>
            <Text>{item.desc}</Text>
            <Text>{item.price}</Text>
            <Text>{item.discount}</Text>
            <Text>{item.count}</Text>
          </View>
        }/>}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={()=> {navigation.navigate('Success')}}>
          <Text style={styles.footertextstyle}>Place Your Order</Text>
        </TouchableOpacity>
      </View>
    </View>

    // </SafeAreaView>
  );

};

export default Counter;

const styles = StyleSheet.create({
  // background: {
  //   flex: 1,
  // },
  container: {
    flex: 1,

  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
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
  footer:{
    backgroundColor:'orange',
    borderColor:'black',
    borderWidth:1,
    marginTop:630
  },
  footertextstyle:{
    color:'black',
    fontSize:30,
    height:40,
    marginLeft:120,
    marginTop:10,
  }
});