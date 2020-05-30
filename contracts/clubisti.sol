pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;


contract Clubisti {

   struct Transaction {
          uint id_offer;
          uint id_user;
          uint id_transaction;
          uint amount;

      }
	  Transaction[] public transactions;

event Transfer(uint256 _value);

	constructor() public {

	}

   function addTransaction( uint id_offer,uint id_user, uint id_transaction,  uint amount ) public{

                transactions.push(Transaction({
                    id_offer:id_offer,
            id_user: id_user,
             id_transaction:id_transaction,
            amount:amount
                })

                 );

         emit Transfer(amount);
          }


    function getTransactions() public view returns (Transaction[] memory){
		return transactions;
	}

  }










