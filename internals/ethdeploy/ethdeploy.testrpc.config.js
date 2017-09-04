const ethdeployBase = require('./ethdeploy.base.config.js');
const HTTPProvider = require('ethjs-provider-http');

module.exports = ethdeployBase({
  name: 'testrpc',
  provider: new HTTPProvider('http://localhost:8545'),
  defaultTxObject: {
    from: 0,
    gas: 4000000,
  },
});
