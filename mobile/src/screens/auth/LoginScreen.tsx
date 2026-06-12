import React,
{
 useState
}
from 'react';

import {
useAuthStore
}
from '../../store/authStore';
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

import ScreenContainer
from '../../components/ScreenContainer';

import {
 COLORS
}
from '../../theme/colors';

export default function LoginScreen(
{
 navigation
}:any
){

const login =
useAuthStore(
state=>state.login
);

const [email,setEmail]
=
useState('');

const [password,
setPassword]
=
useState('');

return(

<ScreenContainer>

<View style={styles.container}>

<Text style={styles.logo}>
VALEUM
</Text>

<Text style={styles.title}>
Welcome Back
</Text>

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

title="Login"

onPress={()=>
login(
{
name:'Earl'
},
'demoToken'
)
}

/>

<Text
style={styles.link}
onPress={()=>
navigation.navigate(
'Register'
)
}
>
Create Account
</Text>

</View>

</ScreenContainer>

)

}

const styles =
StyleSheet.create({

container:{
flex:1,
justifyContent:'center',
padding:24
},

logo:{
fontSize:36,
fontWeight:'bold',
textAlign:'center',
marginBottom:20
},

title:{
fontSize:28,
fontWeight:'700',
marginBottom:20
},

link:{
textAlign:'center',
marginTop:20,
color:'blue'
}

});