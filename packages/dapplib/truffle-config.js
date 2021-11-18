require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil foot custom rate magnet coffee coral light army general'; 
let testAccounts = [
"0xaf797deb9f9c65d8f43a704baeeea54cd86bb8f07aae469c6bdfa8d56a877b53",
"0x03e3e629695cb0bcd48211494fd7fff49c2f5dea9eb71b6e6c1dac0eb8bc5013",
"0xf741211238cc3af37e36dfb4de4776d1229645f47b6574d9ad7f67a647033084",
"0x04d25aacc8025f753ddf3e36832cd264c717677f53918515b12cc369bafce8e3",
"0x51fa985ffe2496d76408016c41cccd6e7c4e2eb4be6461d0c8caab63611a2317",
"0x5c253a659ae8eeb2ad8a3bb6c9a94cfd1de8d8b81766efa24b1005f6cbe35aa5",
"0x499d28a0b0b3aa5fe76915162beaff3a73a6a6c867424c1e5d30b4832767f79b",
"0x1e58628b86b0ad5c3c52de975b819db23ba69a74b7efc227fac50eabd8757c2b",
"0x00908afd18f5828845f237610707427a331dc2cfe68552cbb28528f0f7b8026a",
"0x5cd45a6599efa57b9c8992343ba9879a744ef42ba01851ddb3ececd749c4a6cb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

