require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off food walnut razor random social ice light army genius'; 
let testAccounts = [
"0x3104fa94080e5ed0b31a072d7c6cde8adbf267430830232f5ab403e67afc344f",
"0x4bb4b96d82817d303279639709b55c43a1ae669271f08077b81725db192e1058",
"0xa19d9d39282ec8d4cc0b09d4d0705b45f1ca2a41763c9db304189b8dee126e88",
"0xae266cc7de3abba1a393203761d6cf4516a7214e362fc380100ef1edc3e3c3bf",
"0xd17e5a1247edb4ee19ea074f6d37a5812ca98ca03d5db6aeb9bef9d419f8587d",
"0x4d07e76a7956325f206510fa8cbc771723b5755e87b2c67ceca4229694c7ba45",
"0x61cdfd53a83304e4efe94ea7578c124bf3853926cb203f93011f26085f0cf265",
"0xfd5073095696cad543746a6bb68ab1691f973e41bcec4c9075405d6360a6e4ec",
"0xa700cb39ef9d42cfb3689356bd6475d93334d8b99665f6ef3a97f9fffd4e97bf",
"0x0e3bf35f9294eed7db37216a1b81ca8730551d68ade36776edcf4fc9c8defedd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


