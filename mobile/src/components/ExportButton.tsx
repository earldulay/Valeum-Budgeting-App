import React from 'react';

import {
TouchableOpacity,
Text,
StyleSheet
}
from 'react-native';

export default function ExportButton({
title,
onPress
}:any){

return(

<TouchableOpacity
style={styles.btn}
onPress={onPress}
>

<Text style={styles.text}>
{title}
</Text>

</TouchableOpacity>

);

}

const styles=StyleSheet.create({

btn:{

flex:1,

backgroundColor:'#F8C12A',

padding:16,

borderRadius:16,

margin:5,

alignItems:'center'

},

text:{
fontWeight:'700'
}

});