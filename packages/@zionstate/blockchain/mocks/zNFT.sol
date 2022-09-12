// SPDX-License-Identifier: MIT
// Author: Gagliano Giacomo
pragma solidity ^0.8.0;

// ███████╗██╗ ██████╗ ███╗   ██╗      ██████╗  ██████╗ ██╗    ██╗███████╗██████╗     ████████╗ ██████╗      ██████╗██████╗ ███████╗ █████╗ ████████╗ ██████╗ ██████╗ ███████╗
// ╚══███╔╝██║██╔═══██╗████╗  ██║      ██╔══██╗██╔═══██╗██║    ██║██╔════╝██╔══██╗    ╚══██╔══╝██╔═══██╗    ██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗██╔════╝
//   ███╔╝ ██║██║   ██║██╔██╗ ██║█████╗██████╔╝██║   ██║██║ █╗ ██║█████╗  ██████╔╝       ██║   ██║   ██║    ██║     ██████╔╝█████╗  ███████║   ██║   ██║   ██║██████╔╝███████╗
//  ███╔╝  ██║██║   ██║██║╚██╗██║╚════╝██╔═══╝ ██║   ██║██║███╗██║██╔══╝  ██╔══██╗       ██║   ██║   ██║    ██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██║   ██║██╔══██╗╚════██║
// ███████╗██║╚██████╔╝██║ ╚████║      ██║     ╚██████╔╝╚███╔███╔╝███████╗██║  ██║       ██║   ╚██████╔╝    ╚██████╗██║  ██║███████╗██║  ██║   ██║   ╚██████╔╝██║  ██║███████║
// ╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝      ╚═╝      ╚═════╝  ╚══╝╚══╝ ╚══════╝╚═╝  ╚═╝       ╚═╝    ╚═════╝      ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝                                              

// ███████╗███╗   ███╗ █████╗ ██████╗ ████████╗     ██████╗ ██████╗ ███╗   ██╗████████╗██████╗  █████╗  ██████╗████████╗███████╗                                              
// ██╔════╝████╗ ████║██╔══██╗██╔══██╗╚══██╔══╝    ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔════╝                                              
// ███████╗██╔████╔██║███████║██████╔╝   ██║       ██║     ██║   ██║██╔██╗ ██║   ██║   ██████╔╝███████║██║        ██║   ███████╗                                              
// ╚════██║██║╚██╔╝██║██╔══██║██╔══██╗   ██║       ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██╗██╔══██║██║        ██║   ╚════██║                                              
// ███████║██║ ╚═╝ ██║██║  ██║██║  ██║   ██║       ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║██║  ██║╚██████╗   ██║   ███████║                                              
// ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝        ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚══════╝


import "../oz/token/ERC1155/ERC1155.sol";
import "../moloch/Moloch.sol";

interface ERC20 {}
interface ERC721 {
  function transfer() external;
}
interface vault {}

abstract contract zNFT is ERC1155, Moloch { // the conctract is Moloch as a zNFT has DAO propoerties
  uint256 id;
  address owner;
  ERC721 masterNFT;
  uint256 tokenID;
  // Share tokens
  ERC20 shareToken;
  uint256 shareSupply;

  vault zNFTAddress;
  bool hasGovernance;
  bool hasMembership;
  uint256 _type;

  // this enum lists the type of NFT
  // Profile :      this type of zNFT will be directly connected to a wallet, it represents
  //                an account on the ZION platform
  // Project :      this type of zNFT represent a project, it is not yet a product as it is not yet
  //                released or ready to be purchased
  // Product :      this type of zNFT represents a product which can be physical or digital, it
  //                is released, and purchasable/sellable on the marketplace
  // Service :      this type of zNFT represents a service which can be delivered by a users, it
  //                can for example represent sort of a gig on Fiverr.
  // Application :  zNFTs can represent applications that are installable on a zNFT, they have
  //                their own NFT, as they can have fundings coming from external sources
  // Node :         A node zNFT represent an entity which act as a node
  enum zNFTType {
    PROFILE,
    CREATOR,
    TEAM,
    DAO,
    PROJECT,
    PRODUCT,
    SERVICE,
    APPLICATION,
    NODE
  }
  enum znftDomain {
    PHISYCAL,
    DIGITAL
  }
  enum nodeTypes {
    STOCKNODE,
    STUDIONODE,
    CLUBNODE,
    FULLSTACKNODE,
    PERSONALSTORAGENODE,
    PRIVATEIPFSNODE,
    PUBLICICIPFSNODE,
    THIRDPARTYIPFSNODE,
    COLDIPFSNODE
  }

  constructor(
    string memory tokenURI,
    uint _zNFTType,
    uint _shareSupply
    ) ERC1155(tokenURI) {
      _type = zNFTType._zNFTType;
      shareSupply = _shareSupply;
      masterNFT.transfer( msg.sender, address(this), tokenID);
    }

  function depositMasterTozNFT() public {
    // this function will send the NFT into the zNFT contract
  }

  function withdrawTokensFromzNFT() public {
    // this function will let users send tokens which are in the zNFT, from the zNFT to
    // an external account.
  }

  function withdrawNFTfromzNFT() public {
    // this function will send the NFT from the zNFT only if the shares are owned by only one address
  }

  function mintERC20(){}
  function mintERC721(){}
  function mintERC1155(){}

}

// 
    // masterNFT = _masterNFT;
    // shareSupply = _shareSupply;

    // ERC721 _masterNFT,
    // uint256 _shareSupply,
    // string memory tokenURI
