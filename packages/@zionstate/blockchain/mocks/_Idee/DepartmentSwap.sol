// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../token/ERC20/IERC20.sol";
import "../membershipNFT.sol";

contract DepSwap {
    IERC20 public tokenA;
    IERC20 public tokenB;
    uint256 public tokenBalanceA;
    uint256 public tokenBalanceB;
    uint256 tokensRatioAB;
    uint256 tokensRatioBA;
    enum Departments {
        TEAM,
        DAO
    }

    uint256 public periodDuration; // default = 17280 = 4.8 hours in seconds (5 periods per day)
    uint256 public periodlength; // default = 35 periods (7 days)
    mapping(address => uint256) public memberWeeklyLimit;
    mapping(address => uint256) public memberThisPeriodWithdrawnAmount;

    event tokenAswappedForTokenB(address buyer, uint256 amount);
    event tokenBswappedForTokenA(address buyer, uint256 amount);

    modifier onlyMembers {
        address thisAddress = msg.sender;
        require (membershipNFT.balanceOf(thisAddress, tokenID) != 0);
        _;
    }

    function getRatio() public {
        tokenBalanceA = IERC20(tokenA).balanceOf(address(this));
        tokensRatioAB = IERC20(tokenB).balanceOf(address(this));
        tokensRatioAB = tokenBalanceA / tokenBalanceB;
        tokensRatioBA = tokenBalanceB / tokenBalanceA;
    }

    function swapTokenAforTokenB(uint256 amount) public onlyMembers returns (uint256) {
        getRatio();
        uint256 transferAmount = amount / tokensRatioAB;
        IERC20(tokenA).transfer(tokenA, amount);
        IERC20(tokenB).transferFrom(
            address(tokenB),
            msg.sender,
            transferAmount
        );
        emit tokenAswappedForTokenB(msg.sender, transferAmount);
        return transferAmount;
    }

    function swapTokenBforTokenA(uint256 amount) public onlyMembers returns (uint256) {
        getRatio();
        uint256 transferAmount = amount / tokensRatioBA;
        IERC20(tokenA).transfer(tokenA, amount);
        IERC20(tokenB).transferFrom(
            address(tokenB),
            msg.sender,
            transferAmount
        );
        emit tokenBswappedForTokenA(msg.sender, transferAmount);
        return transferAmount;
    }
}
