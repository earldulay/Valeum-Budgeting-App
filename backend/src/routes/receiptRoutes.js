const express =
require('express');

const multer =
require('multer');

const {

scanReceipt

}
=
require(
'../controllers/receiptController'
);

const router =
express.Router();

const upload =
multer({

dest:'uploads/'

});

router.post(

'/scan',

upload.single(
'receipt'
),

scanReceipt

);

module.exports=
router;