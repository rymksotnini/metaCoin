import { Component, OnInit } from '@angular/core';
import {Category} from '../../../../_models/Category';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {CrudService} from '../../../../_services/crud.service';
import {ActivatedRoute, Router} from '@angular/router';
import {API_URL, CATEGORY, CHARITY, IMAGE, IMG_URL} from '../../../../_globals/global-variables';
import {Project} from '../../../../_models/Project';
import {HttpClient} from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import {ImageService} from "../../../../_services/image.service";


@Component({
  selector: 'app-charity-update',
  templateUrl: './charity-update.component.html',
  styleUrls: ['./charity-update.component.css']
})
export class CharityUpdateComponent implements OnInit {

  date = null;
  dateFormat = 'yyyy/MM/dd';
  keys = Object.keys;
  categories : Category[];
  createCharity: FormGroup;
  id : number;
  pipe = new DatePipe('en-US');
  file: any;
  test: any;
  project: Project;
  loading = false;
  avatarUrl='assets/img/theme/team-4-800x800.jpg';
  loading1 = false;
  avatarUrl1: string;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private msg: NzMessageService,
              private imageService: ImageService,
  ) {
    this.getProject();
  }

  ngOnInit() {
    this.getProject();
    this.getCategories();

    this.createCharity = this.formBuilder.group({
            name: '',
            shortDescription: '',
            longDescription: '',
            amount: 0,
            minDonationAmount: 0,
            maxDonationAmount: 0,
            categoriesIds: 0,
            startDate: '',
            endDate: '',
            date: []
          });

  }

  initForm(){
    this.createCharity = this.formBuilder.group({
      name: [this.project.offer.name, Validators.required],
      shortDescription: [this.project.offer.shortDescription,Validators.required],
      longDescription: [this.project.offer.longDescription,Validators.required],
      amount: [this.project.offer.amount,Validators.required],
      minDonationAmount: [this.project.minDonationAmount,Validators.required],
      maxDonationAmount: [this.project.maxDonationAmount,Validators.required],
      categoriesIds: [this.project.offer.categories[0].id],
      startDate: [this.project.startDate,Validators.required],
      endDate: [this.project.endDate,Validators.required],
      date: []
    });
  }

  async getProject() {
     this.route.params.subscribe(params => {
      this.id = +params['id'];
     console.log(this.id);
    });
    const data = await this.http.get<any>(API_URL + CHARITY + '/' + this.id).toPromise();
    console.log(data)
    this.project = data.data;
    console.log(this.project);
    this.initForm();

  }


  getCategories() {
    this.crudService.getAll(API_URL + CATEGORY).subscribe(
      (response) => {
        this.categories = response.data;
        console.log(this.categories);

      },
      (error =>  {
        console.log(error);
      })
    );
  }

  get f() { return this.createCharity.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.createCharity.invalid) {
      return;
    }

    this.createCharity.value.categoriesIds = [this.createCharity.value.categoriesIds];
     if (this.createCharity.value.date) {
       this.createCharity.value.startDate = this.pipe.transform(this.createCharity.value.date[0], ' yyyy-M-d hh:mm:ss');
       this.createCharity.value.endDate = this.pipe.transform(this.createCharity.value.date[1], 'yyyy-M-d hh:mm:ss');
     }
    console.log(this.createCharity.value);
    this.crudService.update(API_URL + CHARITY,this.id , this.createCharity.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/admin/charity']);
      }, (error => console.log(error))
    );
  }


  beforeUpload = (file: UploadFile, _fileList: UploadFile[]) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          console.log(img)
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }

  //large image handler

  beforeUpload1 = (file: UploadFile, _fileList: UploadFile[]) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
     // this.largeImage = file;
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  };



  handleChange1(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading1 = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading1 = false;
          this.avatarUrl1 = img;
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading1 = false;
        break;
    }
  }
}
