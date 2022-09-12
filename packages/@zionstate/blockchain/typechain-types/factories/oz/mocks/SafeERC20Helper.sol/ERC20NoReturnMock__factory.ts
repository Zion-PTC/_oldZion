/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ERC20NoReturnMock,
  ERC20NoReturnMockInterface,
} from "../../../../oz/mocks/SafeERC20Helper.sol/ERC20NoReturnMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "allowance_",
        type: "uint256",
      },
    ],
    name: "setAllowance",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103b8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063095ea7b31461005c57806323b872dd146100785780633ba93f2614610094578063a9059cbb146100b0578063dd62ed3e146100cc575b600080fd5b61007660048036038101906100719190610258565b6100fc565b005b610092600480360381019061008d9190610298565b610108565b005b6100ae60048036038101906100a991906102eb565b610115565b005b6100ca60048036038101906100c59190610258565b610162565b005b6100e660048036038101906100e19190610318565b61016e565b6040516100f39190610367565b60405180910390f35b60006001819055505050565b6000600181905550505050565b806000806101216101b7565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b60006001819055505050565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101ef826101c4565b9050919050565b6101ff816101e4565b811461020a57600080fd5b50565b60008135905061021c816101f6565b92915050565b6000819050919050565b61023581610222565b811461024057600080fd5b50565b6000813590506102528161022c565b92915050565b6000806040838503121561026f5761026e6101bf565b5b600061027d8582860161020d565b925050602061028e85828601610243565b9150509250929050565b6000806000606084860312156102b1576102b06101bf565b5b60006102bf8682870161020d565b93505060206102d08682870161020d565b92505060406102e186828701610243565b9150509250925092565b600060208284031215610301576103006101bf565b5b600061030f84828501610243565b91505092915050565b6000806040838503121561032f5761032e6101bf565b5b600061033d8582860161020d565b925050602061034e8582860161020d565b9150509250929050565b61036181610222565b82525050565b600060208201905061037c6000830184610358565b9291505056fea2646970667358221220f98080e83b0ecabf26c299e350b94c228fe8b4f2a84c9f3628e844b19b22867b64736f6c63430008090033";

type ERC20NoReturnMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20NoReturnMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20NoReturnMock__factory extends ContractFactory {
  constructor(...args: ERC20NoReturnMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20NoReturnMock> {
    return super.deploy(overrides || {}) as Promise<ERC20NoReturnMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20NoReturnMock {
    return super.attach(address) as ERC20NoReturnMock;
  }
  override connect(signer: Signer): ERC20NoReturnMock__factory {
    return super.connect(signer) as ERC20NoReturnMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20NoReturnMockInterface {
    return new utils.Interface(_abi) as ERC20NoReturnMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20NoReturnMock {
    return new Contract(address, _abi, signerOrProvider) as ERC20NoReturnMock;
  }
}
