pragma solidity ^0.4.16;

contract ISimpleStoreFactory {
  function createSimpleStore(uint256 _initialValue) public returns (address simpleStore);

  event StoreCreated(address _sender, address simpleStore, uint256 _initialValue);
}
