/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  RefundEscrow,
  RefundEscrowInterface,
} from "../../../../oz/utils/escrow/RefundEscrow";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "beneficiary_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "RefundsClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "RefundsEnabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [],
    name: "beneficiary",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "beneficiaryWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "close",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "refundee",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "payee",
        type: "address",
      },
    ],
    name: "depositsOf",
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
    name: "enableRefunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum RefundEscrow.State",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "payee",
        type: "address",
      },
    ],
    name: "withdraw",
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
    name: "withdrawalAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620018f7380380620018f7833981810160405281019062000037919062000269565b620000576200004b6200013360201b60201c565b6200013b60201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620000ca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000c19062000322565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506000600260006101000a81548160ff0219169083600281111562000127576200012662000344565b5b02179055505062000373565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002318262000204565b9050919050565b620002438162000224565b81146200024f57600080fd5b50565b600081519050620002638162000238565b92915050565b600060208284031215620002825762000281620001ff565b5b6000620002928482850162000252565b91505092915050565b600082825260208201905092915050565b7f526566756e64457363726f773a2062656e65666963696172792069732074686560008201527f207a65726f206164647265737300000000000000000000000000000000000000602082015250565b60006200030a602d836200029b565b91506200031782620002ac565b604082019050919050565b600060208201905081810360008301526200033d81620002fb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6080516115686200038f600039600061027501526115686000f3fe6080604052600436106100a75760003560e01c80638da5cb5b116100645780638da5cb5b146101825780639af6549a146101ad578063c19d93fb146101c4578063e3a9db1a146101ef578063f2fde38b1461022c578063f340fa0114610255576100a7565b806338af3eed146100ac57806343d726d6146100d757806351cff8d9146100ee578063685ca19414610117578063715018a6146101545780638c52dc411461016b575b600080fd5b3480156100b857600080fd5b506100c1610271565b6040516100ce9190610d76565b60405180910390f35b3480156100e357600080fd5b506100ec610299565b005b3480156100fa57600080fd5b5061011560048036038101906101109190610dc2565b6103db565b005b34801561012357600080fd5b5061013e60048036038101906101399190610e2d565b61042f565b60405161014b9190610e75565b60405180910390f35b34801561016057600080fd5b50610169610467565b005b34801561017757600080fd5b506101806104ef565b005b34801561018e57600080fd5b50610197610632565b6040516101a49190610e9f565b60405180910390f35b3480156101b957600080fd5b506101c261065b565b005b3480156101d057600080fd5b506101d96106fa565b6040516101e69190610f31565b60405180910390f35b3480156101fb57600080fd5b5061021660048036038101906102119190610e2d565b610711565b6040516102239190610f65565b60405180910390f35b34801561023857600080fd5b50610253600480360381019061024e9190610e2d565b61075a565b005b61026f600480360381019061026a9190610e2d565b610852565b005b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6102a16108cc565b73ffffffffffffffffffffffffffffffffffffffff166102bf610632565b73ffffffffffffffffffffffffffffffffffffffff1614610315576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030c90610fdd565b60405180910390fd5b6000600281111561032957610328610eba565b5b6103316106fa565b600281111561034357610342610eba565b5b14610383576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037a9061106f565b60405180910390fd5b60028060006101000a81548160ff021916908360028111156103a8576103a7610eba565b5b02179055507f088672c3a6e342f7cd94a65ba63b79df24a8973927b4d05d803c44bbf787d12f60405160405180910390a1565b6103e48161042f565b610423576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041a90611101565b60405180910390fd5b61042c816108d4565b50565b60006001600281111561044557610444610eba565b5b61044d6106fa565b600281111561045f5761045e610eba565b5b149050919050565b61046f6108cc565b73ffffffffffffffffffffffffffffffffffffffff1661048d610632565b73ffffffffffffffffffffffffffffffffffffffff16146104e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104da90610fdd565b60405180910390fd5b6104ed6000610a54565b565b6104f76108cc565b73ffffffffffffffffffffffffffffffffffffffff16610515610632565b73ffffffffffffffffffffffffffffffffffffffff161461056b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056290610fdd565b60405180910390fd5b6000600281111561057f5761057e610eba565b5b6105876106fa565b600281111561059957610598610eba565b5b146105d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d090611193565b60405180910390fd5b6001600260006101000a81548160ff021916908360028111156105ff576105fe610eba565b5b02179055507f599d8e5a83cffb867d051598c4d70e805d59802d8081c1c7d6dffc5b6aca2b8960405160405180910390a1565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60028081111561066e5761066d610eba565b5b6106766106fa565b600281111561068857610687610eba565b5b146106c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106bf90611225565b60405180910390fd5b6106f8476106d4610271565b73ffffffffffffffffffffffffffffffffffffffff16610b1890919063ffffffff16565b565b6000600260009054906101000a900460ff16905090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6107626108cc565b73ffffffffffffffffffffffffffffffffffffffff16610780610632565b73ffffffffffffffffffffffffffffffffffffffff16146107d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107cd90610fdd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610846576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083d906112b7565b60405180910390fd5b61084f81610a54565b50565b6000600281111561086657610865610eba565b5b61086e6106fa565b60028111156108805761087f610eba565b5b146108c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b790611349565b60405180910390fd5b6108c981610c0c565b50565b600033905090565b6108dc6108cc565b73ffffffffffffffffffffffffffffffffffffffff166108fa610632565b73ffffffffffffffffffffffffffffffffffffffff1614610950576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094790610fdd565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a02818373ffffffffffffffffffffffffffffffffffffffff16610b1890919063ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d582604051610a489190610f65565b60405180910390a25050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80471015610b5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b52906113b5565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff1682604051610b8190611406565b60006040518083038185875af1925050503d8060008114610bbe576040519150601f19603f3d011682016040523d82523d6000602084013e610bc3565b606091505b5050905080610c07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfe9061148d565b60405180910390fd5b505050565b610c146108cc565b73ffffffffffffffffffffffffffffffffffffffff16610c32610632565b73ffffffffffffffffffffffffffffffffffffffff1614610c88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7f90610fdd565b60405180910390fd5b600034905080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cdc91906114dc565b925050819055508173ffffffffffffffffffffffffffffffffffffffff167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c482604051610d299190610f65565b60405180910390a25050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d6082610d35565b9050919050565b610d7081610d55565b82525050565b6000602082019050610d8b6000830184610d67565b92915050565b600080fd5b610d9f81610d55565b8114610daa57600080fd5b50565b600081359050610dbc81610d96565b92915050565b600060208284031215610dd857610dd7610d91565b5b6000610de684828501610dad565b91505092915050565b6000610dfa82610d35565b9050919050565b610e0a81610def565b8114610e1557600080fd5b50565b600081359050610e2781610e01565b92915050565b600060208284031215610e4357610e42610d91565b5b6000610e5184828501610e18565b91505092915050565b60008115159050919050565b610e6f81610e5a565b82525050565b6000602082019050610e8a6000830184610e66565b92915050565b610e9981610def565b82525050565b6000602082019050610eb46000830184610e90565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110610efa57610ef9610eba565b5b50565b6000819050610f0b82610ee9565b919050565b6000610f1b82610efd565b9050919050565b610f2b81610f10565b82525050565b6000602082019050610f466000830184610f22565b92915050565b6000819050919050565b610f5f81610f4c565b82525050565b6000602082019050610f7a6000830184610f56565b92915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610fc7602083610f80565b9150610fd282610f91565b602082019050919050565b60006020820190508181036000830152610ff681610fba565b9050919050565b7f526566756e64457363726f773a2063616e206f6e6c7920636c6f73652077686960008201527f6c65206163746976650000000000000000000000000000000000000000000000602082015250565b6000611059602983610f80565b915061106482610ffd565b604082019050919050565b600060208201905081810360008301526110888161104c565b9050919050565b7f436f6e646974696f6e616c457363726f773a207061796565206973206e6f742060008201527f616c6c6f77656420746f20776974686472617700000000000000000000000000602082015250565b60006110eb603383610f80565b91506110f68261108f565b604082019050919050565b6000602082019050818103600083015261111a816110de565b9050919050565b7f526566756e64457363726f773a2063616e206f6e6c7920656e61626c6520726560008201527f66756e6473207768696c65206163746976650000000000000000000000000000602082015250565b600061117d603283610f80565b915061118882611121565b604082019050919050565b600060208201905081810360008301526111ac81611170565b9050919050565b7f526566756e64457363726f773a2062656e65666963696172792063616e206f6e60008201527f6c79207769746864726177207768696c6520636c6f7365640000000000000000602082015250565b600061120f603883610f80565b915061121a826111b3565b604082019050919050565b6000602082019050818103600083015261123e81611202565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006112a1602683610f80565b91506112ac82611245565b604082019050919050565b600060208201905081810360008301526112d081611294565b9050919050565b7f526566756e64457363726f773a2063616e206f6e6c79206465706f736974207760008201527f68696c6520616374697665000000000000000000000000000000000000000000602082015250565b6000611333602b83610f80565b915061133e826112d7565b604082019050919050565b6000602082019050818103600083015261136281611326565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e6365000000600082015250565b600061139f601d83610f80565b91506113aa82611369565b602082019050919050565b600060208201905081810360008301526113ce81611392565b9050919050565b600081905092915050565b50565b60006113f06000836113d5565b91506113fb826113e0565b600082019050919050565b6000611411826113e3565b9150819050919050565b7f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260008201527f6563697069656e74206d61792068617665207265766572746564000000000000602082015250565b6000611477603a83610f80565b91506114828261141b565b604082019050919050565b600060208201905081810360008301526114a68161146a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006114e782610f4c565b91506114f283610f4c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611527576115266114ad565b5b82820190509291505056fea26469706673582212207539aaa4bd08055cb46b0eb7253d208e0f1329e1a284fc94d5e0103ae036b2b864736f6c63430008090033";

type RefundEscrowConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RefundEscrowConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RefundEscrow__factory extends ContractFactory {
  constructor(...args: RefundEscrowConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    beneficiary_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RefundEscrow> {
    return super.deploy(beneficiary_, overrides || {}) as Promise<RefundEscrow>;
  }
  override getDeployTransaction(
    beneficiary_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(beneficiary_, overrides || {});
  }
  override attach(address: string): RefundEscrow {
    return super.attach(address) as RefundEscrow;
  }
  override connect(signer: Signer): RefundEscrow__factory {
    return super.connect(signer) as RefundEscrow__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RefundEscrowInterface {
    return new utils.Interface(_abi) as RefundEscrowInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RefundEscrow {
    return new Contract(address, _abi, signerOrProvider) as RefundEscrow;
  }
}
