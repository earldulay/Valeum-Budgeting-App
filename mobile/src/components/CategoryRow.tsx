import React from 'react';

import {
View,
Text,
StyleSheet
} from 'react-native';

interface Props{
name:string;
amount:string;
percentage:string;
}

export default function CategoryRow({
name,
amount,
percentage
}:Props){

return(

<View style={styles.row}>

<View>

<Text style={styles.name}>
{name}
</Text>

<Text style={styles.amount}>
{amount}
</Text>

</View>

<Text style={styles.percent}>
{percentage}
</Text>

</View>

);

}

const styles=StyleSheet.create({

row:{
backgroundColor:'#fff',
padding:16,
borderRadius:16,
marginBottom:10,
flexDirection:'row',
justifyContent:'space-between'
},

name:{
fontWeight:'600',
fontSize:16
},

amount:{
color:'#666',
marginTop:4
},

percent:{
fontWeight:'700'
}

});