const {

scanOCR

}
=
require(
'./tesseractService'
);

const {

categorize

}
=
require(
'./categorizerService'
);

async function extractReceiptData(
path
){

const text=

await scanOCR(
path
);

const merchant=
extractMerchant(
text
);

const amount=
extractAmount(
text
);

const date=
extractDate(
text
);

const category=
categorize(
merchant
);

return{

merchant,

amount,

date,

category,

rawText:text

};
function extractAmount(
text
){

const matches=

text.match(
/\d+\.\d{2}/g
);

if(!matches)
return 0;

const amounts=
matches.map(Number);

return Math.max(
...amounts
);

}

function extractMerchant(
text
){

const lines=
text.split('\n');

return lines[0]
.trim();

}

function extractDate(
text
){

const match=

text.match(

/\d{2}\/\d{2}\/\d{4}/

);

if(match)
return match[0];

return null;

}
}