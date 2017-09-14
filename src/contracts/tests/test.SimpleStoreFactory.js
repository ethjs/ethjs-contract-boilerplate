const assert = require('chai').assert;
const { Eth, eth, defaultTxObject, environment, contracts } = require('../../../internals/mocha/config');

describe('SimpleStoreFactory', () => {
  it('should deploy all contracts properly', (done) => {
    assert.isOk(environment.SimpleStoreFactory.address, 'has address');

    done();
  });

  it('should have contract interfaces included', () => {
    assert.isOk(contracts.SimpleStoreFactory);
  });

  it('should deploy a SimpleStore with the factory contract and use set and get methods', async function () { // eslint-disable-line
    const simpleStoreFactoryInterface = JSON.parse(contracts.SimpleStoreFactory.interface);
    const SimpleStoreFactory = eth.contract(
      simpleStoreFactoryInterface,
      contracts.SimpleStore.bytecode,
      defaultTxObject
    );

    const simpleStoreFactory = SimpleStoreFactory.at(environment.SimpleStoreFactory.address);
    const SimpleStore = eth.contract(
      JSON.parse(contracts.SimpleStore.interface),
      contracts.SimpleStore.bytecode,
      defaultTxObject
    );

    const createTxHash = await simpleStoreFactory.createSimpleStore(new Eth.BN('45001'));
    const createReceipt = await eth.getTransactionSuccess(createTxHash);

    assert.isOk(createReceipt.logs.length, 'has logs');

    // decode log information for simple store address
    const creationLog = createReceipt.logs[1];
    const StoreCreatedABI = simpleStoreFactoryInterface.filter(v => v.name === 'StoreCreated')[0];
    const decodedLog = Eth.abi.decodeLogItem(StoreCreatedABI, creationLog);
    const simpleStoreAddress = decodedLog.simpleStore;

    const simpleStore = SimpleStore.at(simpleStoreAddress);

    const storeValue = (await simpleStore.get())[0];
    assert.equal(storeValue.toString(10), '45000');

    const setValueTxHash = await simpleStore.set(new Eth.BN('34', 10));
    const setValueSuccess = await eth.getTransactionSuccess(setValueTxHash);

    const storeValue2 = (await simpleStore.get())[0];
    assert.equal(storeValue2.toString(10), '34');
  });
});
