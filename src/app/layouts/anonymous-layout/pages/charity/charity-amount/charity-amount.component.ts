import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Project} from '../../../../../_models/Project';
import {CrudService} from '../../../../../_services/crud.service';
import {AccountsService} from '../../../../../_services/accounts.service';
import {AuthenticationService} from '../../../../../_services/authentication.service';
import {API_URL, DEFAULT_ACCOUNT, DONATE} from '../../../../../_globals/global-variables';

@Component({
  selector: 'app-charity-amount',
  templateUrl: './charity-amount.component.html',
  styleUrls: ['./charity-amount.component.css']
})
export class CharityAmountComponent implements OnInit {

  donation: FormGroup;
  amount: number;
  textSuccess = '';
  textError = '';
  success = false;
  error = false;
  json = null;
  showBuy = false;
  @Input() project?: Project;
  @Output() saved: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router,
              private accountsService: AccountsService,
              private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.donation = this.formBuilder.group({
      amount: ''
    });
  }

  onSubmit() {
    this.amount = +this.donation.value.amount;
    console.log(this.project.lastUpdatedSum);
    console.log(this.amount);
    console.log(this.project.offer.amount);
    if (this.project.lastUpdatedSum + this.amount > this.project.offer.amount) {
      this.success = false;
      this.error = true;
      this.textError = 'Offer amount exceeded';
    } else {
      this.crudService.getAll(API_URL + DEFAULT_ACCOUNT).subscribe((response) => {
        const currentAccount: Account = response.data;
        this.json = {
          transaction: {
            amount: this.amount
          },
          user: {
            id: this.authenticationService.getCurrentUser().id
          },
          offer: {
            id: this.project?.offer?.id
          },
          account: {
            id: currentAccount.id
          }
        };
        this.crudService.post(API_URL + DONATE, this.json).subscribe(
          (resp) => {
            this.error = false;
            this.success = true;
            this.textSuccess = 'Thank you for your contribution';
            this.saved.emit(null);
            // this.router.navigateByUrl('admin', { skipLocationChange: true }).then(() => {
            //   this.router.navigate(['projects']);
            // });
            console.log(resp);
          }, (error => {
            console.log(error);
            this.success = false;
            this.error = true;
            this.showBuy = true;
            if (error.error) {
              this.textError = error.error;
              if (error.status === 405) {
                this.showBuy = false;
              }
            } else {
              this.textError = 'Error';
            }
          })
        );
      });
    }
  }

}
