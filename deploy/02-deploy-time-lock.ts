 import { HardhatRuntimeEnvironment } from "hardhat/types";
 import { DeployFunction } from "hardhat-deploy/dist/types";
import { MIN_DELAY } from "../helper-hardhat-config";

 const deployTimeLock:DeployFunction = async (hre:HardhatRuntimeEnvironment) => {
     const { deployments, getNamedAccounts } = hre;
     const { deploy, log } = deployments;
     const { deployer } = await getNamedAccounts();
     
  const timeLock = await deploy("TimeLock", {
    from: deployer,
    args: [MIN_DELAY,[],[]],
    log: true,
  });
}
 
export default deployTimeLock;