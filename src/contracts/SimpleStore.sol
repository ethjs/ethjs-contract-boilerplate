pragma solidity ^0.4.16;

import "ISimpleStore.sol";


contract SimpleStore is ISimpleStore {
  uint256 storedValue;

  function set(uint256 _value) public {
    storedValue = _value;

    StoreSet(msg.sender, _value);
  }

  function get() public constant returns (uint256 value) {
    return storedValue;
  }
}
