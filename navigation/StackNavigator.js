import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import ShoppingMall from "../screens/ShoppingMall";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function MainTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Trang chủ",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="home" size={24} color="black" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="ShoppingMall"
          component={ShoppingMall}
          options={{
            tabBarLabel: "Mall",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons name="shopping-outline" size={24} color="black" />
              ) : (
                <MaterialCommunityIcons name="shopping-outline" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Notify"
          component={ShoppingMall}
          options={{
            tabBarLabel: "Thông báo",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
              ) : (
                <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={ShoppingMall}
          options={{
            tabBarLabel: "Tôi",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons name="account-circle-outline" size={28} color="black" />
              ) : (
                <MaterialCommunityIcons name="account-circle-outline" size={28} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Tab" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

