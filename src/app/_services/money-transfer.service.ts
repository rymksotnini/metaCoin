import { Injectable } from '@angular/core';
import {INFURA_URL} from '../_globals/global-variables';
const Web3 = require('web3');
declare let require: any;
declare let window: any;
const tokenAbi = require('../../../truffle/build/contracts/MoneyTransfer.json');
@Injectable({
  providedIn: 'root'
})
export class MoneyTransferService {
  // private account: any = null;
  // private account1: any = null;
  // private account2: any = null;
  // private web3: any;
  // private web3Provider: any;
  // private enable: any;
  // constructor() {
  //   // if (window.ethereum === undefined) {
  //   //   console.log('Non-Ethereum browser detected. Install MetaMask');
  //   // } else {
  //   if (typeof window.web3 !== 'undefined') {
  //     window.ethereum.enable().then(() => {
  //       this.web3Provider = window.web3.currentProvider;
  //     });
  //   } else {
  //     this.web3Provider = new Web3.providers.WebsocketProvider(INFURA_URL);
  //   }
  //   console.log('transfer.service :: constructor :: window.ethereum');
  //   this.web3 = new Web3(this.web3Provider);
  //   console.log('transfer.service :: constructor :: this.web3');
  //   console.log(this.web3);
  //   // }
  // }
  //
  // public async getAccount(): Promise<any> { // make it simple back call for accounts
  //   console.log('transfer.service :: getAccount :: start');
  //   if (this.account == null) {
  //     this.account = await new Promise((resolve, reject) => {
  //       console.log('transfer.service :: getAccount :: eth');
  //       console.log( this.web3.currentProvider);
  //       this.web3.eth.getAccounts((err, retAccount) => {
  //         console.log('transfer.service :: getAccount: retAccount');
  //         console.log(retAccount);
  //         if (retAccount.length > 0) {
  //           this.account = retAccount[0];
  //           console.log(this.account);
  //           console.log('current account');
  //           resolve(this.account);
  //         } else {
  //           console.log('accounts');
  //           console.log(this.web3.eth.getAccounts());
  //           // alert('transfer.service :: getAccount :: no accounts found.');
  //           // reject('No accounts found.');
  //         }
  //         if (err != null) {
  //           alert('transfer.service :: getAccount :: error retrieving account');
  //           reject('Error retrieving account');
  //         }
  //       });
  //     }) as Promise<any>;
  //   }
  //   return Promise.resolve(this.account);
  // }
  //
  // public async getUserBalance(): Promise<any> {
  //   const account = await this.getAccount();
  //   console.log('transfer.service :: getUserBalance :: account');
  //   console.log(account);
  //   return new Promise((resolve, reject) => {
  //     window.web3.eth.getBalance(account, (err, balance) => {
  //       console.log('transfer.service :: getUserBalance :: getBalance');
  //       console.log(balance);
  //       if (!err) {
  //         const retVal = {
  //           account,
  //           balance
  //         };
  //         console.log('transfer.service :: getUserBalance :: getBalance :: retVal');
  //         console.log(retVal);
  //         resolve(retVal);
  //       } else {
  //         reject({account: 'error', balance: 0});
  //       }
  //     });
  //   }) as Promise<any>;
  // }
  // transferAmount(/*value*/) {
  //   this.account1=this.web3.eth.accounts.create();
  //   this.account2=this.web3.eth.accounts.create();
  //   console.log(this.account1);
  //   console.log(this.account2);
  //   return new Promise((resolve, reject) => {
  //     console.log('transfer.service :: transferEther :: tokenAbi');
  //     console.log(tokenAbi);
  //     const contract = require('@truffle/contract');
  //     const transferContract = contract(tokenAbi);
  //     transferContract.setProvider(this.web3Provider);
  //     console.log('transfer.service :: transferEther :: transferContract');
  //     console.log(transferContract);
  //     transferContract.deployed().then((instance) => {
  //       console.log('deploying...');
  //       return instance.sendCoin(
  //         this.account2.address,
  //         15);
  //     }).then((status) => {
  //       if (status) {
  //         return resolve({status: true});
  //       }
  //     }).catch((error) => {
  //       console.log(error);
  //       return reject('transfer.service error');
  //     });
  //   });
  // }
}
