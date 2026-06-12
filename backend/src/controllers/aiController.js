const {
analyzeBudget
}
=
require(
'../services/ollamaService'
);

async function chat(
req,
res
){

try{

const {
message
}
=
req.body;

const reply=
await analyzeBudget(
message
);

res.json({
reply
});

}catch(error){

res.status(500)
.json({
message:
'AI Error'
});

}

}

module.exports={
chat
};