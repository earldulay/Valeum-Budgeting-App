const {

extractReceiptData

}
=
require(
'../services/receiptParser'
);

async function scanReceipt(
req,
res
){

try{

const result=

await extractReceiptData(
req.file.path
);

res.json(
result
);

}catch(error){

console.log(error);

res.status(500)
.json({
message:
'Scan Failed'
});

}

}

module.exports={
scanReceipt
};