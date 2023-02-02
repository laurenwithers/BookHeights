import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

import AddBook from "../screens/AddBook";
import Explore from "../screens/Explore";
import BookCase from "../screens/Bookcase";
import Progress from "../screens/Progress";
import Login from "../screens/Login";
import SignUp from"../screens/SignUp";
import Home from "../screens/Home";


const Tabs = createBottomTabNavigator();
const TabsNavigator = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Explore" component={Explore} />
      <Tabs.Screen name="AddBook" component={AddBook} />
      <Tabs.Screen name="Book Case" component={BookCase} />
      <Tabs.Screen name="Profile" component={Progress} />
      <Tabs.Screen name="Login" component={Login} />
    </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default TabsNavigator;