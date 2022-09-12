/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC721ReceiverMock,
  ERC721ReceiverMockInterface,
} from "../../../oz/mocks/ERC721ReceiverMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "retval",
        type: "bytes4",
      },
      {
        internalType: "enum ERC721ReceiverMock.Error",
        name: "error",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516108dc3803806108dc8339818101604052810190610032919061012d565b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166080817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152505080600381111561008b5761008a61016d565b5b60a08160038111156100a05761009f61016d565b5b81525050505061019c565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6100e5816100b0565b81146100f057600080fd5b50565b600081519050610102816100dc565b92915050565b6004811061011557600080fd5b50565b60008151905061012781610108565b92915050565b60008060408385031215610144576101436100ab565b5b6000610152858286016100f3565b925050602061016385828601610118565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60805160a05161070e6101ce600039600081816078015281816101000152610151015260006101dc015261070e6000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61004a600480360381019061004591906103f3565b610060565b60405161005791906104b1565b60405180910390f35b600060016003811115610076576100756104cc565b5b7f000000000000000000000000000000000000000000000000000000000000000060038111156100a9576100a86104cc565b5b14156100ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100e190610558565b60405180910390fd5b600260038111156100fe576100fd6104cc565b5b7f00000000000000000000000000000000000000000000000000000000000000006003811115610131576101306104cc565b5b141561013c57600080fd5b60038081111561014f5761014e6104cc565b5b7f00000000000000000000000000000000000000000000000000000000000000006003811115610182576101816104cc565b5b141561019b57600080600061019791906105a7565b9050505b7f28fa6e16458f9c24aa59ddd4085264573006dbe30304837873c7deafc702b038858585855a6040516101d295949392919061067e565b60405180910390a17f00000000000000000000000000000000000000000000000000000000000000009050949350505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061024482610219565b9050919050565b61025481610239565b811461025f57600080fd5b50565b6000813590506102718161024b565b92915050565b6000819050919050565b61028a81610277565b811461029557600080fd5b50565b6000813590506102a781610281565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610300826102b7565b810181811067ffffffffffffffff8211171561031f5761031e6102c8565b5b80604052505050565b6000610332610205565b905061033e82826102f7565b919050565b600067ffffffffffffffff82111561035e5761035d6102c8565b5b610367826102b7565b9050602081019050919050565b82818337600083830152505050565b600061039661039184610343565b610328565b9050828152602081018484840111156103b2576103b16102b2565b5b6103bd848285610374565b509392505050565b600082601f8301126103da576103d96102ad565b5b81356103ea848260208601610383565b91505092915050565b6000806000806080858703121561040d5761040c61020f565b5b600061041b87828801610262565b945050602061042c87828801610262565b935050604061043d87828801610298565b925050606085013567ffffffffffffffff81111561045e5761045d610214565b5b61046a878288016103c5565b91505092959194509250565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6104ab81610476565b82525050565b60006020820190506104c660008301846104a2565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600082825260208201905092915050565b7f45524337323152656365697665724d6f636b3a20726576657274696e67000000600082015250565b6000610542601d836104fb565b915061054d8261050c565b602082019050919050565b6000602082019050818103600083015261057181610535565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006105b282610277565b91506105bd83610277565b9250826105cd576105cc610578565b5b828204905092915050565b6105e181610239565b82525050565b6105f081610277565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610630578082015181840152602081019050610615565b8381111561063f576000848401525b50505050565b6000610650826105f6565b61065a8185610601565b935061066a818560208601610612565b610673816102b7565b840191505092915050565b600060a08201905061069360008301886105d8565b6106a060208301876105d8565b6106ad60408301866105e7565b81810360608301526106bf8185610645565b90506106ce60808301846105e7565b969550505050505056fea2646970667358221220f893b692be0827fb8ddc9b9dfff57bbce809d0a4f2ce9b1cc90baee4bd9278a564736f6c63430008090033";

type ERC721ReceiverMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ReceiverMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721ReceiverMock__factory extends ContractFactory {
  constructor(...args: ERC721ReceiverMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    retval: PromiseOrValue<BytesLike>,
    error: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721ReceiverMock> {
    return super.deploy(
      retval,
      error,
      overrides || {}
    ) as Promise<ERC721ReceiverMock>;
  }
  override getDeployTransaction(
    retval: PromiseOrValue<BytesLike>,
    error: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(retval, error, overrides || {});
  }
  override attach(address: string): ERC721ReceiverMock {
    return super.attach(address) as ERC721ReceiverMock;
  }
  override connect(signer: Signer): ERC721ReceiverMock__factory {
    return super.connect(signer) as ERC721ReceiverMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721ReceiverMockInterface {
    return new utils.Interface(_abi) as ERC721ReceiverMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721ReceiverMock {
    return new Contract(address, _abi, signerOrProvider) as ERC721ReceiverMock;
  }
}
