import React,
{
useState
}
from 'react';

import {

View,
Text,
ScrollView,
TouchableOpacity,
StyleSheet

}
from 'react-native';

import {
VictoryPie
}
from 'victory-native';

import AnalyticsCard
from '../../components/AnalyticsCard';

import CategoryRow
from '../../components/CategoryRow';

import ExportButton
from '../../components/ExportButton';

export default function AnalyticsScreen(){

const [period,setPeriod]
=
useState('Monthly');

const chartData=[

{
x:'Food',
y:40
},

{
x:'Shopping',
y:25
},

{
x:'Utilities',
y:15
},

{
x:'Transport',
y:20
}

];

return(

<ScrollView
style={styles.container}
>

<Text style={styles.title}>
Analytics
</Text>

<View style={styles.tabs}>

{
['Weekly',
'Monthly',
'Yearly']

.map(item=>(

<TouchableOpacity

key={item}

style={[

styles.tab,

period===item &&
styles.active

]}

onPress={()=>
setPeriod(item)
}

>

<Text>
{item}
</Text>

</TouchableOpacity>

))
}

</View>

<View style={styles.chartContainer}>

<VictoryPie

data={chartData}

innerRadius={70}

padAngle={3}

width={320}

height={320}

/>

</View>

<View style={styles.row}>

<AnalyticsCard

title="Income"

amount="₱20,000"

/>

<AnalyticsCard

title="Expenses"

amount="₱12,500"

/>

</View>

<View style={styles.row}>

<AnalyticsCard

title="Savings"

amount="₱7,500"

/>

<AnalyticsCard

title="AI Score"

amount="92%"

/>

</View>

<Text style={styles.section}>
Category Breakdown
</Text>

<CategoryRow

name="Food"

amount="₱5,000"

percentage="40%"

/>

<CategoryRow

name="Shopping"

amount="₱3,125"

percentage="25%"

/>

<CategoryRow

name="Transport"

amount="₱2,500"

percentage="20%"

/>

<CategoryRow

name="Utilities"

amount="₱1,875"

percentage="15%"

/>

<Text style={styles.section}>
Export Reports
</Text>

<View style={styles.row}>

<ExportButton

title="Export CSV"

onPress={()=>{}}

/>

<ExportButton

title="Download PDF"

onPress={()=>{}}

/>

</View>

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

title:{
fontSize:30,
fontWeight:'700',
marginBottom:20
},

tabs:{
flexDirection:'row',
marginBottom:20
},

tab:{
backgroundColor:'#fff',
padding:10,
borderRadius:12,
marginRight:10
},

active:{
backgroundColor:'#F8C12A'
},

chartContainer:{
alignItems:'center',
marginBottom:20
},

row:{
flexDirection:'row'
},

section:{
fontSize:18,
fontWeight:'700',
marginVertical:15
}

});