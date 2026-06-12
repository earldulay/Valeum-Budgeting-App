import React from 'react';

import {

View,
TextInput,
TouchableOpacity

}
from 'react-native';

import {
Ionicons
}
from '@expo/vector-icons';

export default function ChatInput({
value,
onChangeText,
onSend
}:any){

return(

<View

style={{

flexDirection:'row',

padding:10,

backgroundColor:'#fff'

}}

>

<TextInput

value={value}

onChangeText={onChangeText}

placeholder="Ask Valeum AI..."

style={{

flex:1,

backgroundColor:'#F3F4F6',

padding:12,

borderRadius:16

}}

/>

<TouchableOpacity

onPress={onSend}

style={{

justifyContent:'center',

marginLeft:10

}}

>

<Ionicons

name="send"

size={24}

color="#F8C12A"

/>

</TouchableOpacity>

</View>

)

}