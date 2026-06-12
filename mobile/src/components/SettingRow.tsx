import React from 'react';

import {
View,
Text,
TouchableOpacity,
StyleSheet
}
from 'react-native';

import {
Ionicons
}
from '@expo/vector-icons';

interface Props{

title:string;

icon:any;

onPress?:()=>void;

}

export default function SettingRow({
title,
icon,
onPress
}:Props){

return(

<TouchableOpacity
style={styles.row}
onPress={onPress}
>

<View
style={styles.left}
>

<Ionicons
name={icon}
size={22}
/>

<Text
style={styles.title}
>
{title}
</Text>

</View>

<Ionicons
name="chevron-forward"
/>

</TouchableOpacity>

)

}

const styles=
StyleSheet.create({

row:{
backgroundColor:'#fff',
padding:18,
borderRadius:18,
marginBottom:10,
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center'
},

left:{
flexDirection:'row',
alignItems:'center'
},

title:{
marginLeft:12,
fontSize:15
}

});