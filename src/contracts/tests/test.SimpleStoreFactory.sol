pragma solidity ^0.4.16;

import "wafr/Test.sol";
import "SimpleStoreFactory.sol";


contract SimpleStoreFactoryTest is Test {
  SimpleStoreFactory factory;

  function setup() {
    factory = new SimpleStoreFactory();
  }

  function test_0_createMethod() {
    SimpleStore store0 = SimpleStore(factory.createSimpleStore(20923));
    assertEq(store0.get(), uint256(20923), "factory should create simple store with initial value of 20923");
  }

  function test_1_createTwoStoresProperly() {
    SimpleStore store0 = SimpleStore(factory.createSimpleStore(1));
    SimpleStore store1 = SimpleStore(factory.createSimpleStore(2));

    assertEq(store0.get(), uint256(1), "factory should create SimpleStore with initial value of 1");
    assertEq(store1.get(), uint256(2), "factory should create SimpleStore with initial value of 2");
  }
}
