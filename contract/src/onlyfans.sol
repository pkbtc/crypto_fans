// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;


contract onlyfans{
    uint constant public fees=0.0001 ether;
    error onlyfans_notEnoughFees();
    error onlyfans_valueCannotBeZero();
    error onlyfans_alreadyAMember(address creator);
    error onlyfans_transactionFailed();
    mapping(address=>mapping(address=>bool)) public members;
    function join(address payable creator) external payable {
        if(msg.value<fees){
            revert onlyfans_notEnoughFees();
        }
        if(msg.value==0){
            revert onlyfans_valueCannotBeZero();
        }
        if(members[creator][msg.sender]==true){
            revert onlyfans_alreadyAMember(creator);
        }
        (bool sent,)=creator.call{value:fees}("");  
        if(!sent){
            revert onlyfans_transactionFailed();
        }
        members[creator][msg.sender]=true;

    }   
}