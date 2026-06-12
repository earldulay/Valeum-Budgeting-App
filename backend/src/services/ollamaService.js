const ollama =
require('ollama');

async function analyzeBudget(data){

const context=`

Monthly Budget:
₱${settings.monthly_limit}

Current Spending:
₱${expenses}

Remaining:
₱${settings.monthly_limit-expenses}

`;

const response =
await ollama.chat({

model:'llama3',

messages:[

{
role:'system',
content:`

You are Valeum AI.

You are a budgeting expert.

Analyze spending habits.

Provide:

1. Spending insights

2. Savings recommendations

3. Overspending warnings

4. Budget advice

Keep answers concise.

Use Philippine Peso.

`
},

{
role:'user',
content:data
}

]

});

return response.message.content;

}

module.exports = {
analyzeBudget
};