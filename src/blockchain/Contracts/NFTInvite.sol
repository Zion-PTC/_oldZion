// SPDX-License-Identifier: MIT
pragma solidity <0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.0/contracts/utils/Counters.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.0/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.0/contracts/token/ERC721/ERC721.sol";

contract InviteNFTv101 is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("ZION Invite NFTv0.1", "ZIONiv0.1") {}

    function mintNft(address receiver) external onlyOwner returns (uint256) {
        _tokenIds.increment();
        uint256 newNftTokenId = _tokenIds.current();
        _mint(receiver, newNftTokenId);
        return newNftTokenId;
    }
    
    modifier onlyTokenHolders {
        address thisAddress = msg.sender;
        require (balanceOf(thisAddress) != 0);
        _;
    }

    function mintNftOwners(address receiver) external onlyTokenHolders returns (uint256) {
        _tokenIds.increment();
        uint256 newNftTokenId = _tokenIds.current();
        _mint(receiver, newNftTokenId);
        return newNftTokenId;
    }
    
    function getMsgSenderBalance() external view returns (uint) {
        address thisAddress = msg.sender;
        return (balanceOf(thisAddress));
    }

}
