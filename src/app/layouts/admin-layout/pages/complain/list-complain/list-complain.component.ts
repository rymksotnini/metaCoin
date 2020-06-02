import { Component, OnInit } from '@angular/core';


import {ActivatedRoute, Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
import {ACTIVATE, API_URL, CHARITY, COMPLAIN, PAUSE, TERNINATE} from '../../../../../_globals/global-variables';
import {Complain} from '../../../../../_models/Complain';
import {CrudService} from '../../../../../_services/crud.service';

@Component({
  selector: 'app-list-complain',
  templateUrl: './list-complain.component.html',
  styleUrls: ['./list-complain.component.scss']
})
export class ListComplainComponent implements OnInit {

  isVisible = false;
  complains: Complain[];
  first = 0;
  cols: any[];
  uri: string;
  test: any;
  constructor(private crudService: CrudService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: NzModalService
  ) {

  }

  ngOnInit() {
    this.getComplains();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'reason', header: 'reason' },
      { field: 'createdAt', header: 'Send At' },
      { field: 'transaction.amount', header: 'Amount' },
      { field: 'status', header: 'status' },
      { field: 'action', header: 'Controls' }
    ];

  }


  getComplains() {
    this.crudService.getAll(API_URL + COMPLAIN).subscribe(
      (response) => {
        this.complains = response.data;
        console.log(this.complains);
      },
      (error =>  {
        console.log(error);
      })
    );


  }


  pauseComplain(project: Complain) {
    this.crudService.update(API_URL + CHARITY + PAUSE, project.id, {} ).subscribe(
      (response) => {
        this.getComplains();
      }  , (error =>  {
        console.log(error);
      })
    );
  }



  activateComplain(project: Complain) {

    this.crudService.update(API_URL + CHARITY + ACTIVATE, project.id, {} ).subscribe(
      (response) => {
        this.getComplains();
      }  , (error =>  {
        console.log(error);
      })
    );
  }

  endComplain(project: Complain) {
    this.crudService.update(API_URL + CHARITY + TERNINATE, project.id, {} ).subscribe(
      (response) => {
        this.getComplains();
      }  , (error =>  {
        console.log(error);
      })
    );
  }

  showTerminateConfirm(project: Complain): void {
    this.modalService.confirm({
      nzTitle: 'Are you sure you want to end this project?',
      nzContent: '<b style="color: red;"></b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => this.endComplain(project),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  showDeleteConfirm(id: number): void {
    this.modalService.confirm({
      nzTitle: 'Are you sure you want to delete this project?',
      nzContent: '<b style="color: red;"></b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => this.deleteComplain(id),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  deleteComplain(id: number) {
    this.crudService.delete(API_URL + CHARITY, id).subscribe(
      (response => {
        console.log(response);
        this.getComplains();
      }) ,
      (error => {
        console.log(error);
      })
    );
  }

  updateComplain(id: number) {
    this.router.navigate(['admin/charity/update/', id]);
  }

  goToDetails(id: number) {
    this.router.navigate(['/admin/complain', id]);
  }
}
