import { Component, OnInit } from '@angular/core';


import {ActivatedRoute, Router} from '@angular/router';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';
import {CrudService} from '../../../../_services/crud.service';
import {API_URL, CHARITY, PROJECT, TRANSACTIONS} from '../../../../_globals/global-variables';
import {CreateComplainComponent} from '../complain/create-complain/create-complain.component';
import {Project} from '../../../../_models/Project';
import {Transaction} from '../../../../_models/Transaction';
import {AuthenticationService} from '../../../../_services/authentication.service';
import {state} from '@angular/animations';




@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked = true;
  public clicked1 = false;
  projectId: any;
  project: Project;
  transactions: Transaction[];

  constructor(
    private modal: NzModalService,
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CrudService,
    private authService: AuthenticationService) {

  }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.getProject();
    this.getTransactions();
    // this.datasets = [
    //   [0, 20, 10, 30, 15, 40, 20, 60, 60],
    //   [0, 20, 5, 25, 10, 30, 15, 40, 40]
    // ];
    // this.data = this.datasets[0];
    //
    //
    // const chartOrders = document.getElementById('chart-orders');
    //
    // parseOptions(Chart, chartOptions());
    //
    //
    // const ordersChart = new Chart(chartOrders, {
    //   type: 'bar',
    //   options: chartExample2.options,
    //   data: chartExample2.data
    // });
    //
    // const chartSales = document.getElementById('chart-sales');
    //
    // this.salesChart = new Chart(chartSales, {
    //   type: 'line',
    //   options: chartExample1.options,
    //   data: chartExample1.data
    // });
  }

  getProject() {
    this.crudService.getOne(API_URL + CHARITY, this.projectId).subscribe(
      (response) => {
        this.project = response.data;
      },
      (error =>  {
        console.log(error);
      })
    );
  }

  getTransactions() {
    this.crudService.getAll(API_URL + TRANSACTIONS + PROJECT + '/' + this.projectId).subscribe(
      (response) => {
        this.transactions = response.data;
        console.log(this.transactions);
      },
      (error =>  {
        console.log(error);
      })
    );
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

  open(id: number) {
    if (!this.authService.isLogged()) {
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: this.router.url }});
      return;
    }
    const modal: NzModalRef = this.modal.create({
      nzTitle: null,
      nzContent: CreateComplainComponent,
      nzComponentParams: {
        transactionId: id
      },
      nzFooter: null
    });
  }

  calculateSum(index: number) {
    let sum = 0;
    for (let i = 0; i <= index; i++) {
      sum += this.transactions[i].amount;
    }
    return sum;
  }


}
