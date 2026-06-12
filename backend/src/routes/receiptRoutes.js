const express =
require('express');

const router =
express.Router();

const multer =
require('multer');

const upload =
multer({
dest:'uploads/'
});

router.post(

'/scan',

upload.single('receipt'),

async(req,res)=>{

const text =
await scanReceipt(
req.file.path
);

res.json({
text
});

}

);

module.exports =
router;

const categories = {

"jollibee":"Food",

"mcdonalds":"Food",

"grab":"Transportation",

"shopee":"Shopping",

"lazada":"Shopping",

"meralco":"Utilities",

"globe":"Utilities",

"smart":"Utilities"

};