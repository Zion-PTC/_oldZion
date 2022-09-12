/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC1155BurnableMock,
  ERC1155BurnableMockInterface,
} from "../../../oz/mocks/ERC1155BurnableMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
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
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
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
        name: "id",
        type: "uint256",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
    outputs: [],
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
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200345c3803806200345c8339818101604052810190620000379190620002ba565b8062000049816200005160201b60201c565b505062000370565b8060029080519060200190620000699291906200006d565b5050565b8280546200007b906200033a565b90600052602060002090601f0160209004810192826200009f5760008555620000eb565b82601f10620000ba57805160ff1916838001178555620000eb565b82800160010185558215620000eb579182015b82811115620000ea578251825591602001919060010190620000cd565b5b509050620000fa9190620000fe565b5090565b5b8082111562000119576000816000905550600101620000ff565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000186826200013b565b810181811067ffffffffffffffff82111715620001a857620001a76200014c565b5b80604052505050565b6000620001bd6200011d565b9050620001cb82826200017b565b919050565b600067ffffffffffffffff821115620001ee57620001ed6200014c565b5b620001f9826200013b565b9050602081019050919050565b60005b838110156200022657808201518184015260208101905062000209565b8381111562000236576000848401525b50505050565b6000620002536200024d84620001d0565b620001b1565b90508281526020810184848401111562000272576200027162000136565b5b6200027f84828562000206565b509392505050565b600082601f8301126200029f576200029e62000131565b5b8151620002b18482602086016200023c565b91505092915050565b600060208284031215620002d357620002d262000127565b5b600082015167ffffffffffffffff811115620002f457620002f36200012c565b5b620003028482850162000287565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200035357607f821691505b602082108114156200036a57620003696200030b565b5b50919050565b6130dc80620003806000396000f3fe608060405234801561001057600080fd5b50600436106100a85760003560e01c80636b20c454116100715780636b20c45414610189578063731133e9146101a5578063a22cb465146101c1578063e985e9c5146101dd578063f242432a1461020d578063f5298aca14610229576100a8565b8062fdd58e146100ad57806301ffc9a7146100dd5780630e89341c1461010d5780632eb2c2d61461013d5780634e1273f414610159575b600080fd5b6100c760048036038101906100c29190611bb9565b610245565b6040516100d49190611c08565b60405180910390f35b6100f760048036038101906100f29190611c7b565b61030e565b6040516101049190611cc3565b60405180910390f35b61012760048036038101906101229190611cde565b6103f0565b6040516101349190611da4565b60405180910390f35b61015760048036038101906101529190611fc3565b610484565b005b610173600480360381019061016e9190612155565b610525565b604051610180919061228b565b60405180910390f35b6101a3600480360381019061019e91906122ad565b61063e565b005b6101bf60048036038101906101ba9190612338565b6106db565b005b6101db60048036038101906101d691906123e7565b6106ed565b005b6101f760048036038101906101f29190612427565b610703565b6040516102049190611cc3565b60405180910390f35b61022760048036038101906102229190612467565b610797565b005b610243600480360381019061023e91906124fe565b610838565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156102b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad906125c3565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103d957507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103e957506103e8826108d5565b5b9050919050565b6060600280546103ff90612612565b80601f016020809104026020016040519081016040528092919081815260200182805461042b90612612565b80156104785780601f1061044d57610100808354040283529160200191610478565b820191906000526020600020905b81548152906001019060200180831161045b57829003601f168201915b50505050509050919050565b61048c61093f565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806104d257506104d1856104cc61093f565b610703565b5b610511576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610508906126b6565b60405180910390fd5b61051e8585858585610947565b5050505050565b6060815183511461056b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056290612748565b60405180910390fd5b6000835167ffffffffffffffff81111561058857610587611dcb565b5b6040519080825280602002602001820160405280156105b65781602001602082028036833780820191505090505b50905060005b8451811015610633576106038582815181106105db576105da612768565b5b60200260200101518583815181106105f6576105f5612768565b5b6020026020010151610245565b82828151811061061657610615612768565b5b6020026020010181815250508061062c906127c6565b90506105bc565b508091505092915050565b61064661093f565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16148061068c575061068b8361068661093f565b610703565b5b6106cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c290612881565b60405180910390fd5b6106d6838383610c5b565b505050565b6106e784848484610f0c565b50505050565b6106ff6106f861093f565b83836110a2565b5050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61079f61093f565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806107e557506107e4856107df61093f565b610703565b5b610824576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081b90612881565b60405180910390fd5b610831858585858561120f565b5050505050565b61084061093f565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16148061088657506108858361088061093f565b610703565b5b6108c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108bc90612881565b60405180910390fd5b6108d0838383611491565b505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b815183511461098b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098290612913565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156109fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f2906129a5565b60405180910390fd5b6000610a0561093f565b9050610a158187878787876116ae565b60005b8451811015610bc6576000858281518110610a3657610a35612768565b5b602002602001015190506000858381518110610a5557610a54612768565b5b60200260200101519050600080600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610af6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aed90612a37565b60405180910390fd5b81810360008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610bab9190612a57565b9250508190555050505080610bbf906127c6565b9050610a18565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610c3d929190612aad565b60405180910390a4610c538187878787876116b6565b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ccb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc290612b56565b60405180910390fd5b8051825114610d0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0690612913565b60405180910390fd5b6000610d1961093f565b9050610d39818560008686604051806020016040528060008152506116ae565b60005b8351811015610e86576000848281518110610d5a57610d59612768565b5b602002602001015190506000848381518110610d7957610d78612768565b5b60200260200101519050600080600084815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1190612be8565b60405180910390fd5b81810360008085815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050508080610e7e906127c6565b915050610d3c565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051610efe929190612aad565b60405180910390a450505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610f7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7390612c7a565b60405180910390fd5b6000610f8661093f565b9050610fa781600087610f988861189d565b610fa18861189d565b876116ae565b8260008086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110069190612a57565b925050819055508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628787604051611084929190612c9a565b60405180910390a461109b81600087878787611917565b5050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611111576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110890612d35565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516112029190611cc3565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561127f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611276906129a5565b60405180910390fd5b600061128961093f565b90506112a981878761129a8861189d565b6112a38861189d565b876116ae565b600080600086815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015611340576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133790612a37565b60405180910390fd5b83810360008087815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508360008087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113f59190612a57565b925050819055508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628888604051611472929190612c9a565b60405180910390a4611488828888888888611917565b50505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611501576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114f890612b56565b60405180910390fd5b600061150b61093f565b905061153b8185600061151d8761189d565b6115268761189d565b604051806020016040528060008152506116ae565b600080600085815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156115d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115c990612be8565b60405180910390fd5b82810360008086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62878760405161169f929190612c9a565b60405180910390a45050505050565b505050505050565b6116d58473ffffffffffffffffffffffffffffffffffffffff16611afe565b15611895578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b815260040161171b959493929190612db9565b602060405180830381600087803b15801561173557600080fd5b505af192505050801561176657506040513d601f19601f820116820180604052508101906117639190612e36565b60015b61180c57611772612e70565b806308c379a014156117cf5750611787612e92565b8061179257506117d1565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117c69190611da4565b60405180910390fd5b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161180390612f9a565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611893576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161188a9061302c565b60405180910390fd5b505b505050505050565b60606000600167ffffffffffffffff8111156118bc576118bb611dcb565b5b6040519080825280602002602001820160405280156118ea5781602001602082028036833780820191505090505b509050828160008151811061190257611901612768565b5b60200260200101818152505080915050919050565b6119368473ffffffffffffffffffffffffffffffffffffffff16611afe565b15611af6578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b815260040161197c95949392919061304c565b602060405180830381600087803b15801561199657600080fd5b505af19250505080156119c757506040513d601f19601f820116820180604052508101906119c49190612e36565b60015b611a6d576119d3612e70565b806308c379a01415611a3057506119e8612e92565b806119f35750611a32565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a279190611da4565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a6490612f9a565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611af4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aeb9061302c565b60405180910390fd5b505b505050505050565b600080823b905060008111915050919050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611b5082611b25565b9050919050565b611b6081611b45565b8114611b6b57600080fd5b50565b600081359050611b7d81611b57565b92915050565b6000819050919050565b611b9681611b83565b8114611ba157600080fd5b50565b600081359050611bb381611b8d565b92915050565b60008060408385031215611bd057611bcf611b1b565b5b6000611bde85828601611b6e565b9250506020611bef85828601611ba4565b9150509250929050565b611c0281611b83565b82525050565b6000602082019050611c1d6000830184611bf9565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611c5881611c23565b8114611c6357600080fd5b50565b600081359050611c7581611c4f565b92915050565b600060208284031215611c9157611c90611b1b565b5b6000611c9f84828501611c66565b91505092915050565b60008115159050919050565b611cbd81611ca8565b82525050565b6000602082019050611cd86000830184611cb4565b92915050565b600060208284031215611cf457611cf3611b1b565b5b6000611d0284828501611ba4565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611d45578082015181840152602081019050611d2a565b83811115611d54576000848401525b50505050565b6000601f19601f8301169050919050565b6000611d7682611d0b565b611d808185611d16565b9350611d90818560208601611d27565b611d9981611d5a565b840191505092915050565b60006020820190508181036000830152611dbe8184611d6b565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611e0382611d5a565b810181811067ffffffffffffffff82111715611e2257611e21611dcb565b5b80604052505050565b6000611e35611b11565b9050611e418282611dfa565b919050565b600067ffffffffffffffff821115611e6157611e60611dcb565b5b602082029050602081019050919050565b600080fd5b6000611e8a611e8584611e46565b611e2b565b90508083825260208201905060208402830185811115611ead57611eac611e72565b5b835b81811015611ed65780611ec28882611ba4565b845260208401935050602081019050611eaf565b5050509392505050565b600082601f830112611ef557611ef4611dc6565b5b8135611f05848260208601611e77565b91505092915050565b600080fd5b600067ffffffffffffffff821115611f2e57611f2d611dcb565b5b611f3782611d5a565b9050602081019050919050565b82818337600083830152505050565b6000611f66611f6184611f13565b611e2b565b905082815260208101848484011115611f8257611f81611f0e565b5b611f8d848285611f44565b509392505050565b600082601f830112611faa57611fa9611dc6565b5b8135611fba848260208601611f53565b91505092915050565b600080600080600060a08688031215611fdf57611fde611b1b565b5b6000611fed88828901611b6e565b9550506020611ffe88828901611b6e565b945050604086013567ffffffffffffffff81111561201f5761201e611b20565b5b61202b88828901611ee0565b935050606086013567ffffffffffffffff81111561204c5761204b611b20565b5b61205888828901611ee0565b925050608086013567ffffffffffffffff81111561207957612078611b20565b5b61208588828901611f95565b9150509295509295909350565b600067ffffffffffffffff8211156120ad576120ac611dcb565b5b602082029050602081019050919050565b60006120d16120cc84612092565b611e2b565b905080838252602082019050602084028301858111156120f4576120f3611e72565b5b835b8181101561211d57806121098882611b6e565b8452602084019350506020810190506120f6565b5050509392505050565b600082601f83011261213c5761213b611dc6565b5b813561214c8482602086016120be565b91505092915050565b6000806040838503121561216c5761216b611b1b565b5b600083013567ffffffffffffffff81111561218a57612189611b20565b5b61219685828601612127565b925050602083013567ffffffffffffffff8111156121b7576121b6611b20565b5b6121c385828601611ee0565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61220281611b83565b82525050565b600061221483836121f9565b60208301905092915050565b6000602082019050919050565b6000612238826121cd565b61224281856121d8565b935061224d836121e9565b8060005b8381101561227e5781516122658882612208565b975061227083612220565b925050600181019050612251565b5085935050505092915050565b600060208201905081810360008301526122a5818461222d565b905092915050565b6000806000606084860312156122c6576122c5611b1b565b5b60006122d486828701611b6e565b935050602084013567ffffffffffffffff8111156122f5576122f4611b20565b5b61230186828701611ee0565b925050604084013567ffffffffffffffff81111561232257612321611b20565b5b61232e86828701611ee0565b9150509250925092565b6000806000806080858703121561235257612351611b1b565b5b600061236087828801611b6e565b945050602061237187828801611ba4565b935050604061238287828801611ba4565b925050606085013567ffffffffffffffff8111156123a3576123a2611b20565b5b6123af87828801611f95565b91505092959194509250565b6123c481611ca8565b81146123cf57600080fd5b50565b6000813590506123e1816123bb565b92915050565b600080604083850312156123fe576123fd611b1b565b5b600061240c85828601611b6e565b925050602061241d858286016123d2565b9150509250929050565b6000806040838503121561243e5761243d611b1b565b5b600061244c85828601611b6e565b925050602061245d85828601611b6e565b9150509250929050565b600080600080600060a0868803121561248357612482611b1b565b5b600061249188828901611b6e565b95505060206124a288828901611b6e565b94505060406124b388828901611ba4565b93505060606124c488828901611ba4565b925050608086013567ffffffffffffffff8111156124e5576124e4611b20565b5b6124f188828901611f95565b9150509295509295909350565b60008060006060848603121561251757612516611b1b565b5b600061252586828701611b6e565b935050602061253686828701611ba4565b925050604061254786828701611ba4565b9150509250925092565b7f455243313135353a2062616c616e636520717565727920666f7220746865207a60008201527f65726f2061646472657373000000000000000000000000000000000000000000602082015250565b60006125ad602b83611d16565b91506125b882612551565b604082019050919050565b600060208201905081810360008301526125dc816125a0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061262a57607f821691505b6020821081141561263e5761263d6125e3565b5b50919050565b7f455243313135353a207472616e736665722063616c6c6572206973206e6f742060008201527f6f776e6572206e6f7220617070726f7665640000000000000000000000000000602082015250565b60006126a0603283611d16565b91506126ab82612644565b604082019050919050565b600060208201905081810360008301526126cf81612693565b9050919050565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b6000612732602983611d16565b915061273d826126d6565b604082019050919050565b6000602082019050818103600083015261276181612725565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006127d182611b83565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561280457612803612797565b5b600182019050919050565b7f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260008201527f20617070726f7665640000000000000000000000000000000000000000000000602082015250565b600061286b602983611d16565b91506128768261280f565b604082019050919050565b6000602082019050818103600083015261289a8161285e565b9050919050565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b60006128fd602883611d16565b9150612908826128a1565b604082019050919050565b6000602082019050818103600083015261292c816128f0565b9050919050565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061298f602583611d16565b915061299a82612933565b604082019050919050565b600060208201905081810360008301526129be81612982565b9050919050565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b6000612a21602a83611d16565b9150612a2c826129c5565b604082019050919050565b60006020820190508181036000830152612a5081612a14565b9050919050565b6000612a6282611b83565b9150612a6d83611b83565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612aa257612aa1612797565b5b828201905092915050565b60006040820190508181036000830152612ac7818561222d565b90508181036020830152612adb818461222d565b90509392505050565b7f455243313135353a206275726e2066726f6d20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000612b40602383611d16565b9150612b4b82612ae4565b604082019050919050565b60006020820190508181036000830152612b6f81612b33565b9050919050565b7f455243313135353a206275726e20616d6f756e7420657863656564732062616c60008201527f616e636500000000000000000000000000000000000000000000000000000000602082015250565b6000612bd2602483611d16565b9150612bdd82612b76565b604082019050919050565b60006020820190508181036000830152612c0181612bc5565b9050919050565b7f455243313135353a206d696e7420746f20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000612c64602183611d16565b9150612c6f82612c08565b604082019050919050565b60006020820190508181036000830152612c9381612c57565b9050919050565b6000604082019050612caf6000830185611bf9565b612cbc6020830184611bf9565b9392505050565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b6000612d1f602983611d16565b9150612d2a82612cc3565b604082019050919050565b60006020820190508181036000830152612d4e81612d12565b9050919050565b612d5e81611b45565b82525050565b600081519050919050565b600082825260208201905092915050565b6000612d8b82612d64565b612d958185612d6f565b9350612da5818560208601611d27565b612dae81611d5a565b840191505092915050565b600060a082019050612dce6000830188612d55565b612ddb6020830187612d55565b8181036040830152612ded818661222d565b90508181036060830152612e01818561222d565b90508181036080830152612e158184612d80565b90509695505050505050565b600081519050612e3081611c4f565b92915050565b600060208284031215612e4c57612e4b611b1b565b5b6000612e5a84828501612e21565b91505092915050565b60008160e01c9050919050565b600060033d1115612e8f5760046000803e612e8c600051612e63565b90505b90565b600060443d1015612ea257612f25565b612eaa611b11565b60043d036004823e80513d602482011167ffffffffffffffff82111715612ed2575050612f25565b808201805167ffffffffffffffff811115612ef05750505050612f25565b80602083010160043d038501811115612f0d575050505050612f25565b612f1c82602001850186611dfa565b82955050505050505b90565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b6000612f84603483611d16565b9150612f8f82612f28565b604082019050919050565b60006020820190508181036000830152612fb381612f77565b9050919050565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b6000613016602883611d16565b915061302182612fba565b604082019050919050565b6000602082019050818103600083015261304581613009565b9050919050565b600060a0820190506130616000830188612d55565b61306e6020830187612d55565b61307b6040830186611bf9565b6130886060830185611bf9565b818103608083015261309a8184612d80565b9050969550505050505056fea2646970667358221220e2dac5593a3524241a20489b3a86e8e02408f9eb0dcb8426e3bee7473dfa106564736f6c63430008090033";

type ERC1155BurnableMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155BurnableMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155BurnableMock__factory extends ContractFactory {
  constructor(...args: ERC1155BurnableMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    uri: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155BurnableMock> {
    return super.deploy(uri, overrides || {}) as Promise<ERC1155BurnableMock>;
  }
  override getDeployTransaction(
    uri: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri, overrides || {});
  }
  override attach(address: string): ERC1155BurnableMock {
    return super.attach(address) as ERC1155BurnableMock;
  }
  override connect(signer: Signer): ERC1155BurnableMock__factory {
    return super.connect(signer) as ERC1155BurnableMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155BurnableMockInterface {
    return new utils.Interface(_abi) as ERC1155BurnableMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155BurnableMock {
    return new Contract(address, _abi, signerOrProvider) as ERC1155BurnableMock;
  }
}
