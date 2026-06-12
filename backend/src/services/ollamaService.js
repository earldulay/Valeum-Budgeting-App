const ollama =
require('ollama');

async function analyzeBudget(data){

const response =
await ollama.chat({

model:'llama3',

messages:[

{
role:'system',
content:`
You are a financial advisor.
Analyze expenses.
Give budgeting tips.
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