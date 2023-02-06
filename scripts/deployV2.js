
const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {
 
const address = "0xE49F46b9DB829955D95C1f4D71AC8943B26070F5"; 

  const Lock = await hre.ethers.getContractFactory("Lock2");
  const lock = await upgrades.upgradeProxy(address, Lock);

  await lock.deployed();

  console.log(
    `deployed to ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
