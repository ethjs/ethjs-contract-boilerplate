const HTTPProvider = require('ethjs-provider-http');
const Eth = require('ethjs');

const environments = require('../../src/contracts/lib/environments.json');
const accounts = require('../accounts');

const environmentName = 'testrpc';
const environment = environments[environmentName];
const contracts = environments.contracts;

const eth = new Eth(new HTTPProvider('http://localhost:8545'));
const defaultTxObject = {
  from: accounts[0].address,
  gas: 3000000,
};

module.exports = {
  Eth,
  eth,
  defaultTxObject,
  environment,
  contracts,
};
