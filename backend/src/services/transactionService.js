const db =
require('../config/db');

async function saveTransaction(
data
){

const sql=`

INSERT INTO
transactions

(

user_id,

category,

amount,

transaction_date

)

VALUES

(?,?,?,?)

`;

db.query(

sql,

[

data.userId,

data.category,

data.amount,

data.date

]

);

}

module.exports={
saveTransaction
};