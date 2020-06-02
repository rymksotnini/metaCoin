import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, UploadChangeParam, UploadFile} from 'ng-zorro-antd';
import {ImageService} from "../../../../../_services/image.service";
import {CrudService} from "../../../../../_services/crud.service";
import {API_URL, COMPLAIN, IMAGE} from "../../../../../_globals/global-variables";
import {Observable, Observer} from 'rxjs';
import {AuthenticationService} from '../../../../../_services/authentication.service';


@Component({
  selector: 'app-create-complain',
  templateUrl: './create-complain.component.html',
  styleUrls: ['./create-complain.component.css']
})
export class CreateComplainComponent implements OnInit {
  error = false;
  msg: string;
  createComplain: FormGroup;
  file: any;
  fileData: any;
  imagePath = API_URL+ COMPLAIN + IMAGE;
  @Input() transactionId;
  success = false;
  constructor(private formBuilder: FormBuilder,
              private msgService: NzMessageService,
              private imageService: ImageService,
              private crudService: CrudService,
              ) { }

  ngOnInit(): void {
    this.createComplain = this.formBuilder.group({
      reason: ['', Validators.required],
      body: ['', Validators.required],
      transactionId: this.transactionId
    });
  }


  onSubmit() {
    if (this.createComplain.invalid) {
      this.error = true;
      this.msg = 'Fields are required';
      return;
    }
    console.log(this.createComplain.value);

    this.crudService.post(API_URL + COMPLAIN, this.createComplain.value).subscribe(
      (response) => {
        this.error = false;
        this.success = true;
        this.msg = ' Your complain will be processing soon';
        console.log(response);

        if(this.file){
          this.imageService.postImageWithApi(this.file, response.data.id, API_URL+ COMPLAIN + IMAGE).subscribe(data => {
            console.log(data);
          });
        }

      }, (error => {
        console.log(error);
        if( error.status === 406){
          this.error = true;
          this.msg = error.error;
        }
      })
    );


  }



  handleChange({ file, fileList }: UploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msgService.success(`${file.name} file uploaded successfully.`);

    } else if (status === 'error') {
      this.msgService.error(`${file.name} file upload failed.`);
    }
  }



  closeAlert() {
    this.error = false;
  }
  closeSuccess() {
    this.success = false;
  }


  event(files: FileList) {
    console.log(files.item(0));
  }
}
