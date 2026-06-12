import React from 'react';

import {
View,
Text,
StyleSheet
} from 'react-native';

interface Props{
message:string;
isUser:boolean;
}

export default function ChatBubble({
message,
isUser
}:Props){

return(

<View

style={[
styles.container,

isUser
? styles.user
: styles.bot
]}

>

<Text style={styles.text}>
{message}
</Text>

</View>

)

}

const styles=StyleSheet.create({

container:{
padding:14,
marginVertical:6,
maxWidth:'80%',
borderRadius:18
},

user:{
alignSelf:'flex-end',
backgroundColor:'#F8C12A'
},

bot:{
alignSelf:'flex-start',
backgroundColor:'#FFFFFF'
},

text:{
fontSize:15,
lineHeight:22
}

});