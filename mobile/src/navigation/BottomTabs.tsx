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

import AdvisorScreen
from '../screens/main/AdvisorScreen';

import AddReceiptScreen
from '../screens/main/AddReceiptScreen';

import SettingsScreen
from '../screens/main/SettingsScreen';

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

<Tab.Screen

name="Advisor"

component={AdvisorScreen}

options={{
tabBarIcon:({
color,
size
})=>(
<Ionicons
name="chatbubble"
size={size}
color={color}
/>
)
}}

/>

<Tab.Screen
name="Add"
component={AddReceiptScreen}
options={{
tabBarIcon:({
color,
size
})=>(
<Ionicons
name="camera"
size={size}
color={color}
/>
)
}}
/>

<Tab.Screen

name="Settings"

component={SettingsScreen}

options={{
tabBarIcon:({
color,
size
})=>(
<Ionicons
name="settings"
size={size}
color={color}
/>
)
}}

/>
</Tab.Navigator>

)

}