pragma solidity ^0.4.16;

import "ISimpleStoreFactory.sol";
import "SimpleStore.sol";


contract SimpleStoreFactory is ISimpleStoreFactory {
  function createSimpleStore(uint256 _initialValue) public returns (address simpleStore) {
    SimpleStore storeContract = new SimpleStore();
    storeContract.set(_initialValue);
    simpleStore = address(storeContract);

    StoreCreated(msg.sender, simpleStore, _initialValue);
  }
}
