import React from 'react';

import {
View,
Text,
StyleSheet
}
from 'react-native';

interface Props{

merchant:string;

amount:string;

date:string;

}

export default function TransactionItem({
merchant,
amount,
date
}:Props){

return(

<View style={styles.row}>

<View>

<Text style={styles.merchant}>
{merchant}
</Text>

<Text style={styles.date}>
{date}
</Text>

</View>

<Text style={styles.amount}>
{amount}
</Text>

</View>

)

}

const styles =
StyleSheet.create({

row:{

backgroundColor:'#fff',

padding:16,

borderRadius:16,

marginBottom:12,

flexDirection:'row',

justifyContent:'space-between'

},

merchant:{
fontSize:16,
fontWeight:'600'
},

date:{
fontSize:12,
color:'#888'
},

amount:{
fontWeight:'700',
fontSize:16
}

});