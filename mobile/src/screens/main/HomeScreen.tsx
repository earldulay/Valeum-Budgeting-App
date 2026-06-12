import React from 'react';

import {

View,
Text,
ScrollView,
StyleSheet

}
from 'react-native';

import DashboardHeader
from '../../components/DashboardHeader';

import SummaryCard
from '../../components/SummaryCard';

import BudgetCard
from '../../components/BudgetCard';

import TransactionItem
from '../../components/TransactionItem';

import FloatingButton
from '../../components/FloatingButton';

export default function HomeScreen(){

return(

<View style={{flex:1}}>

<ScrollView
style={styles.container}
>

<DashboardHeader/>

<SummaryCard/>

<Text style={styles.section}>
Budget Overview
</Text>

<View style={styles.grid}>

<BudgetCard
title="Weekly Spend"
value="₱2,450"
/>

<BudgetCard
title="Monthly Budget"
value="₱10,000"
/>

</View>

<View style={styles.grid}>

<BudgetCard
title="AI Score"
value="92%"
/>

<BudgetCard
title="Savings"
value="₱4,000"
/>

</View>

<Text style={styles.section}>
Recent Transactions
</Text>

<TransactionItem

merchant="Jollibee"

amount="- ₱250"

date="Today"

/>

<TransactionItem

merchant="Shopee"

amount="- ₱800"

date="Yesterday"

/>

<TransactionItem

merchant="Allowance"

amount="+ ₱5,000"

date="June 1"

/>

<TransactionItem

merchant="Globe"

amount="- ₱999"

date="May 30"

/>

</ScrollView>

<FloatingButton
onPress={()=>{}}
/>

</View>

)

}

const styles =
StyleSheet.create({

container:{
flex:1,
padding:20,
backgroundColor:'#F6F7F9'
},

section:{
fontSize:18,
fontWeight:'700',
marginBottom:10,
marginTop:10
},

grid:{
flexDirection:'row'
}

});