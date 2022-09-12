import { ethers } from "hardhat";

export function calculateTxCost(gasLimit: number, gasPrice: number) {
  return new Number(ethers.utils.formatEther(gasLimit * gasPrice)).valueOf();
}
