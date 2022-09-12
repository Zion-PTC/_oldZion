import fs from "fs";

export function printDeployLog(
  filepath: string,
  contract_address: string,
  chainId: number,
  gasPrice: number,
  blockHash: string,
  blockNumber: number,
  from: string,
  hash: string,
  gasLimit: number,
  txCost: number
) {
  fs.writeFileSync(
    filepath,
    JSON.stringify({
      contract_address,
      chainId,
      gasPrice,
      blockHash,
      blockNumber,
      from,
      hash,
      gasLimit,
      txCost,
    })
  );
  return {
    filepath,
    contract_address,
    chainId,
    gasPrice,
    blockHash,
    blockNumber,
    from,
    hash,
    gasLimit,
    txCost,
  };
}
