import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {CrudService} from '../../../../../_services/crud.service';
import {AccountsService} from '../../../../../_services/accounts.service';
import {ACCOUNT, ACCOUNT_WITH_TYPE, API_URL, CURRENT_ORGANIZATION} from '../../../../../_globals/global-variables';
import {Account} from '../../../../../_models/account';
import {AccountType} from '../../../../../_models/accountType';



@Component({
  selector: 'app-accounts-create',
  templateUrl: './accounts-create.component.html',
  styleUrls: ['./accounts-create.component.css']
})
export class AccountsCreateComponent implements OnInit {

  createAccount: FormGroup;
  currentAccount: Account;
 @Input() id?: number;
  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router,
              private accountsService: AccountsService,
  ) { }

  ngOnInit() {
    this.createAccount = this.formBuilder.group({
      accountNumber: '',
      type: ''
    });
    if (this.id) {
      // fetch profile from back
      this.crudService.getOne(API_URL + ACCOUNT, this.id).subscribe(
        (res) => {
          this.currentAccount = res.data;
          console.log(this.currentAccount);
          this.initializeForm();
        }
      );
    }
  }

  initializeForm() {
    this.createAccount.controls['accountNumber'].setValue(this.currentAccount.accountNumber);
    this.createAccount.controls['type'].setValue(this.currentAccount.accountType.name);
    }

  onSubmit() {
    console.log(this.createAccount.value);
    const accountType = new AccountType();
    accountType.name = this.createAccount.value.type;
    const account = new Account();
    account.accountNumber = this.createAccount.value.accountNumber;
    console.log(account.accountNumber);
    const json = {
      account: {
        account_number: account.accountNumber
      },
      accountType: {
        name: accountType.name
      }
    };
    console.log(json);
    this.crudService.post(API_URL + ACCOUNT_WITH_TYPE + '/' + CURRENT_ORGANIZATION, json).subscribe(
      (response) => {
        this.router.navigateByUrl('admin', { skipLocationChange: true }).then(() => {
          this.router.navigate(['admin/accounts']);
        });
        console.log(response);
      }, (error => console.log(error))
    );
  }

}
