import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {Project} from "../../../../_models/Project";
import {CrudService} from "../../../../_services/crud.service";
import {chartExample1, chartExample2, chartOptions, parseOptions} from "../../../../variables/charts";
import {API_URL, CHARITY} from "../../../../_globals/global-variables";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked= true;
  public clicked1 = false;
  public projects: Array<Project>=[];

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    // this.projects[0]= new Project(1,'Project 1','description project 1 bla bla bla bla',20,100);
    // this.projects[1]= new Project(2,'Project 2','description project 2 bla bla bla bla',30,200);
    // this.projects[2]= new Project(3,'Project 3','description project 3 bla bla bla bla',30,200);
    // this.projects[3]= new Project(4,'Project 4','description project 4 bla bla bla bla',30,200);
    // this.projects[4]= new Project(5,'Project 5','description project 5 bla bla bla bla',30,200);
    // console.log(this.projects.length);

    this.getProjects();

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }
  getProjects() {


    this.crudService.getAll(API_URL+ CHARITY).subscribe(
      (response) => {
        this.projects = response.data;
        console.log(this.projects);

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

}
