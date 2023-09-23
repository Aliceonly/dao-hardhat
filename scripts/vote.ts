import * as fs from "fs";
import { developmentChains, proposalsFile,VOTING_PERIOD } from "../helper-hardhat-config";
// @ts-ignore
import { network, ethers } from "hardhat"
import { moveBlocks } from "../utils/move-blocks";

const index = 0;

const main = async (proposalIndex: number) => {
    const proposals = JSON.parse(fs.readFileSync(proposalsFile, "utf8"));
    const proposalId = proposals[network.config.chainId!][proposalIndex];
    // 0 - 反对 1 - 赞成 2 -齐权
    const voteWay = 1;
    const governor = await ethers.getContract("GovernorContract");
    const reason = "Vote for proposal #1";
    const voteTxResponse = await governor.castVoteWithReason(
      proposalId,
      voteWay,
      reason
    );
    await voteTxResponse.wait(1);
        if(developmentChains.includes(network.name)){
            await moveBlocks(VOTING_PERIOD+1);
        }
};

main(index)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
