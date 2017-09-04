const assert = require('chai').assert;
const { Eth, eth, defaultTxObject, environment, contracts } = require('../../../internals/mocha/config');

describe('SimpleStore', () => {
  it('should have contract interfaces included', () => {
    assert.isOk(contracts.SimpleStore);
  });

  it('should deploy a SimpleStore contract and use set and get methods', async function () { // eslint-disable-line
    const SimpleStore = eth.contract(
      JSON.parse(contracts.SimpleStore.interface),
      contracts.SimpleStore.bytecode,
      defaultTxObject
    );

    const txHash = await SimpleStore.new();
    const receipt = await eth.getTransactionSuccess(txHash);
    const simpleStore = SimpleStore.at(receipt.contractAddress);

    const storeValue = (await simpleStore.get())[0];
    assert.equal(storeValue.toString(10), '0');

    const setValueTxHash = await simpleStore.set(new Eth.BN('34', 10));
    const setValueSuccess = await eth.getTransactionSuccess(setValueTxHash);

    const storeValue2 = (await simpleStore.get())[0];
    assert.equal(storeValue2.toString(10), '34');
  });
});
