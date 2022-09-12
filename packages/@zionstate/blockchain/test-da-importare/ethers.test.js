import ethers, { Bytes } from "ethers";

const INFURA_URL = process.env.INFURA_URL;

const provider = new ethers.providers.JsonRpcProvider(INFURA_URL);
const address = "0x164e8dbE80776b53f702E169F3753BCAf1945Ad3";

const main = async () => {
  const balance = await provider.getBalance(address);
  console.log(ethers.utils.formatEther(balance));
};

main();
