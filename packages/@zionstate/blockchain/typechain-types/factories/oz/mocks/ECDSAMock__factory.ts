/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ECDSAMock,
  ECDSAMockInterface,
} from "../../../oz/mocks/ECDSAMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "recover",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "vs",
        type: "bytes32",
      },
    ],
    name: "recover_r_vs",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "recover_v_r_s",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "toEthSignedMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "s",
        type: "bytes",
      },
    ],
    name: "toEthSignedMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611206806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063126442731461005c57806319045a251461008c578063918a15cf146100bc57806392bd87b5146100ec578063a005410b1461011c575b600080fd5b6100766004803603810190610071919061084d565b61014c565b60405161008391906108f5565b60405180910390f35b6100a660048036038101906100a19190610a56565b61016f565b6040516100b391906108f5565b60405180910390f35b6100d660048036038101906100d19190610ab2565b61018c565b6040516100e39190610aee565b60405180910390f35b61010660048036038101906101019190610b09565b61019e565b6040516101139190610aee565b60405180910390f35b61013660048036038101906101319190610b52565b6101b0565b60405161014391906108f5565b60405180910390f35b6000610165848484886101d0909392919063ffffffff16565b9050949350505050565b600061018482846101fb90919063ffffffff16565b905092915050565b600061019782610222565b9050919050565b60006101a982610252565b9050919050565b60006101c783838661028d9092919063ffffffff16565b90509392505050565b60008060006101e1878787876102b6565b915091506101ee816103c3565b8192505050949350505050565b600080600061020a8585610598565b91509150610217816103c3565b819250505092915050565b6000816040516020016102359190610c1d565b604051602081830303815290604052805190602001209050919050565b600061025e825161061b565b82604051602001610270929190610d45565b604051602081830303815290604052805190602001209050919050565b600080600061029d86868661077c565b915091506102aa816103c3565b81925050509392505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156102f15760006003915091506103ba565b601b8560ff16141580156103095750601c8560ff1614155b1561031b5760006004915091506103ba565b6000600187878787604051600081526020016040526040516103409493929190610d83565b6020604051602081039080840390855afa158015610362573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156103b1576000600192509250506103ba565b80600092509250505b94509492505050565b600060048111156103d7576103d6610dc8565b5b8160048111156103ea576103e9610dc8565b5b14156103f557610595565b6001600481111561040957610408610dc8565b5b81600481111561041c5761041b610dc8565b5b141561045d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045490610e54565b60405180910390fd5b6002600481111561047157610470610dc8565b5b81600481111561048457610483610dc8565b5b14156104c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bc90610ec0565b60405180910390fd5b600360048111156104d9576104d8610dc8565b5b8160048111156104ec576104eb610dc8565b5b141561052d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052490610f52565b60405180910390fd5b6004808111156105405761053f610dc8565b5b81600481111561055357610552610dc8565b5b1415610594576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058b90610fe4565b60405180910390fd5b5b50565b6000806041835114156105da5760008060006020860151925060408601519150606086015160001a90506105ce878285856102b6565b94509450505050610614565b60408351141561060b57600080602085015191506040850151905061060086838361077c565b935093505050610614565b60006002915091505b9250929050565b60606000821415610663576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050610777565b600082905060005b6000821461069557808061067e9061103d565b915050600a8261068e91906110b5565b915061066b565b60008167ffffffffffffffff8111156106b1576106b061092b565b5b6040519080825280601f01601f1916602001820160405280156106e35781602001600182028036833780820191505090505b5090505b60008514610770576001826106fc91906110e6565b9150600a8561070b919061111a565b6030610717919061114b565b60f81b81838151811061072d5761072c6111a1565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561076991906110b5565b94506106e7565b8093505050505b919050565b6000806000807f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85169150601b8560ff1c0190506107bc878288856102b6565b935093505050935093915050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6107f1816107de565b81146107fc57600080fd5b50565b60008135905061080e816107e8565b92915050565b600060ff82169050919050565b61082a81610814565b811461083557600080fd5b50565b60008135905061084781610821565b92915050565b60008060008060808587031215610867576108666107d4565b5b6000610875878288016107ff565b945050602061088687828801610838565b9350506040610897878288016107ff565b92505060606108a8878288016107ff565b91505092959194509250565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108df826108b4565b9050919050565b6108ef816108d4565b82525050565b600060208201905061090a60008301846108e6565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6109638261091a565b810181811067ffffffffffffffff821117156109825761098161092b565b5b80604052505050565b60006109956107ca565b90506109a1828261095a565b919050565b600067ffffffffffffffff8211156109c1576109c061092b565b5b6109ca8261091a565b9050602081019050919050565b82818337600083830152505050565b60006109f96109f4846109a6565b61098b565b905082815260208101848484011115610a1557610a14610915565b5b610a208482856109d7565b509392505050565b600082601f830112610a3d57610a3c610910565b5b8135610a4d8482602086016109e6565b91505092915050565b60008060408385031215610a6d57610a6c6107d4565b5b6000610a7b858286016107ff565b925050602083013567ffffffffffffffff811115610a9c57610a9b6107d9565b5b610aa885828601610a28565b9150509250929050565b600060208284031215610ac857610ac76107d4565b5b6000610ad6848285016107ff565b91505092915050565b610ae8816107de565b82525050565b6000602082019050610b036000830184610adf565b92915050565b600060208284031215610b1f57610b1e6107d4565b5b600082013567ffffffffffffffff811115610b3d57610b3c6107d9565b5b610b4984828501610a28565b91505092915050565b600080600060608486031215610b6b57610b6a6107d4565b5b6000610b79868287016107ff565b9350506020610b8a868287016107ff565b9250506040610b9b868287016107ff565b9150509250925092565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000610be6601c83610ba5565b9150610bf182610bb0565b601c82019050919050565b6000819050919050565b610c17610c12826107de565b610bfc565b82525050565b6000610c2882610bd9565b9150610c348284610c06565b60208201915081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a000000000000600082015250565b6000610c79601a83610ba5565b9150610c8482610c43565b601a82019050919050565b600081519050919050565b60005b83811015610cb8578082015181840152602081019050610c9d565b83811115610cc7576000848401525b50505050565b6000610cd882610c8f565b610ce28185610ba5565b9350610cf2818560208601610c9a565b80840191505092915050565b600081519050919050565b600081905092915050565b6000610d1f82610cfe565b610d298185610d09565b9350610d39818560208601610c9a565b80840191505092915050565b6000610d5082610c6c565b9150610d5c8285610ccd565b9150610d688284610d14565b91508190509392505050565b610d7d81610814565b82525050565b6000608082019050610d986000830187610adf565b610da56020830186610d74565b610db26040830185610adf565b610dbf6060830184610adf565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600082825260208201905092915050565b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000610e3e601883610df7565b9150610e4982610e08565b602082019050919050565b60006020820190508181036000830152610e6d81610e31565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000610eaa601f83610df7565b9150610eb582610e74565b602082019050919050565b60006020820190508181036000830152610ed981610e9d565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000610f3c602283610df7565b9150610f4782610ee0565b604082019050919050565b60006020820190508181036000830152610f6b81610f2f565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000610fce602283610df7565b9150610fd982610f72565b604082019050919050565b60006020820190508181036000830152610ffd81610fc1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b600061104882611033565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561107b5761107a611004565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006110c082611033565b91506110cb83611033565b9250826110db576110da611086565b5b828204905092915050565b60006110f182611033565b91506110fc83611033565b92508282101561110f5761110e611004565b5b828203905092915050565b600061112582611033565b915061113083611033565b9250826111405761113f611086565b5b828206905092915050565b600061115682611033565b915061116183611033565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561119657611195611004565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220ac98863db5f3b173a4b01c3c202fa66e6314ecfa0f3277359b8b46558e1f2bd464736f6c63430008090033";

type ECDSAMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ECDSAMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ECDSAMock__factory extends ContractFactory {
  constructor(...args: ECDSAMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ECDSAMock> {
    return super.deploy(overrides || {}) as Promise<ECDSAMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ECDSAMock {
    return super.attach(address) as ECDSAMock;
  }
  override connect(signer: Signer): ECDSAMock__factory {
    return super.connect(signer) as ECDSAMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ECDSAMockInterface {
    return new utils.Interface(_abi) as ECDSAMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ECDSAMock {
    return new Contract(address, _abi, signerOrProvider) as ECDSAMock;
  }
}
