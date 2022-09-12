/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ReentrancyAttack,
  ReentrancyAttackInterface,
} from "../../../oz/mocks/ReentrancyAttack";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "data",
        type: "bytes4",
      },
    ],
    name: "callSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061033d806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80630a2df1ed14610030575b600080fd5b61004a600480360381019061004591906101cc565b61004c565b005b6000610056610167565b73ffffffffffffffffffffffffffffffffffffffff1682604051602401604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516100dd9190610273565b6000604051808303816000865af19150503d806000811461011a576040519150601f19603f3d011682016040523d82523d6000602084013e61011f565b606091505b5050905080610163576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015a906102e7565b60405180910390fd5b5050565b600033905090565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6101a981610174565b81146101b457600080fd5b50565b6000813590506101c6816101a0565b92915050565b6000602082840312156101e2576101e161016f565b5b60006101f0848285016101b7565b91505092915050565b600081519050919050565b600081905092915050565b60005b8381101561022d578082015181840152602081019050610212565b8381111561023c576000848401525b50505050565b600061024d826101f9565b6102578185610204565b935061026781856020860161020f565b80840191505092915050565b600061027f8284610242565b915081905092915050565b600082825260208201905092915050565b7f5265656e7472616e637941747461636b3a206661696c65642063616c6c000000600082015250565b60006102d1601d8361028a565b91506102dc8261029b565b602082019050919050565b60006020820190508181036000830152610300816102c4565b905091905056fea2646970667358221220936bb726c61c094c2a7817c7d62a9a3b0f728038b95a9336e4e73714feb7ee5464736f6c63430008090033";

type ReentrancyAttackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReentrancyAttackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReentrancyAttack__factory extends ContractFactory {
  constructor(...args: ReentrancyAttackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReentrancyAttack> {
    return super.deploy(overrides || {}) as Promise<ReentrancyAttack>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ReentrancyAttack {
    return super.attach(address) as ReentrancyAttack;
  }
  override connect(signer: Signer): ReentrancyAttack__factory {
    return super.connect(signer) as ReentrancyAttack__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReentrancyAttackInterface {
    return new utils.Interface(_abi) as ReentrancyAttackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReentrancyAttack {
    return new Contract(address, _abi, signerOrProvider) as ReentrancyAttack;
  }
}
