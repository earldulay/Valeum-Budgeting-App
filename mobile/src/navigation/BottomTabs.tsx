import React from 'react';

import {
createBottomTabNavigator
}
from
'@react-navigation/bottom-tabs';

import {
Ionicons
}
from
'@expo/vector-icons';

import HomeScreen
from
'../screens/main/HomeScreen';

import AnalyticsScreen
from '../screens/main/AnalyticsScreen';

const Tab =
createBottomTabNavigator();

export default function BottomTabs(){

return(

<Tab.Navigator

screenOptions={{

headerShown:false,

tabBarActiveTintColor:
'#F8C12A'

}}

>

<Tab.Screen

name="Home"

component={HomeScreen}

options={{
tabBarIcon:({
color,size
})=>(
<Ionicons
name="home"
size={size}
color={color}
/>
)
}}

/>
<Tab.Screen

name="Analytics"

component={AnalyticsScreen}

options={{
tabBarIcon:({
color,size
})=>(
<Ionicons
name="pie-chart"
size={size}
color={color}
/>
)
}}

/>

</Tab.Navigator>

)

}