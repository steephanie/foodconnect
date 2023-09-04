import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Login } from '../Login';
import { Register } from '../Register';
import { Password } from '../Password';
import { Term } from '../Term';
import { Home } from '../TabHome';
import { Account } from '../TabAccount';
import { Search } from '../TabSearch';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Home} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          const iconColor = focused ? "#41245C" : "#555"
          return (
            <Ionicons name="home" size={20} color={iconColor} />
          )
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: '500',
        },
        tabBarActiveTintColor: "#41245C",
        tabBarInactiveTintColor: "#555",
      }} />
      <Tab.Screen name="Busca" component={Search} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          const iconColor = focused ? "#41245C" : "#555"
          return (
            <Ionicons name="search" size={20} color={iconColor} />
          )
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: '500',
        },
        tabBarActiveTintColor: "#41245C",
        tabBarInactiveTintColor: "#555",
      }} />
      <Tab.Screen name="Conta" component={Account} options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          const iconColor = focused ? "#41245C" : "#555"
          return (
            <Ionicons name="person" size={20} color={iconColor} />
          )
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: '500',
        },
        tabBarActiveTintColor: "#41245C",
        tabBarInactiveTintColor: "#555",
      }} />
    </Tab.Navigator>
  );
};

const StackNavication = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="Term" component={Term} />
    </Stack.Navigator>
  );
};

export default StackNavication;