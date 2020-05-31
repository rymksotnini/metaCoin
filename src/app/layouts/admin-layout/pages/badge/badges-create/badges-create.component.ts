import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {API_URL, BADGE} from '../../../../_globals/global-variables';

import {Router} from '@angular/router';
import {CrudService} from '../../../../_services/crud.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-badges-create',
  templateUrl: './badges-create.component.html',
  styleUrls: ['./badges-create.component.css']
})
export class BadgesCreateComponent implements OnInit {

  @Output() added = new EventEmitter<boolean>();
  createBadge: FormGroup;
  error = false;
  msg: string;
  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router
  ) { }

  ngOnInit() {
    this.createBadge = this.formBuilder.group({
      name:  ['',Validators.required],
      upperBond: [0,Validators.required]
    });
  }



  onSubmit() {
    if (this.createBadge.invalid) {
      this.error = true;
      this.msg = 'Fields are required';
      return;
    }
    console.log(this.createBadge.value);

    this.crudService.post(API_URL + BADGE, this.createBadge.value).subscribe(
      (response) => {
        this.error = false;
        console.log(response);
        this.added.emit(response);
      }, (error => {
        console.log(error);
        if( error.status === 404){
          this.error = true;
          this.msg = 'Invalid Upper bound';
        }
      })
    );
  }


}
