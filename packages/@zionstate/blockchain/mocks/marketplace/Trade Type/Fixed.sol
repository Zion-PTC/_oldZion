// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "../../../oz/access/Ownable.sol";
import "../../../oz/token/ERC20/IERC20.sol";
import "../../token presets/ERC1155/Membership.sol";

contract Fixed is Ownable {
    // Constructor datas
    address _owner;
    Membership public membership;
    IERC20 public tokenContract;
    IERC20 public tokenUsedForPayement;
    uint public price;
    // Crowdsale Reports
    uint public raisedAmount;
    string internal WITHDRAWERROR = "There was an error in the transaction";
    bool crowdSaleOpen;
    mapping (address => uint256) public tokensBoughtByBuyer;
    
    constructor (
        address owner,
        IERC20 _tokenUsedForPayement,
        IERC20 _tokenContract,
        uint _price
    ) {
        _owner = owner;
        tokenUsedForPayement = _tokenUsedForPayement;
        tokenContract = _tokenContract;
        price = _price;
    }

    modifier onlyMembers {
        address thisAddress = msg.sender;
        require (membership.balanceOf(thisAddress) != 0);
        _;
    }

    enum CrowdSaleState {
        OPEN,
        CLOSED
    }

    event Sold(address buyer, uint amount);
    event TokenOnSaleWithdrawal(address submitter, uint256 amount);
    event CapitalWithdrawal(address submitter, uint256 amount);
    event CrowdSaleCurrentState(bool crowdSaleOpen);

    // Interactions with the token to be sold.
    function getContractBalance() public view returns(uint256) {
        uint256 balance = tokenContract.balanceOf(address(this));
        return balance;
    }

    function setCrowdSaleCurrentState() public onlyOwner returns(bool) {
        uint256 balance = getContractBalance();
        if (balance == 0) { crowdSaleOpen = false; }
        return crowdSaleOpen;
    }
    
    function buyTokens (uint amount) onlyMembers public onlyOwner returns(uint256) {
        require(crowdSaleOpen);
        uint cost = amount*price;
        tokensBoughtByBuyer[msg.sender] += amount;
        raisedAmount += cost;
        tokenUsedForPayement.transferFrom(msg.sender, address(this), cost);
        tokenContract.transfer(msg.sender, amount);
        setCrowdSaleCurrentState();
        emit Sold(msg.sender, amount);
        return amount;
    }

    function withdrawTokensOnSale(uint256 amount) public onlyOwner returns(uint256) {
        require(tokenContract.transfer(msg.sender, amount), WITHDRAWERROR);
        setCrowdSaleCurrentState();
        emit TokenOnSaleWithdrawal(msg.sender, amount);
        return amount;
    }
        
    function withdrawRaisedCapital(uint256 amount) public onlyOwner returns(uint256) {
        require(tokenUsedForPayement.transfer(msg.sender, amount), WITHDRAWERROR);
        setCrowdSaleCurrentState();
        emit CapitalWithdrawal(msg.sender, amount);
        return amount;
    }

}