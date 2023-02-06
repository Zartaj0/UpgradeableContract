// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock2 {
    uint value;

    function initialize(uint val) external {
        value = val;
    }

    function get() external view returns (uint) {
        return value * 10;
    }

    function set(uint val) external {
        value = val;
    }
}
