// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../oz/token/ERC721/IERC721.sol";
import "../oz/utils/Context.sol";

abstract contract MembershipAccess is Context {
    modifier onlyTokenHolders() {
        require(
            IERC721(address(this)).balanceOf(msg.sender) != 0,
            "Only token holders can perform this action"
        );
        _;
    }

    modifier onlyOneNFTperAddress() {
        address thisAddress = msg.sender;
        require(
            IERC721(address(this)).balanceOf(msg.sender) < 2,
            "Members can only hold one membership token"
        );
        _;
    }
}
