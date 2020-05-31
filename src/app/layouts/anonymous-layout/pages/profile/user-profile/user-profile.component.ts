import { Component, OnInit } from '@angular/core';
import {User} from "../../../../../_models/user";
import {AuthenticationService} from "../../../../../_services/authentication.service";
import {ImageService} from "../../../../../_services/image.service";
import {IMG_URL} from "../../../../../_globals/global-variables";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  currentUser: User;
  image:string;
  constructor(private authenticationService:AuthenticationService,private imageService:ImageService) { }

  ngOnInit() {
    this.imageService.getImage().subscribe(
      (data) =>{
        this.image = IMG_URL + data; // 'https://clubisti.net/assets/img/'+ data | environment.apiUrl+'/assets/img/'+
      },
      error => {
        console.log(error);
        this.image = 'assets/img/theme/team-4-800x800.jpg';
      }
    );
    this.currentUser = this.authenticationService.getCurrentUser();
    console.log(this.currentUser.username);
  }

}
