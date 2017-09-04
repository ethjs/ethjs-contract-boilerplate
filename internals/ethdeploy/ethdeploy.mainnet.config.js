const ethdeployBase = require('./ethdeploy.base.config.js');
const SignerProvider = require('ethjs-provider-signer'); // eslint-disable-line
const sign = require('ethjs-signer').sign; // eslint-disable-line
const accounts = require('../accounts');

module.exports = ethdeployBase({
  name: 'mainnet',
  provider: new SignerProvider('https://mainnet.infura.io', {
    signTransaction: (rawTx, cb) => {
      cb(null, sign(rawTx, accounts[0].secretKey));
    },
    accounts: cb => cb(null, [accounts[0].address]),
  }),
  defaultTxObject: {
    from: 0,
    gas: 4000000,
  },
});
