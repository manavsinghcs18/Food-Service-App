// npm install @react-native-async-storage/async-storage
// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native
// npm install @react-native-picker/picker
// npm i react-redux

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './splashscreen/Splash';
import Login from '../src/screens/authentication/login';
import SignUp from '../src/screens/authentication/signUp';
import Forgotpassword from '../src/screens/authentication/forgotpassword';
import home from './home/home';
import Breakfast from './home/breakfast';
import Lunch from './home/lunch';
import Snaks from './home/snaks';
import Dinner from './home/dinner';
import cart from './cart/cart'
import Counter from './counter/Counter';
import { Provider } from 'react-redux';
import {store} from '../src/counter/Store'
import NotificationsScreen from './notification/NotificationScreen';
import Success from './successfullbooking/Success'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
          <Stack.Screen name="Splash" component={Splash}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
          <Stack.Screen name="home" component={home} />
          <Stack.Screen name="breakfast" component={Breakfast} />
          <Stack.Screen name="lunch" component={Lunch} />
          <Stack.Screen name="snaks" component={Snaks} />
          <Stack.Screen name="dinner" component={Dinner} />
          <Stack.Screen name="cart" component={cart} />
          <Stack.Screen name="Counter" component={Counter} />
          <Stack.Screen name="NotificationScreen" component={NotificationsScreen} />
          <Stack.Screen name="Success" component={Success}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;