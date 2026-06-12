import React from 'react';

import {
View,
Text,
Switch,
StyleSheet
}
from 'react-native';

interface Props{

title:string;

value:boolean;

onValueChange:any;

}

export default function ToggleRow({
title,
value,
onValueChange
}:Props){

return(

<View style={styles.row}>

<Text style={styles.title}>
{title}
</Text>

<Switch

value={value}

onValueChange={
onValueChange
}

/>

</View>

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
justifyContent:'space-between'
},

title:{
fontSize:15
}

});