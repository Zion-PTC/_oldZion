// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CallbackRegistry {
    struct Entry {
        uint256 time;
        address addr;
        bytes data;
        uint256 reward;
    }
    mapping(bytes32 => Entry) entries;

    function register(
        uint256 _time,
        address _addr,
        bytes memory _data
    ) external returns (bytes32 _hash) {
        // _hash = sha3(_time, _addr, _data);
        entries[_hash].time = _time;
        entries[_hash].addr = _addr;
        entries[_hash].data = _data;
        // entries[_hash].reward = msg.value;
    }

    function invoke(bytes32 _hash) external {
        if (entries[_hash].time > 0 && block.timestamp >= entries[_hash].time) {
            // msg.sender.send(entries[_hash].reward);
            // entries[_hash].addr.call(entries[_hash].data);
            delete entries[_hash];
        }
    }
}
