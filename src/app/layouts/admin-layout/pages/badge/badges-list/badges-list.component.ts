import { Component, OnInit } from '@angular/core';
import {API_URL, BADGE} from '../../../../_globals/global-variables';
import {CrudService} from '../../../../_services/crud.service';
import {Badge} from '../../../../_models/badge';
import {NzModalService} from "ng-zorro-antd";



@Component({
  selector: 'app-badges-list',
  templateUrl: './badges-list.component.html',
  styleUrls: ['./badges-list.component.css']
})
export class BadgesListComponent implements OnInit {
  isVisible = false;
  isVisible2 = false;
  selected:Badge;
  badges: Badge[];
  first = 0;
  cols: any[];

  constructor(private crudService: CrudService,
              private modalService: NzModalService) { }

  ngOnInit() {
    this.getBadge();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'lowerBond', header: 'Lower bond' },
      { field: 'upperBond', header: 'Upper bond' },
      { field: 'createdAt', header: 'Created dAt' },
      { field: 'updatedAt', header: 'Updated At' },
      { field: 'action', header: '' }
    ];
    console.log(this.badges)
  }


  delete(badge) {
    this.crudService.delete(API_URL + BADGE, badge.id).subscribe(res => {
      badge.deleted = 1;
    }, error => {
      console.log(error)
    });
  }



  getBadge() {

    this.crudService.getAll(API_URL + BADGE)
      .toPromise()
      .then(res => res.data as Badge[])
      .then(data => { return data; })
      .then(data => this.badges = data);



  }

  reset() {
    this.first = 0;
  }

  showModal(): void {
    this.isVisible = true;
  }
  showModal2(badge): void {
    this.selected = badge;
    this.isVisible2 = true;
  }

  handleOk(): void {
    this.isVisible = false;
    this.isVisible2 = false;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isVisible2 = false;
  }
  showDeleteConfirm(badge): void {
    this.modalService.confirm({
      nzTitle: 'Are you sure you want to delete this badge?',
      nzContent: '<b style="color: red;"></b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => this.delete(badge),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }


  onAdd($event: any) {
    console.log($event)
    this.getBadge();
  }

}
