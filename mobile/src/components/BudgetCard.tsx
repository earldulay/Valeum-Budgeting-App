import React from 'react';

import {
View,
Text,
StyleSheet
}
from 'react-native';

interface Props{

title:string;

value:string;

}

export default function BudgetCard({
title,
value
}:Props){

return(

<View style={styles.card}>

<Text style={styles.title}>
{title}
</Text>

<Text style={styles.value}>
{value}
</Text>

</View>

)

}

const styles =
StyleSheet.create({

card:{

flex:1,

backgroundColor:'#fff',

padding:18,

borderRadius:18,

margin:5,

elevation:3

},

title:{
fontSize:14,
color:'#777'
},

value:{
fontSize:20,
fontWeight:'700',
marginTop:8
}

});