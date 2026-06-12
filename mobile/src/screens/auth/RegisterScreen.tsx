import React,
{
 useState
}
from 'react';

import {
 View,
 Text,
 StyleSheet
}
from 'react-native';

import CustomInput
from '../../components/CustomInput';

import PrimaryButton
from '../../components/PrimaryButton';

export default function RegisterScreen(){

const [name,setName]
=
useState('');

const [email,setEmail]
=
useState('');

const [password,
setPassword]
=
useState('');

return(

<View style={styles.container}>

<Text style={styles.title}>
Create Account
</Text>

<CustomInput
placeholder="Full Name"
value={name}
onChangeText={setName}
/>

<CustomInput
placeholder="Email"
value={email}
onChangeText={setEmail}
/>

<CustomInput
placeholder="Password"
secureTextEntry
value={password}
onChangeText={setPassword}
/>

<PrimaryButton
title="Register"
onPress={()=>{}}
/>

</View>

)

}

const styles =
StyleSheet.create({

container:{
flex:1,
padding:24,
justifyContent:'center'
},

title:{
fontSize:28,
fontWeight:'700',
marginBottom:20
}

});