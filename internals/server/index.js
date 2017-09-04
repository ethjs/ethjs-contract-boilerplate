const TestRPC = require('ethereumjs-testrpc'); // eslint-disable-line
const accounts = require('../accounts/index.js');

const server = TestRPC.server({
  accounts,
  logger: console,
});

server.listen('8545', (err, blockchain) => {
  console.log(err); // eslint-disable-line
});
