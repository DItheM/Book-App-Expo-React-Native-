import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import RegisterConfirm from "./screens/RegisterConfirm";
import Loading from "./screens/Loading";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Loading">
      <Stack.Group>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterConfirm" component={RegisterConfirm} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
