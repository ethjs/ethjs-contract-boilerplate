const assert = require('chai').assert;
const contracts = require('../index.js');

describe('contracts', () => {
  describe('construction', () => {
    it('should have constructed properly', () => {
      assert.isOk(contracts);
      assert.isOk(contracts.testrpc);
    });
  });
});
