/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  UUPSUpgradeableBrokenMock,
  UUPSUpgradeableBrokenMockInterface,
} from "../../../../../oz/mocks/UUPS/TestInProd.sol/UUPSUpgradeableBrokenMock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "current",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b5060805161050061005c600039600050506105006000f3fe6080604052600436106100555760003560e01c80632baeceb71461005a5780633659cfe6146100715780634f1ef2861461009a5780639fa6a6e3146100b6578063d09de08a146100e1578063d826f88f146100f8575b600080fd5b34801561006657600080fd5b5061006f61010f565b005b34801561007d57600080fd5b506100986004803603810190610093919061024a565b61011b565b005b6100b460048036038101906100af91906103bd565b61011e565b005b3480156100c257600080fd5b506100cb610122565b6040516100d89190610432565b60405180910390f35b3480156100ed57600080fd5b506100f6610133565b005b34801561010457600080fd5b5061010d61013f565b005b610119600061014b565b565b50565b5050565b600061012e60006101a7565b905090565b61013d60006101b5565b565b61014960006101cb565b565b60008160000154905060008111610197576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018e906104aa565b60405180910390fd5b6001810382600001819055505050565b600081600001549050919050565b6001816000016000828254019250508190555050565b6000816000018190555050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610217826101ec565b9050919050565b6102278161020c565b811461023257600080fd5b50565b6000813590506102448161021e565b92915050565b6000602082840312156102605761025f6101e2565b5b600061026e84828501610235565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6102ca82610281565b810181811067ffffffffffffffff821117156102e9576102e8610292565b5b80604052505050565b60006102fc6101d8565b905061030882826102c1565b919050565b600067ffffffffffffffff82111561032857610327610292565b5b61033182610281565b9050602081019050919050565b82818337600083830152505050565b600061036061035b8461030d565b6102f2565b90508281526020810184848401111561037c5761037b61027c565b5b61038784828561033e565b509392505050565b600082601f8301126103a4576103a3610277565b5b81356103b484826020860161034d565b91505092915050565b600080604083850312156103d4576103d36101e2565b5b60006103e285828601610235565b925050602083013567ffffffffffffffff811115610403576104026101e7565b5b61040f8582860161038f565b9150509250929050565b6000819050919050565b61042c81610419565b82525050565b60006020820190506104476000830184610423565b92915050565b600082825260208201905092915050565b7f436f756e7465723a2064656372656d656e74206f766572666c6f770000000000600082015250565b6000610494601b8361044d565b915061049f8261045e565b602082019050919050565b600060208201905081810360008301526104c381610487565b905091905056fea264697066735822122071d991db4f97fdd0fbae6a8cd7257967e4c87651ca03ebf6988d03ae9eebc39564736f6c63430008090033";

type UUPSUpgradeableBrokenMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UUPSUpgradeableBrokenMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UUPSUpgradeableBrokenMock__factory extends ContractFactory {
  constructor(...args: UUPSUpgradeableBrokenMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UUPSUpgradeableBrokenMock> {
    return super.deploy(overrides || {}) as Promise<UUPSUpgradeableBrokenMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UUPSUpgradeableBrokenMock {
    return super.attach(address) as UUPSUpgradeableBrokenMock;
  }
  override connect(signer: Signer): UUPSUpgradeableBrokenMock__factory {
    return super.connect(signer) as UUPSUpgradeableBrokenMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UUPSUpgradeableBrokenMockInterface {
    return new utils.Interface(_abi) as UUPSUpgradeableBrokenMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UUPSUpgradeableBrokenMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UUPSUpgradeableBrokenMock;
  }
}