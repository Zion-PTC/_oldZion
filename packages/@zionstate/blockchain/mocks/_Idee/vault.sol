// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../oz/access/Ownable.sol";
import "../oz/token/ERC20/IERC20.sol";
import "../oz/utils/Math/SafeMath.sol";

// this contrct manages the vault of a department



contract vault is Ownable{
  using SafeMath for uint256;
  struct Member {
    address delegateKey;
    uint256 balanceOfTokens;
    bool exists;
    uint256 highestIndexYesVote; // highest proposal index # on which the member voted YES
  }

  event Withdrawal(address indexed receiver, address indexed tokenAddress, uint256 amount);

  function withdraw(address receiver, uint256 shares, uint256 totalShares, IERC20[] memory approvedTokens) public onlyOwner returns (bool) {
    for (uint256 i=0; i < approvedTokens.length; i++) {
        uint256 amount = approvedTokens[i].balanceOf(address(this)).mul(shares).div(totalShares);
        emit Withdrawal(receiver, address(approvedTokens[i]), amount);
        return approvedTokens[i].transfer(receiver, amount);
    }
  }

  function withdrawToken(IERC20 token, address receiver, uint256 amount) public onlyOwner returns (bool) {
    emit Withdrawal(receiver, address(token), amount);
    return token.transfer(receiver, amount);
  }
}