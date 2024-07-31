// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;

import {Test} from "forge-std/Test.sol";
import {onlyfans} from "../src/onlyfans.sol";
contract BadCreator{

}
contract OnlyFansTest is Test {
    onlyfans public fans;
    address payable creator=payable(makeAddr('creator'));
    address member =makeAddr('member');
    address notmember=makeAddr('notmember');
    uint constant public fees=0.0001 ether;


    function setUp() public {
        fans = new onlyfans();
        deal(member, 1 ether);
        vm.startPrank(member);
    }
    function test_join() public {
        fans.join{value:fees}(creator);
        bool ismember=fans.members(creator, member);
        assertEq(ismember, true);
        assertEq(creator.balance, fees);
    }
    // function test_error() public {
    //     fans.join{value:fees-1 ether}(creator);
    //     bool isMember=fans.members(creator, member);
    //     assertEq(isMember, false);


    // }
    function test_already() public {
        fans.join{value:fees}(creator);
        vm.expectRevert(abi.encodeWithSelector(onlyfans.onlyfans_alreadyAMember.selector,creator));
        fans.join{value:fees}(creator);
    }
    function test_paymentFailed() public {
        BadCreator bad=new BadCreator();
        vm.expectRevert(onlyfans.onlyfans_transactionFailed.selector);
        fans.join{value:fees}(payable(address(bad)));   
    }
}