pragma solidity ^0.4.16;

import "wafr/Test.sol";
import "SimpleStore.sol";


contract SimpleStoreTest is Test {
  SimpleStore store;

  function setup() {
    store = new SimpleStore();
  }

  function test_0_setMethod() {
    store.set(45);
    assertEq(store.get(), uint256(45), "store should have set value to 45");
  }

  function test_1_getMethod() {
    assertEq(store.get(), uint256(45), "value should still be 45.");
    store.set(47000);
    assertEq(store.get(), uint256(47000), "value should now be 47000");
  }

  function test_2_getMethodLaterInTime_increaseBlocksBy9000() {
    assertEq(store.get(), uint256(47000), "value should still be 47000 later in time");
  }
}
