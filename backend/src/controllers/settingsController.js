const db=
require('../config/db');

async function getSettings(
req,
res
){

db.query(

'SELECT * FROM budget_settings WHERE user_id=?',

[1],

(err,result)=>{

res.json(
result[0]
);

}

);

}

async function updateSettings(
req,
res
){

const {

daily_limit,

weekly_limit,

monthly_limit,

notifications,

ocr_enabled,

dark_mode

}
=
req.body;

db.query(

`
UPDATE budget_settings
SET
daily_limit=?,
weekly_limit=?,
monthly_limit=?,
notifications=?,
ocr_enabled=?,
dark_mode=?
WHERE user_id=?
`,

[

daily_limit,

weekly_limit,

monthly_limit,

notifications,

ocr_enabled,

dark_mode,

1

]

);

res.json({
message:
'updated'
});

}

module.exports={
getSettings,
updateSettings
};