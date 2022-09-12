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
  ERC20SnapshotMock,
  ERC20SnapshotMockInterface,
} from "../../../oz/mocks/ERC20SnapshotMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "initialAccount",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialBalance",
        type: "uint256",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Snapshot",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "snapshotId",
        type: "uint256",
      },
    ],
    name: "balanceOfAt",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "snapshot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "snapshotId",
        type: "uint256",
      },
    ],
    name: "totalSupplyAt",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002b0938038062002b098339818101604052810190620000379190620007d9565b8383816003908051906020019062000051929190620004ec565b5080600490805190602001906200006a929190620004ec565b5050506200007f82826200008960201b60201c565b5050505062000a95565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000fc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f390620008ea565b60405180910390fd5b62000110600083836200020260201b60201c565b80600260008282546200012491906200093b565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200017b91906200093b565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001e29190620009a9565b60405180910390a3620001fe60008383620002fd60201b60201c565b5050565b6200021a8383836200030260201b620009081760201c565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415620002775762000261826200030760201b60201c565b620002716200036a60201b60201c565b620002f8565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620002d457620002be836200030760201b60201c565b620002ce6200036a60201b60201c565b620002f7565b620002e5836200030760201b60201c565b620002f6826200030760201b60201c565b5b5b505050565b505050565b505050565b62000367600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206200035b836200038e60201b60201c565b620003d660201b60201c565b50565b6200038c6006620003806200046260201b60201c565b620003d660201b60201c565b565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000620003e86200046c60201b60201c565b905080620003ff846000016200048a60201b60201c565b10156200045d5782600001819080600181540180825580915050600190039060005260206000200160009091909190915055826001018290806001815401808255809150506001900390600052602060002001600090919091909150555b505050565b6000600254905090565b6000620004856008620004de60201b6200090d1760201c565b905090565b60008082805490501415620004a35760009050620004d9565b8160018380549050620004b79190620009c6565b81548110620004cb57620004ca62000a01565b5b906000526020600020015490505b919050565b600081600001549050919050565b828054620004fa9062000a5f565b90600052602060002090601f0160209004810192826200051e57600085556200056a565b82601f106200053957805160ff19168380011785556200056a565b828001600101855582156200056a579182015b82811115620005695782518255916020019190600101906200054c565b5b5090506200057991906200057d565b5090565b5b80821115620005985760008160009055506001016200057e565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200060582620005ba565b810181811067ffffffffffffffff82111715620006275762000626620005cb565b5b80604052505050565b60006200063c6200059c565b90506200064a8282620005fa565b919050565b600067ffffffffffffffff8211156200066d576200066c620005cb565b5b6200067882620005ba565b9050602081019050919050565b60005b83811015620006a557808201518184015260208101905062000688565b83811115620006b5576000848401525b50505050565b6000620006d2620006cc846200064f565b62000630565b905082815260208101848484011115620006f157620006f0620005b5565b5b620006fe84828562000685565b509392505050565b600082601f8301126200071e576200071d620005b0565b5b815162000730848260208601620006bb565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620007668262000739565b9050919050565b620007788162000759565b81146200078457600080fd5b50565b60008151905062000798816200076d565b92915050565b6000819050919050565b620007b3816200079e565b8114620007bf57600080fd5b50565b600081519050620007d381620007a8565b92915050565b60008060008060808587031215620007f657620007f5620005a6565b5b600085015167ffffffffffffffff811115620008175762000816620005ab565b5b620008258782880162000706565b945050602085015167ffffffffffffffff811115620008495762000848620005ab565b5b620008578782880162000706565b93505060406200086a8782880162000787565b92505060606200087d87828801620007c2565b91505092959194509250565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620008d2601f8362000889565b9150620008df826200089a565b602082019050919050565b600060208201905081810360008301526200090581620008c3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000948826200079e565b915062000955836200079e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200098d576200098c6200090c565b5b828201905092915050565b620009a3816200079e565b82525050565b6000602082019050620009c0600083018462000998565b92915050565b6000620009d3826200079e565b9150620009e0836200079e565b925082821015620009f657620009f56200090c565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000a7857607f821691505b6020821081141562000a8f5762000a8e62000a30565b5b50919050565b6120648062000aa56000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a08231116100975780639dc29fac116100665780639dc29fac146102c3578063a457c2d7146102df578063a9059cbb1461030f578063dd62ed3e1461033f57610100565b806370a082311461023b57806395d89b411461026b5780639711715a14610289578063981b24d01461029357610100565b8063313ce567116100d3578063313ce567146101a157806339509351146101bf57806340c10f19146101ef5780634ee2cd7e1461020b57610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d61036f565b60405161011a91906115a0565b60405180910390f35b61013d6004803603810190610138919061165b565b610401565b60405161014a91906116b6565b60405180910390f35b61015b61041f565b60405161016891906116e0565b60405180910390f35b61018b600480360381019061018691906116fb565b610429565b60405161019891906116b6565b60405180910390f35b6101a9610521565b6040516101b6919061176a565b60405180910390f35b6101d960048036038101906101d4919061165b565b61052a565b6040516101e691906116b6565b60405180910390f35b6102096004803603810190610204919061165b565b6105d6565b005b6102256004803603810190610220919061165b565b6105e4565b60405161023291906116e0565b60405180910390f35b61025560048036038101906102509190611785565b610654565b60405161026291906116e0565b60405180910390f35b61027361069c565b60405161028091906115a0565b60405180910390f35b61029161072e565b005b6102ad60048036038101906102a891906117b2565b610739565b6040516102ba91906116e0565b60405180910390f35b6102dd60048036038101906102d8919061165b565b61076a565b005b6102f960048036038101906102f4919061165b565b610778565b60405161030691906116b6565b60405180910390f35b6103296004803603810190610324919061165b565b610863565b60405161033691906116b6565b60405180910390f35b610359600480360381019061035491906117df565b610881565b60405161036691906116e0565b60405180910390f35b60606003805461037e9061184e565b80601f01602080910402602001604051908101604052809291908181526020018280546103aa9061184e565b80156103f75780601f106103cc576101008083540402835291602001916103f7565b820191906000526020600020905b8154815290600101906020018083116103da57829003601f168201915b5050505050905090565b600061041561040e61091b565b8484610923565b6001905092915050565b6000600254905090565b6000610436848484610aee565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061048161091b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610501576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f8906118f2565b60405180910390fd5b6105158561050d61091b565b858403610923565b60019150509392505050565b60006012905090565b60006105cc61053761091b565b84846001600061054561091b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105c79190611941565b610923565b6001905092915050565b6105e08282610d6f565b5050565b600080600061063184600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610ecf565b91509150816106485761064385610654565b61064a565b805b9250505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546106ab9061184e565b80601f01602080910402602001604051908101604052809291908181526020018280546106d79061184e565b80156107245780601f106106f957610100808354040283529160200191610724565b820191906000526020600020905b81548152906001019060200180831161070757829003601f168201915b5050505050905090565b610736610fc5565b50565b6000806000610749846006610ecf565b915091508161075f5761075a61041f565b610761565b805b92505050919050565b610774828261101b565b5050565b6000806001600061078761091b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610844576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083b90611a09565b60405180910390fd5b61085861084f61091b565b85858403610923565b600191505092915050565b600061087761087061091b565b8484610aee565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b505050565b600081600001549050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610993576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098a90611a9b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109fa90611b2d565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610ae191906116e0565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5590611bbf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610bce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc590611c51565b60405180910390fd5b610bd98383836111f2565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5690611ce3565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cf29190611941565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d5691906116e0565b60405180910390a3610d698484846112ac565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ddf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd690611d4f565b60405180910390fd5b610deb600083836111f2565b8060026000828254610dfd9190611941565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e529190611941565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610eb791906116e0565b60405180910390a3610ecb600083836112ac565b5050565b60008060008411610f15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0c90611dbb565b60405180910390fd5b610f1d6112b1565b841115610f5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5690611e27565b60405180910390fd5b6000610f7785856000016112c290919063ffffffff16565b90508360000180549050811415610f95576000809250925050610fbe565b6001846001018281548110610fad57610fac611e47565b5b906000526020600020015492509250505b9250929050565b6000610fd1600861139c565b6000610fdb6112b1565b90507f8030e83b04d87bef53480e26263266d6ca66863aa8506aca6f2559d18aa1cb678160405161100c91906116e0565b60405180910390a18091505090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561108b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108290611ee8565b60405180910390fd5b611097826000836111f2565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561111d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111490611f7a565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546111749190611f9a565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111d991906116e0565b60405180910390a36111ed836000846112ac565b505050565b6111fd838383610908565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156112485761123b826113b2565b611243611405565b6112a7565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561129357611286836113b2565b61128e611405565b6112a6565b61129c836113b2565b6112a5826113b2565b5b5b505050565b505050565b60006112bd600861090d565b905090565b600080838054905014156112d95760009050611396565b600080848054905090505b8082101561133d5760006112f88383611419565b90508486828154811061130e5761130d611e47565b5b9060005260206000200154111561132757809150611337565b6001816113349190611941565b92505b506112e4565b600082118015611375575083856001846113579190611f9a565b8154811061136857611367611e47565b5b9060005260206000200154145b15611390576001826113879190611f9a565b92505050611396565b81925050505b92915050565b6001816000016000828254019250508190555050565b611402600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206113fd83610654565b61143f565b50565b611417600661141261041f565b61143f565b565b6000600282841861142a9190611ffd565b8284166114379190611941565b905092915050565b60006114496112b1565b905080611458846000016114ba565b10156114b55782600001819080600181540180825580915050600190039060005260206000200160009091909190915055826001018290806001815401808255809150506001900390600052602060002001600090919091909150555b505050565b600080828054905014156114d15760009050611502565b81600183805490506114e39190611f9a565b815481106114f4576114f3611e47565b5b906000526020600020015490505b919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611541578082015181840152602081019050611526565b83811115611550576000848401525b50505050565b6000601f19601f8301169050919050565b600061157282611507565b61157c8185611512565b935061158c818560208601611523565b61159581611556565b840191505092915050565b600060208201905081810360008301526115ba8184611567565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006115f2826115c7565b9050919050565b611602816115e7565b811461160d57600080fd5b50565b60008135905061161f816115f9565b92915050565b6000819050919050565b61163881611625565b811461164357600080fd5b50565b6000813590506116558161162f565b92915050565b60008060408385031215611672576116716115c2565b5b600061168085828601611610565b925050602061169185828601611646565b9150509250929050565b60008115159050919050565b6116b08161169b565b82525050565b60006020820190506116cb60008301846116a7565b92915050565b6116da81611625565b82525050565b60006020820190506116f560008301846116d1565b92915050565b600080600060608486031215611714576117136115c2565b5b600061172286828701611610565b935050602061173386828701611610565b925050604061174486828701611646565b9150509250925092565b600060ff82169050919050565b6117648161174e565b82525050565b600060208201905061177f600083018461175b565b92915050565b60006020828403121561179b5761179a6115c2565b5b60006117a984828501611610565b91505092915050565b6000602082840312156117c8576117c76115c2565b5b60006117d684828501611646565b91505092915050565b600080604083850312156117f6576117f56115c2565b5b600061180485828601611610565b925050602061181585828601611610565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061186657607f821691505b6020821081141561187a5761187961181f565b5b50919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b60006118dc602883611512565b91506118e782611880565b604082019050919050565b6000602082019050818103600083015261190b816118cf565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061194c82611625565b915061195783611625565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561198c5761198b611912565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006119f3602583611512565b91506119fe82611997565b604082019050919050565b60006020820190508181036000830152611a22816119e6565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611a85602483611512565b9150611a9082611a29565b604082019050919050565b60006020820190508181036000830152611ab481611a78565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611b17602283611512565b9150611b2282611abb565b604082019050919050565b60006020820190508181036000830152611b4681611b0a565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611ba9602583611512565b9150611bb482611b4d565b604082019050919050565b60006020820190508181036000830152611bd881611b9c565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611c3b602383611512565b9150611c4682611bdf565b604082019050919050565b60006020820190508181036000830152611c6a81611c2e565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611ccd602683611512565b9150611cd882611c71565b604082019050919050565b60006020820190508181036000830152611cfc81611cc0565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611d39601f83611512565b9150611d4482611d03565b602082019050919050565b60006020820190508181036000830152611d6881611d2c565b9050919050565b7f4552433230536e617073686f743a206964206973203000000000000000000000600082015250565b6000611da5601683611512565b9150611db082611d6f565b602082019050919050565b60006020820190508181036000830152611dd481611d98565b9050919050565b7f4552433230536e617073686f743a206e6f6e6578697374656e74206964000000600082015250565b6000611e11601d83611512565b9150611e1c82611ddb565b602082019050919050565b60006020820190508181036000830152611e4081611e04565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ed2602183611512565b9150611edd82611e76565b604082019050919050565b60006020820190508181036000830152611f0181611ec5565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f64602283611512565b9150611f6f82611f08565b604082019050919050565b60006020820190508181036000830152611f9381611f57565b9050919050565b6000611fa582611625565b9150611fb083611625565b925082821015611fc357611fc2611912565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061200882611625565b915061201383611625565b92508261202357612022611fce565b5b82820490509291505056fea2646970667358221220e4643a7f6dcd8b521dd58b49f901ab7f273f6dd5a0be3d1d9d2cb693739dc9d464736f6c63430008090033";

type ERC20SnapshotMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20SnapshotMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20SnapshotMock__factory extends ContractFactory {
  constructor(...args: ERC20SnapshotMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    initialAccount: PromiseOrValue<string>,
    initialBalance: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20SnapshotMock> {
    return super.deploy(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    ) as Promise<ERC20SnapshotMock>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    initialAccount: PromiseOrValue<string>,
    initialBalance: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    );
  }
  override attach(address: string): ERC20SnapshotMock {
    return super.attach(address) as ERC20SnapshotMock;
  }
  override connect(signer: Signer): ERC20SnapshotMock__factory {
    return super.connect(signer) as ERC20SnapshotMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20SnapshotMockInterface {
    return new utils.Interface(_abi) as ERC20SnapshotMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20SnapshotMock {
    return new Contract(address, _abi, signerOrProvider) as ERC20SnapshotMock;
  }
}
