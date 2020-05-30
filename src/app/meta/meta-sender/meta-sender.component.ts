import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../util/web3.service';
import { MatSnackBar } from '@angular/material/snack-bar';

declare let require: any;
const metacoin_artifacts = require('../../../../build/contracts/MetaCoin.json');
const clubisti_artifacts = require('../../../../build/contracts/Clubisti.json');
@Component({
  selector: 'app-meta-sender',
  templateUrl: './meta-sender.component.html',
  styleUrls: ['./meta-sender.component.css']
})
export class MetaSenderComponent implements OnInit {
  accounts: string[];
  MetaCoin: any;
  clubisti: any;

  model = {
    amount: 5,
    receiver: '',
    balance: 0,
    account: ''
  };

  status = '';

  constructor(private web3Service: Web3Service, private matSnackBar: MatSnackBar) {
    console.log('Constructor: ' + web3Service);
  }

  ngOnInit(): void {
    console.log('OnInit: ' + this.web3Service);
    console.log(this);
    this.watchAccount();
    this.web3Service.artifactsToContract(metacoin_artifacts)
      .then((MetaCoinAbstraction) => {
        this.MetaCoin = MetaCoinAbstraction;
        this.MetaCoin.deployed().then(deployed => {
          console.log(deployed);
          deployed.Transfer({}, (err, ev) => {
            console.log('Transfer event came in, refreshing balance');
            this.refreshBalance();
          });
        });

      });

    this.web3Service.artifactsToContract(clubisti_artifacts)
      .then((ClubistiAbstraction) => {
        this.clubisti = ClubistiAbstraction;
        this.clubisti.deployed().then(deployed => {
          console.log(deployed);
          deployed.Transfer({}, (err, ev) => {
            console.log(err);
            console.log(ev);
            console.log('Transfer event came in transtra');
          });
        });

      });
  }

  watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
      this.accounts = accounts;
      this.model.account = accounts[0];
      this.refreshBalance();
    });
  }

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }

  async sendCoin() {
    if (!this.MetaCoin) {
      this.setStatus('Metacoin is not loaded, unable to send transaction');
      return;
    }

    const amount = this.model.amount;
    const receiver = this.model.receiver;

    console.log('Sending coins' + amount + ' to ' + receiver);

    this.setStatus('Initiating transaction... (please wait)');
    try {
      const deployedMetaCoin = await this.MetaCoin.deployed();
      const transaction = await deployedMetaCoin.sendCoin.sendTransaction(receiver, amount, {from: this.model.account});

      if (!transaction) {
        this.setStatus('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending coin; see log.');
    }
  }

  async transaction() {
    if (!this.clubisti) {
      this.setStatus('clubisti is not loaded, unable to send transaction');
      return;
    }

    const amount = 100;
    const userId = 1;
    const offerId = 1;
    const transactionId = 1;

    console.log('Sending coins' + amount );

    this.setStatus('Initiating transaction... (please wait)');
    try {
      const deployedClubisti = await this.clubisti.deployed();
      const transaction = await deployedClubisti.addTransaction.sendTransaction(1, 1, 1, 100, {from: "0xeFF6747441Df90737e851150562599E65cFE0AFc"});

      if (!transaction) {
        this.setStatus('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending coin; see log.');
    }
  }


  async refreshBalance() {
    console.log('Refreshing balance');

    try {
      const deployedMetaCoin = await this.MetaCoin.deployed();
      console.log(deployedMetaCoin);
      console.log('Account', this.model.account);
      const metaCoinBalance = await deployedMetaCoin.getBalance.call(this.model.account);
      console.log('Found balance: ' + metaCoinBalance);
      this.model.balance = metaCoinBalance;
    } catch (e) {
      console.log(e);
      this.setStatus('Error getting balance; see log.');
    }
  }

  async getTrans() {
    console.log('tr');

    try {
      const deployedMetaCoin = await this.clubisti.deployed();
      console.log(deployedMetaCoin);
      const metaCoinBalance = await deployedMetaCoin.getTransactions.call();
      console.log('transaction: ' + metaCoinBalance);
    } catch (e) {
      console.log(e);
      this.setStatus('Error getting balance; see log.');
    }
  }

  setAmount(e) {
    console.log('Setting amount: ' + e.target.value);
    this.model.amount = e.target.value;
  }

  setReceiver(e) {
    console.log('Setting receiver: ' + e.target.value);
    this.model.receiver = e.target.value;
  }

}
