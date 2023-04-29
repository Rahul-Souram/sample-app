import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Profile from './components/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='LandingPage'>
    <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
  </Stack.Navigator>
  </NavigationContainer>
  );
}
