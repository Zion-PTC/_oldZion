// SPDX-License-Identifier: MIT
// Copyright Giacomo Gagliano and Zion Protocol contributors

pragma solidity ^0.8.0;

import "../../contracts/oz/governance/Governor.sol";
import "../../contracts/oz/governance/IGovernor.sol";
import "../../contracts/oz/governance/extensions/GovernorSettings.sol";
import "../../contracts/oz/governance/extensions/GovernorCountingSimple.sol";
import "../../contracts/oz/governance/extensions/GovernorVotes.sol";
import "../../contracts/oz/governance/extensions/GovernorVotesQuorumFraction.sol";

import "../../contracts/oz/token/ERC1155/ERC1155.sol";
import "../../contracts/oz/access/Ownable.sol";
import "../../contracts/oz/security/pausable.sol";


contract ZionDaoERC1155 is
    Governor,
    GovernorSettings,
    GovernorCountingSimple,
    GovernorVotes,
    GovernorVotesQuorumFraction,
    ERC1155,
    Ownable,
    Pausable
{
    event ZionDaoCreated(
        address deployer,
        string name,
        uint256 votingDelay,
        uint256 votingPeriod,
        uint256 proposalThreshold,
        ERC20Votes votingToken,
        uint256 quorumFraction
    );

    string NAME = "Zion Dao";
    uint256 VOTINGDELAY = 1; /* 1 block */
    uint256 VOTINGPERIOD = 45; /* 1 week */
    uint256 PROPOSAL_THRESHOLD = 0;
    uint256 QUORUM_FRACTION = 4;

    constructor(ERC20Votes _token)
        Governor(NAME)
        GovernorSettings(VOTINGDELAY, VOTINGPERIOD, PROPOSAL_THRESHOLD)
        GovernorVotes(_token)
        GovernorVotesQuorumFraction(4)
        ERC1155(NAME)
    {
        emit ZionDaoCreated(
            msg.sender,
            NAME,
            VOTINGDELAY,
            VOTINGPERIOD,
            PROPOSAL_THRESHOLD,
            _token,
            QUORUM_FRACTION
        );
    }

    // The following functions are overrides required by Solidity.

    function votingDelay()
        public
        view
        override(IGovernor, GovernorSettings)
        returns (uint256)
    {
        return super.votingDelay();
    }

    function votingPeriod()
        public
        view
        override(IGovernor, GovernorSettings)
        returns (uint256)
    {
        return super.votingPeriod();
    }

    function quorum(uint256 blockNumber)
        public
        view
        override(IGovernor, GovernorVotesQuorumFraction)
        returns (uint256)
    {
        return super.quorum(blockNumber);
    }

    function getVotes(address account, uint256 blockNumber)
        public
        view
        override(IGovernor, GovernorVotes)
        returns (uint256)
    {
        return super.getVotes(account, blockNumber);
    }

    function proposalThreshold()
        public
        view
        override(Governor, GovernorSettings)
        returns (uint256)
    {
        return super.proposalThreshold();
    }

    function supportsInterface(bytes4 interfaceId) public view override( ERC1155, Governor ) returns(bool){
      return
        interfaceId == type(IERC1155).interfaceId ||
        interfaceId == type(IERC1155MetadataURI).interfaceId ||
        interfaceId == type(IGovernor).interfaceId ||
        super.supportsInterface(interfaceId);
    }

    function voteSucceded(uint256 proposalId) public view returns(bool) {
        return _voteSucceeded(proposalId);
    }

    function quorumReached(uint256 proposalId) public view returns(bool) {
        return _quorumReached(proposalId);
    } 

    function executor() public view returns (address) {
        return _executor();
    }
}
