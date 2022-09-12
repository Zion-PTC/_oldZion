/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ClonesMock,
  ClonesMockInterface,
} from "../../../oz/mocks/ClonesMock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "instance",
        type: "address",
      },
    ],
    name: "NewInstance",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "initdata",
        type: "bytes",
      },
    ],
    name: "clone",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "initdata",
        type: "bytes",
      },
    ],
    name: "cloneDeterministic",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "predictDeterministicAddress",
    outputs: [
      {
        internalType: "address",
        name: "predicted",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610bcd806100206000396000f3fe6080604052600436106100345760003560e01c80630fbe133c14610039578063360d0fad146100555780636e9ebc8114610092575b600080fd5b610053600480360381019061004e919061070b565b6100ae565b005b34801561006157600080fd5b5061007c600480360381019061007791906107a1565b61011f565b60405161008991906107f0565b60405180910390f35b6100ac60048036038101906100a7919061080b565b610152565b005b61011a6100d08473ffffffffffffffffffffffffffffffffffffffff166101ce565b83838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506102a3565b505050565b600061014a828473ffffffffffffffffffffffffffffffffffffffff1661031590919063ffffffff16565b905092915050565b6101c861017e848673ffffffffffffffffffffffffffffffffffffffff1661032a90919063ffffffff16565b83838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506102a3565b50505050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f0915050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561029e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610295906108dc565b60405180910390fd5b919050565b6000815111156102da576102d881348473ffffffffffffffffffffffffffffffffffffffff166104019092919063ffffffff16565b505b7f39a773f10839d86923d91d5ce7d6642f2f63a95d850495abb1f162e38aa04ea58260405161030991906107f0565b60405180910390a15050565b6000610322838330610430565b905092915050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528360601b60148201527f5af43d82803e903d91602b57fd5bf300000000000000000000000000000000006028820152826037826000f5915050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156103fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f290610948565b60405180910390fd5b92915050565b6060610427848484604051806060016040528060298152602001610b6f602991396104b0565b90509392505050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528460601b60148201527f5af43d82803e903d91602b57fd5bf3ff0000000000000000000000000000000060288201528260601b603882015283604c82015260378120606c820152605560378201209150509392505050565b6060824710156104f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ec906109da565b60405180910390fd5b6104fe856105c4565b61053d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053490610a46565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516105669190610ae0565b60006040518083038185875af1925050503d80600081146105a3576040519150601f19603f3d011682016040523d82523d6000602084013e6105a8565b606091505b50915091506105b88282866105d7565b92505050949350505050565b600080823b905060008111915050919050565b606083156105e757829050610637565b6000835111156105fa5782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062e9190610b4c565b60405180910390fd5b9392505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061067382610648565b9050919050565b61068381610668565b811461068e57600080fd5b50565b6000813590506106a08161067a565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126106cb576106ca6106a6565b5b8235905067ffffffffffffffff8111156106e8576106e76106ab565b5b602083019150836001820283011115610704576107036106b0565b5b9250929050565b6000806000604084860312156107245761072361063e565b5b600061073286828701610691565b935050602084013567ffffffffffffffff81111561075357610752610643565b5b61075f868287016106b5565b92509250509250925092565b6000819050919050565b61077e8161076b565b811461078957600080fd5b50565b60008135905061079b81610775565b92915050565b600080604083850312156107b8576107b761063e565b5b60006107c685828601610691565b92505060206107d78582860161078c565b9150509250929050565b6107ea81610668565b82525050565b600060208201905061080560008301846107e1565b92915050565b600080600080606085870312156108255761082461063e565b5b600061083387828801610691565b94505060206108448782880161078c565b935050604085013567ffffffffffffffff81111561086557610864610643565b5b610871878288016106b5565b925092505092959194509250565b600082825260208201905092915050565b7f455243313136373a20637265617465206661696c656400000000000000000000600082015250565b60006108c660168361087f565b91506108d182610890565b602082019050919050565b600060208201905081810360008301526108f5816108b9565b9050919050565b7f455243313136373a2063726561746532206661696c6564000000000000000000600082015250565b600061093260178361087f565b915061093d826108fc565b602082019050919050565b6000602082019050818103600083015261096181610925565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006109c460268361087f565b91506109cf82610968565b604082019050919050565b600060208201905081810360008301526109f3816109b7565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000610a30601d8361087f565b9150610a3b826109fa565b602082019050919050565b60006020820190508181036000830152610a5f81610a23565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015610a9a578082015181840152602081019050610a7f565b83811115610aa9576000848401525b50505050565b6000610aba82610a66565b610ac48185610a71565b9350610ad4818560208601610a7c565b80840191505092915050565b6000610aec8284610aaf565b915081905092915050565b600081519050919050565b6000601f19601f8301169050919050565b6000610b1e82610af7565b610b28818561087f565b9350610b38818560208601610a7c565b610b4181610b02565b840191505092915050565b60006020820190508181036000830152610b668184610b13565b90509291505056fe416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c7565206661696c6564a2646970667358221220cb2f66645ff68d484c589c0206d97af466899b6c810da958cdc2c645adb89b0e64736f6c63430008090033";

type ClonesMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClonesMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ClonesMock__factory extends ContractFactory {
  constructor(...args: ClonesMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ClonesMock> {
    return super.deploy(overrides || {}) as Promise<ClonesMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ClonesMock {
    return super.attach(address) as ClonesMock;
  }
  override connect(signer: Signer): ClonesMock__factory {
    return super.connect(signer) as ClonesMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClonesMockInterface {
    return new utils.Interface(_abi) as ClonesMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClonesMock {
    return new Contract(address, _abi, signerOrProvider) as ClonesMock;
  }
}
