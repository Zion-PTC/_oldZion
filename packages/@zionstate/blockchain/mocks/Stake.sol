// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// This contract is meant to manage the Stake Reward Logic of a Stakable ERC20 Token.

// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.4/contracts/security/Pausable.sol";
import "../oz/utils/context.sol";
import "../oz/token/ERC1155/IERC1155.sol";
import "../oz/token/ERC20/IERC20.sol";

interface ERC20Token {
    function balanceOf(address owner) external returns (uint256);
    function _mint(address recipient, uint amount) external;
}

interface ERC1155Token {

}

interface tokenShopContract {
    function shopInfos() external view returns(uint);
}

interface IGovernor {
    function executor() external view returns(address);
}

contract stakingContract is IERC1155, Context { // contract should be pausable
    ERC20Token public immutable tokenContract; // address of the token that was on sale
    tokenShopContract public tokenShop; // address of the shop which sold the tokens
    ERC1155Token public departmentTokenContract; // address of the token which will be used to stake
    ERC1155Token public membershipToken;
    IGovernor public dao;


    uint public stakingReward;
    uint public rewardRate;
    uint public rewardPeriod;                   // in block
    uint public claimerReward;
    uint public claimerRewardRate;
    uint public soldTokenSupply;
    uint public marketPrice;                    // this price will be retrieve or from the salae price of the shop contract, of from dexes
    
    uint public numberOfClaimsPerformed;
    mapping (address => uint256) public numberOfClaimsPerformedByClaimer;
    address public claimer;

    enum stakeType {
        SHORT,
        MEDIUM,
        LONG,
        FOREVER
    }

    enum StakeState {
        STARTED,
        SUSPENDED,
        ENDED
    }

    /// @notice Represents a staked liquidity NFT
    struct Stake {
        address owner;
        uint startPeriod;
        uint endPeriod;
        uint256 amount;
    }
    
    mapping (address => stake) public amountStakedBySubscriber;
    
    event rewardClaimed(address claimer, uint amount);
    event rewardRateUpdated(address submitter, uint newRewardRate);
    event claimerRewardRateUpdated(address submitter, uint newClaimerRewardRate);
    event tokenStaked(address subscriber, uint stakedAmount);
    event tokenUnstaked(address subscriber, uint unstakedAmount);

    modifier onlyGovernance() {
        require(_msgSender() == dao.executor(), "Governor: onlyGovernance");
        _;
    }

    constructor (
        ERC20Token _tokenContract,
        tokenShopContract _tokenShop,
        IGovernor _dao,
        address _departmentVault,
        uint _rewardRate,
        uint _rewardPeriod,
        uint _claimerRewardRate
        ) {
            tokenContract = _tokenContract;
            tokenShop = _tokenShop;
            dao = _dao;
            departmentVault = _departmentVault;
            rewardRate =_rewardRate;
            rewardPeriod = _rewardPeriod;
            claimerRewardRate = _claimerRewardRate;
            soldTokenSupply = tokenShop.shopInfos();        // i don't know how to choose one of the two values of the return
            marketPrice = tokenShop.shopInfos();            // i don't know how to choose one of the two values of the return
            isStakingActive = true;
            
            totalStakingReward = soldTokenSupply*rewardRate;
            claimerReward = stakingReward*claimerRewardRate;
            stakingReward = totalStakingReward - claimerReward;
            
        }

    function editStakingRewardRate(uint _editedStakingRewardRate) public onlyGovernance{
        rewardRate = _editedStakingRewardRate;
    }
    
    function claimReward() public {
        require(isStakingActive);
        claimer = msg.sender;
        tokenContract._mint(departmentVault, stakingReward);
        tokenContract._mint(claimer, claimerReward);
    }
    
    function stakeTokens(address subscriber, uint256 amount, stakeType) public {
        
    }
}