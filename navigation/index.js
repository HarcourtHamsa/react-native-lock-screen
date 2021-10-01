import * as React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { colorScheme } from "react-native";

import LinkingConfiguration from "./LinkingConfiguration";

import LockScreen from "../screens/LockScreen";
import Home from "../screens/Home";

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="LockScreen"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LockScreen" component={LockScreen} />
    </Stack.Navigator>
  );
}
