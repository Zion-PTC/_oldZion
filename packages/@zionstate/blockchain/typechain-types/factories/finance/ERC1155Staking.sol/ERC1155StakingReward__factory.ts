/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC1155StakingReward,
  ERC1155StakingRewardInterface,
} from "../../../finance/ERC1155Staking.sol/ERC1155StakingReward";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakingToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardsToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rewardRate",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "earned",
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
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdateTime",
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
    name: "rewardPerToken",
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
    name: "rewardPerTokenStored",
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
    name: "rewardRate",
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
    ],
    name: "rewards",
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
    name: "rewardsToken",
    outputs: [
      {
        internalType: "contract IERC1155",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsTokenId",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingToken",
    outputs: [
      {
        internalType: "contract IERC1155",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingTokenId",
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
    ],
    name: "userRewardPerTokenPaid",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000fda38038062000fda83398181016040528101906200003791906200016d565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600481905550505050620001c9565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000fa82620000cd565b9050919050565b6200010c81620000ed565b81146200011857600080fd5b50565b6000815190506200012c8162000101565b92915050565b6000819050919050565b620001478162000132565b81146200015357600080fd5b50565b60008151905062000167816200013c565b92915050565b600080600060608486031215620001895762000188620000c8565b5b600062000199868287016200011b565b9350506020620001ac868287016200011b565b9250506040620001bf8682870162000156565b9150509250925092565b610e0180620001d96000396000f3fe608060405234801561001057600080fd5b50600436106100e95760003560e01c8063a694fc3a1161008c578063cd3daf9d11610066578063cd3daf9d14610238578063d1af0c7d14610256578063dc8426da14610274578063df136d6514610292576100e9565b8063a694fc3a146101e0578063c8f33c91146101fc578063cb8cbcae1461021a576100e9565b80633d18b912116100c85780633d18b9121461016a57806372f702f3146101745780637b0a47ee146101925780638b876347146101b0576100e9565b80628cc262146100ee5780630700037d1461011e5780632e1a7d4d1461014e575b600080fd5b61010860048036038101906101039190610a86565b6102b0565b6040516101159190610acc565b60405180910390f35b61013860048036038101906101339190610a86565b6103b2565b6040516101459190610acc565b60405180910390f35b61016860048036038101906101639190610b13565b6103ca565b005b61017261058f565b005b61017c610773565b6040516101899190610b9f565b60405180910390f35b61019a610799565b6040516101a79190610acc565b60405180910390f35b6101ca60048036038101906101c59190610a86565b61079f565b6040516101d79190610acc565b60405180910390f35b6101fa60048036038101906101f59190610b13565b6107b7565b005b61020461097c565b6040516102119190610acc565b60405180910390f35b610222610982565b60405161022f9190610acc565b60405180910390f35b610240610988565b60405161024d9190610acc565b60405180910390f35b61025e6109eb565b60405161026b9190610b9f565b60405180910390f35b61027c610a0f565b6040516102899190610acc565b60405180910390f35b61029a610a15565b6040516102a79190610acc565b60405180910390f35b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054670de0b6b3a7640000600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610343610988565b61034d9190610be9565b600a60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103979190610c1d565b6103a19190610ca6565b6103ab9190610cd7565b9050919050565b60086020528060005260406000206000915090505481565b6103d2610a1b565b6103da610988565b600681905550426005819055506103f0816102b0565b600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600654600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816009600082825461048b9190610be9565b9250508190555081600a600061049f610a1b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104e89190610be9565b92505081905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a30610536610a1b565b600354866040518563ffffffff1660e01b81526004016105599493929190610d73565b600060405180830381600087803b15801561057357600080fd5b505af1158015610587573d6000803e3d6000fd5b505050505050565b610597610a1b565b61059f610988565b600681905550426005819055506105b5816102b0565b600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600654600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060006008600061064c610a1b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600060086000610697610a1b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a3061071a610a1b565b600154856040518563ffffffff1660e01b815260040161073d9493929190610d73565b600060405180830381600087803b15801561075757600080fd5b505af115801561076b573d6000803e3d6000fd5b505050505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b60076020528060005260406000206000915090505481565b6107bf610a1b565b6107c7610988565b600681905550426005819055506107dd816102b0565b600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600654600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a6108ac610a1b565b30600354866040518563ffffffff1660e01b81526004016108d09493929190610d73565b600060405180830381600087803b1580156108ea57600080fd5b505af11580156108fe573d6000803e3d6000fd5b5050505081600960008282546109149190610cd7565b9250508190555081600a6000610928610a1b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109719190610cd7565b925050819055505050565b60055481565b60035481565b600080600954141561099d57600090506109e8565b600954670de0b6b3a7640000600554426109b79190610be9565b6004546109c49190610c1d565b6109ce9190610c1d565b6109d89190610ca6565b6006546109e59190610cd7565b90505b90565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b60065481565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a5382610a28565b9050919050565b610a6381610a48565b8114610a6e57600080fd5b50565b600081359050610a8081610a5a565b92915050565b600060208284031215610a9c57610a9b610a23565b5b6000610aaa84828501610a71565b91505092915050565b6000819050919050565b610ac681610ab3565b82525050565b6000602082019050610ae16000830184610abd565b92915050565b610af081610ab3565b8114610afb57600080fd5b50565b600081359050610b0d81610ae7565b92915050565b600060208284031215610b2957610b28610a23565b5b6000610b3784828501610afe565b91505092915050565b6000819050919050565b6000610b65610b60610b5b84610a28565b610b40565b610a28565b9050919050565b6000610b7782610b4a565b9050919050565b6000610b8982610b6c565b9050919050565b610b9981610b7e565b82525050565b6000602082019050610bb46000830184610b90565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610bf482610ab3565b9150610bff83610ab3565b925082821015610c1257610c11610bba565b5b828203905092915050565b6000610c2882610ab3565b9150610c3383610ab3565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610c6c57610c6b610bba565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610cb182610ab3565b9150610cbc83610ab3565b925082610ccc57610ccb610c77565b5b828204905092915050565b6000610ce282610ab3565b9150610ced83610ab3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610d2257610d21610bba565b5b828201905092915050565b610d3681610a48565b82525050565b600082825260208201905092915050565b50565b6000610d5d600083610d3c565b9150610d6882610d4d565b600082019050919050565b600060a082019050610d886000830187610d2d565b610d956020830186610d2d565b610da26040830185610abd565b610daf6060830184610abd565b8181036080830152610dc081610d50565b90509594505050505056fea264697066735822122043f64c86fc674f860d0b8bf71e67a042d3e8f66cb9087930b8ba6a2a617efb2464736f6c63430008090033";

type ERC1155StakingRewardConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155StakingRewardConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155StakingReward__factory extends ContractFactory {
  constructor(...args: ERC1155StakingRewardConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _stakingToken: PromiseOrValue<string>,
    _rewardsToken: PromiseOrValue<string>,
    _rewardRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155StakingReward> {
    return super.deploy(
      _stakingToken,
      _rewardsToken,
      _rewardRate,
      overrides || {}
    ) as Promise<ERC1155StakingReward>;
  }
  override getDeployTransaction(
    _stakingToken: PromiseOrValue<string>,
    _rewardsToken: PromiseOrValue<string>,
    _rewardRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _stakingToken,
      _rewardsToken,
      _rewardRate,
      overrides || {}
    );
  }
  override attach(address: string): ERC1155StakingReward {
    return super.attach(address) as ERC1155StakingReward;
  }
  override connect(signer: Signer): ERC1155StakingReward__factory {
    return super.connect(signer) as ERC1155StakingReward__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155StakingRewardInterface {
    return new utils.Interface(_abi) as ERC1155StakingRewardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155StakingReward {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155StakingReward;
  }
}
