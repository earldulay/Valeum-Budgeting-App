import React from 'react';

import {
View,
Text,
StyleSheet
}
from 'react-native';

export default function SummaryCard(){

return(

<View style={styles.card}>

<Text style={styles.label}>
Available Balance
</Text>

<Text style={styles.balance}>
₱15,450.00
</Text>

<Text style={styles.sub}>
Updated Today
</Text>

</View>

)

}

const styles =
StyleSheet.create({

card:{

backgroundColor:'#F8C12A',

padding:24,

borderRadius:24,

marginBottom:20

},

label:{
fontSize:16
},

balance:{
fontSize:34,
fontWeight:'700',
marginTop:10
},

sub:{
marginTop:8
}

});