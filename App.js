import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Login from './component/Login';
import Signup from './component/Signup';

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="login" component={LoginScreen} />
        <Tab.Screen name="signup" component={SignupScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const LoginScreen = () => (
  <View style={{padding: 10}}>
    <Login />
  </View>
);

const SignupScreen = () => (
  <View style={{padding: 10}}>
    <Signup />
  </View>
);

export default App;
