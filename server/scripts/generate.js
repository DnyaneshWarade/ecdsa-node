const {secp256k1} = require("ethereum-cryptography/secp256k1");
const {toHex} = require("ethereum-cryptography/utils");

const privatekey = secp256k1.utils.randomPrivateKey();
console.log("Private Key: ",toHex(privatekey));

const publicKey = secp256k1.getPublicKey(privatekey);
console.log("Public Key: ",(toHex(publicKey)));