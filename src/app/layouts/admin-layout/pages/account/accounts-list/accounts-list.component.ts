import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';
import {AccountsCreateComponent} from '../accounts-create/accounts-create.component';
import {ListReq} from '../../../../../_models/requests/ListReq';
import {CrudService} from '../../../../../_services/crud.service';
import {AccountsService} from '../../../../../_services/accounts.service';
import {ACCOUNT, API_URL, DEFAULT_ACCOUNT} from '../../../../../_globals/global-variables';
import {Account} from '../../../../../_models/account';


@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {

  isVisible = false;
  accountsRq: ListReq<Account> = new ListReq<Account>();
  accounts: Array<Account> = new Array<Account>();
  sort = 'createdAt,desc';
  currentPage = this.accountService.getCurrentPage();
  total = this.accountService.getTotal();
  pageSize = this.accountService.getSizePage();
  constructor(private crudService: CrudService,
              private router: Router,
              private route: ActivatedRoute,
              private accountService: AccountsService,
              private modal: NzModalService
  ) {
  }

  ngOnInit() {
    this.accountsRq = new ListReq<Account>();
    this.accounts = new Array<Account>();
    this.accountService.setCurrentPage(1);
    this.accountService.setSizePage(10);
    this.accountService.getAccountsAPI().subscribe(
      (response) => {
        this.accountService.setAccounts(response);
        console.log(this.accountService.getAccounts());
        this.accountService.setCurrentPage(this.accountService.getAccounts().meta.current_page) ;
        this.accountService.setTotal(response.meta.total);
        this.accountsRq = this.accountService.getAccounts();
        this.accounts = this.accountsRq.data;
        this.currentPage = this.accountService.getCurrentPage();
        this.total = this.accountService.getTotal();
        this.pageSize = this.accountService.getSizePage();
      },
      (error =>  {
        console.log(error);
      })
    );
  }

  paginate(page: number) {
    this.accountService.getAccountsPagination(page);
  }

  createAccount(): void {
    const createModal: NzModalRef = this.modal.create({
      nzTitle: 'Add account',
      nzContent: AccountsCreateComponent,
      nzFooter: null
    });
  }

  updateAccount(account: Account): void {
    const modal: NzModalRef = this.modal.create({
      nzTitle: 'Update account',
      nzContent: AccountsCreateComponent,
      nzComponentParams: {
        id: account.id
      },
      nzFooter: null
    });
  }

  delete(account) {
    this.crudService.delete(API_URL + ACCOUNT , account.id).subscribe(res => {
      console.log(res);
      account.deleted = 1;
    }, error => {
      console.log(error);
    });
  }

  setAsDefault(account: Account) {
    this.crudService.put(API_URL + DEFAULT_ACCOUNT + '/' + account.id, null).subscribe(
      (res) => {
        this.router.navigateByUrl('admin', { skipLocationChange: true }).then(() => {
          this.router.navigate(['admin/accounts']);
        });
      }
    );
  }
}
