// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

import {Script} from "forge-std/Script.sol";
import {onlyfans} from "../src/onlyfans.sol";

contract deploy is Script {
    onlyfans fans;


    function run() public returns(onlyfans){
        uint deployerPrivateKey=vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        fans=new onlyfans();
        vm.stopBroadcast();
        return fans;
    }
}