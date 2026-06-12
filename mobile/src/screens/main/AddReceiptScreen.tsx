import React,
{
useState
}
from 'react';

import {

View,
Text,
Image,
TouchableOpacity,
StyleSheet,
Alert

}
from 'react-native';

import * as ImagePicker
from 'expo-image-picker';

import api
from '../../services/api';

export default function AddReceiptScreen(){

const [image,
setImage]
=
useState<string | null>(null);

const [loading,
setLoading]
=
useState(false);

const [result,
setResult]
=
useState<any>(null);

async function pickImage(){

const response=
await ImagePicker.launchCameraAsync({

quality:1

});

if(!response.canceled){

setImage(
response.assets[0].uri
);

}

}

async function scanReceipt(){

if(!image){

Alert.alert(
'Select receipt first'
);

return;

}

setLoading(true);

const formData=
new FormData();

formData.append(
'receipt',
{
uri:image,
name:'receipt.jpg',
type:'image/jpeg'
} as any
);

try{

const response=
await api.post(

'/receipts/scan',

formData,

{
headers:{
'Content-Type':
'multipart/form-data'
}
}

);

setResult(
response.data
);

}catch(error){

console.log(error);

}

setLoading(false);

}

return(

<View style={styles.container}>

<Text style={styles.title}>
Receipt Scanner
</Text>

<TouchableOpacity

style={styles.capture}

onPress={pickImage}

>

<Text>
Capture Receipt
</Text>

</TouchableOpacity>

{
image &&

<Image

source={{
uri:image
}}

style={styles.image}

/>
}

<TouchableOpacity

style={styles.scanBtn}

onPress={scanReceipt}

>

<Text>
{
loading
?
'Scanning...'
:
'Scan Receipt'
}
</Text>

</TouchableOpacity>

{
result &&

<View style={styles.result}>

<Text>
Merchant:
{result.merchant}
</Text>

<Text>
Amount:
₱{result.amount}
</Text>

<Text>
Category:
{result.category}
</Text>

</View>

}

</View>

)

}

const styles=
StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor:'#F6F7F9'
},

title:{
fontSize:28,
fontWeight:'700',
marginBottom:20
},

capture:{
backgroundColor:'#fff',
padding:20,
borderRadius:20,
alignItems:'center'
},

image:{
height:250,
marginTop:20,
borderRadius:20
},

scanBtn:{
backgroundColor:'#F8C12A',
padding:16,
borderRadius:20,
alignItems:'center',
marginTop:20
},

result:{
backgroundColor:'#fff',
padding:20,
marginTop:20,
borderRadius:20
}

});