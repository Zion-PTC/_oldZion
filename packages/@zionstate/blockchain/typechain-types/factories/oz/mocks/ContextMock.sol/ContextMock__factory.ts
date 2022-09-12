/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ContextMock,
  ContextMockInterface,
} from "../../../../oz/mocks/ContextMock.sol/ContextMock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "integerValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "stringValue",
        type: "string",
      },
    ],
    name: "Data",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "Sender",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "integerValue",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "stringValue",
        type: "string",
      },
    ],
    name: "msgData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "msgSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610497806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063376bf2621461003b578063d737d0c714610057575b600080fd5b6100556004803603810190610050919061028d565b610061565b005b61005f6100a8565b005b7faf235354a0a47c91ee171961326335cb2d1a8e55b8a89859b0e61eb049e50ea061008a6100e8565b848460405161009c94939291906103be565b60405180910390a15050565b7fd6558c3ed910d959271054471fd1c326679d9fece99c5091b00ed89627cf2bfc6100d16100f5565b6040516100de9190610446565b60405180910390a1565b3660008036915091509091565b600033905090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61012481610111565b811461012f57600080fd5b50565b6000813590506101418161011b565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61019a82610151565b810181811067ffffffffffffffff821117156101b9576101b8610162565b5b80604052505050565b60006101cc6100fd565b90506101d88282610191565b919050565b600067ffffffffffffffff8211156101f8576101f7610162565b5b61020182610151565b9050602081019050919050565b82818337600083830152505050565b600061023061022b846101dd565b6101c2565b90508281526020810184848401111561024c5761024b61014c565b5b61025784828561020e565b509392505050565b600082601f83011261027457610273610147565b5b813561028484826020860161021d565b91505092915050565b600080604083850312156102a4576102a3610107565b5b60006102b285828601610132565b925050602083013567ffffffffffffffff8111156102d3576102d261010c565b5b6102df8582860161025f565b9150509250929050565b600082825260208201905092915050565b600061030683856102e9565b935061031383858461020e565b61031c83610151565b840190509392505050565b61033081610111565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610370578082015181840152602081019050610355565b8381111561037f576000848401525b50505050565b600061039082610336565b61039a8185610341565b93506103aa818560208601610352565b6103b381610151565b840191505092915050565b600060608201905081810360008301526103d98186886102fa565b90506103e86020830185610327565b81810360408301526103fa8184610385565b905095945050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061043082610405565b9050919050565b61044081610425565b82525050565b600060208201905061045b6000830184610437565b9291505056fea264697066735822122011b22a3b357ff0b4833da8b5d5d9d0280d905d410c62562f8ea585da499fb21264736f6c63430008090033";

type ContextMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ContextMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ContextMock__factory extends ContractFactory {
  constructor(...args: ContextMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContextMock> {
    return super.deploy(overrides || {}) as Promise<ContextMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ContextMock {
    return super.attach(address) as ContextMock;
  }
  override connect(signer: Signer): ContextMock__factory {
    return super.connect(signer) as ContextMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContextMockInterface {
    return new utils.Interface(_abi) as ContextMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContextMock {
    return new Contract(address, _abi, signerOrProvider) as ContextMock;
  }
}
