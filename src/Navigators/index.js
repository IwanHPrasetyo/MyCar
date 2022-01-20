import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator();

import StartUpScreen from '../Screens/StartUp';
import DashboardScreen from '../Screens/Dashboard';
import ProductScreen from '../Screens/Product';

const MainNavigation = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <MainStack.Screen name="StartUp" component={StartUpScreen} />
      <MainStack.Screen name="Dashboard" component={DashboardScreen} />
      <MainStack.Screen name="Product" component={ProductScreen} />
    </MainStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};
