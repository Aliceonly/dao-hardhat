import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";
// @ts-ignore
import { ethers } from "hardhat";

const deployBox: DeployFunction = async (hre: HardhatRuntimeEnvironment) => { 
  const { deployments, getNamedAccounts } = hre;
  const { deploy, get } = deployments;
    const { deployer } = await getNamedAccounts();
    const box = await deploy("Box", {
        from: deployer,
        args: [],
        log: true
    });

  const timeLock = await ethers.getContract("TimeLock", deployer);
    const boxContract = await ethers.getContractAt("Box", box.address);
    const transferOwnerTx = await boxContract.transferOwnership(
        timeLock.address
    );
    await transferOwnerTx.wait(1);
}