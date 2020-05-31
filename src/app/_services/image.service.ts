import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL} from '../_globals/global-variables';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient, private authenticationService:AuthenticationService) { }

  postImage(fileData){
    const myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('id_user', this.authenticationService.getCurrentUser().id.toString());
    myFormData.append('image', fileData);
    console.log('formData: '+ myFormData.getAll('id_user'));
    return this.http.post(API_URL+'/image', myFormData, {
      headers
    });
  }
  postImageWithApi(fileData,id, api){
    const myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('id', id);
    myFormData.append('image', fileData);
    console.log('formData: '+ myFormData.getAll('id_user'));
    return this.http.post(api, myFormData, {
      headers
    });
  }

  getImage(){
    return this.http.get(API_URL+'/image/'+this.authenticationService.getCurrentUser().id);
  }
  getImageWithApi(api,id){
    return this.http.get(API_URL+api+'/'+id);
  }

  postImageProject(largeImage,shortImage, id,api){
    const myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('id', id);
    myFormData.append('largeImage', largeImage);
    myFormData.append('shortImage', shortImage);
    console.log('formData: '+ myFormData.getAll('id'));
    return this.http.post(API_URL+api, myFormData, {
      headers
    });
  }
}
