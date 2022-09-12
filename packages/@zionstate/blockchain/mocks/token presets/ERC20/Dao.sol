// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../../oz/token/ERC20/ERC20.sol";
import "../../oz/token/ERC20/extensions/ERC20Burnable.sol";
import "../../oz/access/Ownable.sol";

contract ZionDaoToken is ERC20, Ownable, ERC20Burnable {
  constructor() ERC20("ZION - Dao Token", "daoZION") {}

  function _mine(address account, uint256 amount) external onlyOwner {
    _mint(account, amount);
  }
}
