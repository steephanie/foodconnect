import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Login } from '../../pages/Login';
import { Register } from '../../pages/Register';
import { Password } from '../../pages/Password';
import { Term } from '../../pages/Term';
import { Home } from '../../pages/TabHome';
import { Account } from '../../pages/TabAccount';
import { Search } from '../../pages/TabSearch';
import { InstituteUrso } from '../../pages/Institute/urso';
import { InstituteJuarez } from '../../pages/Institute/juarez';
import { InstituteOutback } from '../../pages/Institute/outback';
import { SucessInstitute } from '../../pages/SucessInstitute';
import { AskedQuestions } from '../../pages/AskedQuestions';
import { MyCadastre } from '../../pages/MyCadastre';
import { MyFreelas } from '../../pages/MyFreelas';
import { SucessRegister } from '../../pages/SucessRegister';


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
      <Stack.Screen name="InstituteUrso" component={InstituteUrso} />
      <Stack.Screen name="InstituteJuarez" component={InstituteJuarez} />
      <Stack.Screen name="InstituteOutback" component={InstituteOutback} />
      <Stack.Screen name="SucessInstitute" component={SucessInstitute} />
      <Stack.Screen name="AskedQuestions" component={AskedQuestions} />
      <Stack.Screen name="MyCadastre" component={MyCadastre} />
      <Stack.Screen name="MyFreelas" component={MyFreelas} />
      <Stack.Screen name="SucessRegister" component={SucessRegister} />
      
    </Stack.Navigator>
  );
};

export default StackNavication;