// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "../../../oz/access/Ownable.sol";

abstract contract PriceEditable is Ownable {
    uint price;

    event PriceChanged(address submitter, uint256 newPrice);

    function editPrice(uint256 newPrice) public onlyOwner returns (uint256) {
        price = newPrice;
        emit PriceChanged(msg.sender, newPrice);
        return newPrice;
    }
}
