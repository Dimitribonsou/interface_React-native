import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigation} from "@react-navigation/stack";
import Ionicons from 'react-native-vector-icons/Ionicons';

// const stack=createStackNavigation();
const Tab = createBottomTabNavigator();
// const stack= createStackNavigation();

import HomeScreen from './page1';
import DetailsScreen from './detailsProduits';
// import Orders from './Commande2'
import liste from './commande'

import detailsResain from './detailsRaisain'
import Acceuil2 from './details2'
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        
        <Tab.Screen name="Acceuil" component={HomeScreen} options={{headerShown: false,  tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color="#ff00cc" size={30} />
            ),tabBarLabel:''}}/>
        {/* <Tab.Screen name="detailresains" component={detailsResain} options={{headerShown: false
            ,tabBarLabel:''}}/> */}
        <Tab.Screen name="Details" component={DetailsScreen} options={{headerShown:false,tabBarIcon:({color, size})=>(  <Ionicons name="archive-outline"  color="black" size={30} />),tabBarLabel:''}} />
        <Tab.Screen name="listepd" component={liste}  options={{headerShown:false,tabBarIcon:({color, size})=>(  <Ionicons  name="newspaper-outline" color="black" size={30} />),tabBarLabel:''}}/>
        <Tab.Screen name="Acceuil2" component={Acceuil2}  options={{headerShown:false,tabBarIcon:({color, size})=>(  <Ionicons name="caret-forward-outline"color="red" size={30} />),tabBarLabel:''}}/> 
      </Tab.Navigator>
      {/* <Ionicons name="home" size={30} color="blue" /> */}
    </NavigationContainer>

  );
}
