import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";
import {
  VOTING_DEPLAY,
  VOTING_PERIOD,
  QUORUM_PERCENTAGE,
} from "../helper-hardhat-config";

 const deployGovernorContract: DeployFunction = async (
   hre: HardhatRuntimeEnvironment
 ) => {
   const { deployments, getNamedAccounts } = hre;
   const { deploy, get } = deployments;
     const { deployer } = await getNamedAccounts();
     const governanceToken = await get("GovernanceToken");
     const timeLock = await get("TimeLock");

   const governor = await deploy("GovernorContract", {
     from: deployer,
     args: [
       governanceToken.address,
       timeLock.address,
       VOTING_DEPLAY,
       VOTING_PERIOD,
       QUORUM_PERCENTAGE,
     ],
     log: true,
   });
 };

 export default deployGovernorContract;