import React from 'react';

import {
View,
Text,
StyleSheet
}
from 'react-native';

interface Props{

title:string;

amount:string;

}

export default function BudgetLimitCard({
title,
amount
}:Props){

return(

<View style={styles.card}>

<Text style={styles.title}>
{title}
</Text>

<Text style={styles.amount}>
{amount}
</Text>

</View>

)

}

const styles=
StyleSheet.create({

card:{
flex:1,
backgroundColor:'#fff',
padding:18,
borderRadius:18,
margin:5
},

title:{
color:'#777'
},

amount:{
fontSize:22,
fontWeight:'700',
marginTop:8
}

});