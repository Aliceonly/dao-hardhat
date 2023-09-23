// wait new vote to be executed

// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract TimeLock is TimelockController {
    /**
     * @dev 构造函数
     * @param minDelay executing前的等待时间
     * @param proposers 可以提议的人
     * @param executors 当提议通过后可以执行的人
     */
    constructor(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors
    ) TimelockController(minDelay,proposers,executors) {}
}
