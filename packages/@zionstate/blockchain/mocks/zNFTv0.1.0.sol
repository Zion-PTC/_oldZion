// SPDX-License-Identifier: MIT
// Author: Gagliano Giacomo
pragma solidity ^0.8.0;

import "../oz/token/ERC1155/ERC1155.sol";

abstract contract Vault {

}

abstract contract zNFT is ERC1155 {
  /// token ID 0 = Membership Token
  /// token ID 1 = Creator Tokens
  /// token ID 2 = Team Tokens
  /// token ID 3 = Dao Tokens
  /// ERC should have vaults for each Token ID
  /// 

}

abstract contract Profile {
  /// token ID 0 = Membership Token
  /// token ID 1 = Creator Tokens
  /// token ID 2 = Team Tokens
  /// token ID 3 = Dao Tokens
  /// token ID 4 = Stake Tokens
}

abstract contract Product {
  /// token ID 0 = Master Token
  /// token ID 1 = Shares
  /// token ID 2 = Serie 1
  /// token ID 3 = Serie 2
}