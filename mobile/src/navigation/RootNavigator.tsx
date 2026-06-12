import React from 'react';

import {
NavigationContainer
}
from
'@react-navigation/native';

import {
useAuthStore
}
from
'../store/authStore';

import AuthNavigator
from './AuthNavigator';

import BottomTabs
from './BottomTabs';

import PlaceholderHome
from
'../screens/main/PlaceholderHome';

export default function RootNavigator(){

const user =
useAuthStore(
(state)=>
state.user
);

return(

<NavigationContainer>

{
user
?
<BottomTabs/>
:
<AuthNavigator/>
}

</NavigationContainer>

)

}