pragma solidity ^0.4.16;

contract ISimpleStore {
  function set(uint256 _value) public;
  function get() public constant returns (uint256 value);

  event StoreSet(address _sender, uint256 _value);
}
