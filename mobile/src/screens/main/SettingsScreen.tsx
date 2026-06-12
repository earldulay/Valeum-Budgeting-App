import React,
{
useState
}
from 'react';

import {

ScrollView,
Text,
View,
StyleSheet

}
from 'react-native';

import ToggleRow
from '../../components/ToggleRow';

import SettingRow
from '../../components/SettingRow';

import BudgetLimitCard
from '../../components/BudgetLimitCard';

export default function SettingsScreen(){

const [notifications,
setNotifications]
=
useState(true);

const [ocr,
setOcr]
=
useState(true);

const [darkMode,
setDarkMode]
=
useState(false);

return(

<ScrollView
style={styles.container}
>

<Text style={styles.header}>
Settings
</Text>

<View style={styles.profile}>

<Text style={styles.name}>
Earl
</Text>

<Text>
earl@email.com
</Text>

</View>

<Text style={styles.section}>
Budget Limits
</Text>

<View style={styles.row}>

<BudgetLimitCard

title="Daily"

amount="₱500"

/>

<BudgetLimitCard

title="Weekly"

amount="₱3,000"

/>

</View>

<View style={styles.row}>

<BudgetLimitCard

title="Monthly"

amount="₱10,000"

/>

</View>

<Text style={styles.section}>
Preferences
</Text>

<ToggleRow

title="Notifications"

value={notifications}

onValueChange={
setNotifications
}

/>

<ToggleRow

title="Receipt OCR"

value={ocr}

onValueChange={
setOcr
}

/>

<ToggleRow

title="Dark Mode"

value={darkMode}

onValueChange={
setDarkMode
}

/>

<Text style={styles.section}>
Account
</Text>

<SettingRow

title="Change Password"

icon="lock-closed"

/>

<SettingRow

title="Profile"

icon="person"

/>

<Text style={styles.section}>
Support
</Text>

<SettingRow

title="FAQ"

icon="help-circle"

/>

<SettingRow

title="Contact Support"

icon="mail"

/>

</ScrollView>

)

}

const styles=
StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor:'#F6F7F9'
},

header:{
fontSize:30,
fontWeight:'700',
marginBottom:20
},

profile:{
backgroundColor:'#fff',
padding:20,
borderRadius:20,
marginBottom:20
},

name:{
fontSize:22,
fontWeight:'700'
},

section:{
fontSize:18,
fontWeight:'700',
marginVertical:15
},

row:{
flexDirection:'row'
}

});