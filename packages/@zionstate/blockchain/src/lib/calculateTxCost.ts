import { ethers } from "hardhat";

export function calculateTxCost(
  gasLimit: number,
  gasPrice: number | undefined
) {
  if (!gasPrice) gasPrice = 0;
  return new Number(ethers.utils.formatEther(gasLimit * gasPrice)).valueOf();
}
