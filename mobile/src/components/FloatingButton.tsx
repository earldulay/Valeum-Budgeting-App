import React from 'react';

import {
TouchableOpacity,
StyleSheet
}
from 'react-native';

import {
Ionicons
}
from '@expo/vector-icons';

export default function FloatingButton({
onPress
}:any){

return(

<TouchableOpacity
style={styles.fab}
onPress={onPress}
>

<Ionicons
name="add"
size={32}
color="#000"
/>

</TouchableOpacity>

)

}

const styles =
StyleSheet.create({

fab:{

position:'absolute',

bottom:90,

right:20,

backgroundColor:'#F8C12A',

width:65,

height:65,

borderRadius:35,

justifyContent:'center',

alignItems:'center',

elevation:10

}

});