function categorize(
merchant
){

merchant=
merchant.toLowerCase();

if(
merchant.includes(
'jollibee'
)
)
return 'Food';

if(
merchant.includes(
'mcdonald'
)
)
return 'Food';

if(
merchant.includes(
'grab'
)
)
return 'Transportation';

if(
merchant.includes(
'shopee'
)
)
return 'Shopping';

if(
merchant.includes(
'lazada'
)
)
return 'Shopping';

if(
merchant.includes(
'globe'
)
)
return 'Utilities';

if(
merchant.includes(
'smart'
)
)
return 'Utilities';

return 'Others';

}

module.exports={
categorize
};s