import { Component, OnInit } from '@angular/core';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';
import {CreateCategoryComponent} from '../create-category/create-category.component';
import {Category} from '../../../../../_models/Category';
import {CrudService} from '../../../../../_services/crud.service';
import {API_URL, CATEGORY} from '../../../../../_globals/global-variables';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  isVisible = false;
  categories: Category[];
  first = 0;
  cols: any[];

  constructor(private crudService: CrudService,
              private modal: NzModalService) { }

  ngOnInit() {
    this.getCategories();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'type', header: 'Type' },
      { field: 'createdAt', header: 'Created dAt' },
      { field: 'updatedAt', header: 'Updated At' },
      { field: 'deleted', header: 'Status' },
      { field: 'action', header: '' }
    ];
  }

  createGategory(): void {
    const modal: NzModalRef = this.modal.create({
      nzTitle: 'Add category',
      nzContent: CreateCategoryComponent,
      nzFooter: [
        {
          label: 'Close',
          shape: 'round',
          onClick: () => modal.destroy()
        }
      ]
    });
  }

  delete(category) {
    this.crudService.delete(API_URL + CATEGORY, category.id).subscribe(res => {
      category.deleted = 1;
    }, error => {
      console.log(error);
    });
  }

  getCategories() {
    this.crudService.getAll(API_URL + CATEGORY)
      .toPromise()
      .then(res => res.data as Category[])
      .then(data => data)
      .then(cars => this.categories = cars);

    console.log(this.categories);
  }

  showDeleteConfirm(category): void {
    this.modal.confirm({
      nzTitle: 'Are you sure you want to delete this badge?',
      nzContent: '<b style="color: red;"></b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => this.delete(category),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  reset() {
    this.first = 0;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


  onAdd($event: any) {
    console.log('event ', $event)
    this.categories.push($event.data);
  }

}
