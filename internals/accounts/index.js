// WARNING: import your private keys from outside this repository
// NEVER include your private keys in a build repo.
// YOU WILL LOSE ALL YOUR ETHER IF YOU DO..

// example:
// const importedActualAccount = require('../../../../account.json');

const accounts = [{
  secretKey: '0x9d6a6ebcd915c6adca5132bdd126581ee1df0cd9fffb7237b2d9c8d75342471c',
  address: '0x1ebd350b7b8992f95927d306e0064072e3c49d69',
  balance: '99999999999999999999999999999999999990000000000000000',
}];

module.exports = accounts;
