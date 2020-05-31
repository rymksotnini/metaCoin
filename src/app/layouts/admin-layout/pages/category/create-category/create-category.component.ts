import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../../../../_services/crud.service';
import {CategoryType} from '../../../../_models/enum/CategoryType';
import {API_URL, CATEGORY} from '../../../../_globals/global-variables';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  keys = Object.keys;
  categories = CategoryType;
  createCategory: FormGroup;
  error = false;
  msg: string;
  @Output() added = new EventEmitter<boolean>();
  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
  ) { }

  ngOnInit() {
    this.createCategory = this.formBuilder.group({
      name: ['',Validators.required],
      type: ['PROJECT',Validators.required]
    });
  }



  onSubmit() {
    if (this.createCategory.invalid) {
      this.error = true;
      this.msg = 'Fields are required';
      return;
    }
    console.log(this.createCategory.value);

    this.crudService.post(API_URL + CATEGORY, this.createCategory.value).subscribe(
      (response) => {
        this.error = false;
        console.log(response);
        this.added.emit(response);

      }, (error => console.log(error))
    );
  }



}
