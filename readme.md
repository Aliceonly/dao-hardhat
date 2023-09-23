On chain ERC20 Governance

1. 合约
2. 部署脚本
3. 交互脚本


yarn add hardhat
init hardhat.config.js
create governance contract
add openzeppelin contracts
create GovernanceToken contract
    1.ERC20 -> mint GovernanceToken
    2.Snapshot of token user have at certain block(为投票追责)
use openzeppelin wizard : GovernorContract: voting sol for proposing and executing and cueing different proposal
TimeLock:owner of box contract