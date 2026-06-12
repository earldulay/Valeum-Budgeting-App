const Tesseract =
require(
'tesseract.js'
);

async function scanOCR(
path
){

const result =

await Tesseract.recognize(

path,

'eng'

);

return result
.data
.text;

}

module.exports={
scanOCR
};