import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';

import { DatePipe } from '@angular/common';

import {NzMessageService} from 'ng-zorro-antd';
import { UploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import {Category} from '../../../../../_models/Category';
import {CrudService} from '../../../../../_services/crud.service';
import {ImageService} from '../../../../../_services/image.service';
import {API_URL, CATEGORY, CHARITY, IMAGE} from '../../../../../_globals/global-variables';
@Component({
  selector: 'app-charity-create',
  templateUrl: './charity-create.component.html',
  styleUrls: ['./charity-create.component.css']
})
export class CharityCreateComponent implements OnInit {
  submitted = false;
  isVisible = false;
  isConfirmLoading = false;
  date = null;
  dateFormat = 'yyyy/MM/dd';
  keys = Object.keys;
  categories: Category[];
  createCharity: FormGroup;
  pipe = new DatePipe('en-US');
  idOffer: any;
  file: any;
  shortImage: any;
  largeImage: any;
  loading = false;
  loading1 = false;
  avatarUrl?: string;
  avatarUrl1?: string;
  constructor(private formBuilder: FormBuilder,
              private crudService: CrudService,
              private router: Router,
              private imageService: ImageService,
              private msg: NzMessageService
              ) { }

  ngOnInit() {
    this.getCategories();
    this.createCharity = this.formBuilder.group({
      name: ['', Validators.required],
      shortDescription: ['', Validators.required],
      longDescription: ['', Validators.required],
      amount: [0, Validators.required],
      minDonationAmount: [0, Validators.required],
      maxDonationAmount: [0, Validators.required],
      categoriesIds: [1],
      date: []
    });
  }

  get f() { return this.createCharity.controls; }

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

  fileEventShortFile(e) {
    this.shortImage = e.target.files[0];

  }
  fileEventLargeFile(e) {
    this.largeImage = e.target.files[0];

  }

  onSubmit() {

      this.submitted = true;
      if (this.createCharity.invalid) {
        return;
      }
    console.log(this.createCharity.value.categoriesIds);
   this.createCharity.value.categoriesIds = [this.createCharity.value.categoriesIds];
    console.log(this.createCharity.value.categoriesIds);
    this.createCharity.value.startDate = this.pipe.transform(this.createCharity.value.date[0], ' yyyy-M-d hh:mm:ss');
    this.createCharity.value.endDate =  this.pipe.transform( this.createCharity.value.date[1], 'yyyy-M-d hh:mm:ss');


    console.log(this.createCharity.value);
    this.crudService.post(API_URL + CHARITY, this.createCharity.value).subscribe(
      (data) => {
        this.idOffer = data.data.offer.id;
        if (this.shortImage && this.largeImage) {
          this.imageService.postImageProject(this.largeImage, this.shortImage, this.idOffer, CHARITY + IMAGE).subscribe(data => {
            console.log(data);
          });
        }
      }, (error => console.log(error))
    );
    // post image

    this.router.navigate(['/admin/charity']);
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
      this.shortImage = file;
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  }

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
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }


  // large image handler

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
      this.largeImage = file;
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  }



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
