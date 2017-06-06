const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');

let data = {
    id:4
}
const token = jwt.sign(data,'abc123');
console.log(token);

const decoded = jwt.verify(token,'abc123');
console.log(decoded);
//
// let message = "samson";
//
// let hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// const data = {
//     id:4
// };
//
// const token = {
//     data,
//     hash:SHA256(JSON.stringify(data)+'sometext').toString()
// }
//
// const resultHash = SHA256(JSON.stringify(token.data)+'sometext').toString();
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// if(resultHash === token.hash){
//     console.log('Data has not been modified');
// }else{
//     console.log('its been modified');
// }

