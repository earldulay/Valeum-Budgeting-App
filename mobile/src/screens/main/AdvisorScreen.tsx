
import React,
{
useState
}
from 'react';

import {

View,
FlatList,
Text

}
from 'react-native';

import ChatBubble
from '../../components/ChatBubble';

import ChatInput
from '../../components/ChatInput';

import TypingIndicator
from '../../components/TypingIndicator';

import {
askAI
}
from '../../services/ValAIapi';

export default function AdvisorScreen(){

const [message,
setMessage]
=
useState('');

const [loading,
setLoading]
=
useState(false);

const [messages,
setMessages]
=
useState([

{
id:'1',

text:
'Hello! I am your financial advisor.',

isUser:false
}

]);

async function send(){

if(!message.trim())
return;

const userMsg={

id:Date.now().toString(),

text:message,

isUser:true

};

setMessages(
prev=>[
...prev,
userMsg
]
);

const current=
message;

setMessage('');

setLoading(true);

try{

const result=
await askAI(
current
);

const aiMsg={

id:
(Date.now()+1)
.toString(),

text:
result.reply,

isUser:false

};

setMessages(
prev=>[
...prev,
aiMsg
]
);

}catch(err){

console.log(err);

}

setLoading(false);

}

return(

<View
style={{
flex:1,
backgroundColor:'#F6F7F9'
}}
>

<FlatList

data={messages}

keyExtractor={
item=>item.id
}

renderItem={({item})=>(

<ChatBubble

message={item.text}

isUser={item.isUser}

/>

)}

/>

{
loading &&
<TypingIndicator/>
}

<ChatInput

value={message}

onChangeText={setMessage}

onSend={send}

/>

</View>

)

}