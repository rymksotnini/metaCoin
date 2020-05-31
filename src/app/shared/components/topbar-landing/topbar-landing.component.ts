import {Component, DoCheck, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import {User} from '../../_models/user';
import {ImageService} from '../../_services/image.service';
import {AuthenticationService} from '../../_services/authentication.service';
import {ROUTES} from '../sidebar/sidebar.component';
import {IMG_URL} from '../../_globals/global-variables';
import {LocalService} from "../../_services/local.service";

@Component({
  selector: 'app-topbar-landing',
  templateUrl: './topbar-landing.component.html',
  styleUrls: ['./topbar-landing.component.css']
})
export class TopbarLandingComponent implements OnInit, DoCheck {

  public connected = false;
  public focus;
  public listTitles: any[];
  public location: Location;
  public image;
  currentUser: User;
  constructor(
    private imageService:ImageService,
    location: Location,
    private element: ElementRef,
    private router: Router,
    private  authenticationService:AuthenticationService,
    private localService: LocalService
    ) {
    this.location = location;
  }


  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    console.log(this.authenticationService.isLogged());
    this.connected = this.authenticationService.isLogged();
    this.currentUser = this.authenticationService.getCurrentUser();
    this.imageService.getImage().subscribe(
      (data) =>{
        console.log('data: '+data);
        console.log(IMG_URL + data);
        this.image = IMG_URL + data;
      },
      error => {
        console.log(error);
        this.image = 'assets/img/theme/team-4-800x800.jpg';
      }
    )
  }

  ngDoCheck() {
    this.connected = this.authenticationService.isLogged();
  }

  logout(){
    this.authenticationService.logout().subscribe(
      (res) => {
        console.log('logging out');
        this.localService.clearToken();
        this.connected = false;
        this.image = null;
        this.currentUser = null;
        this.router.navigate(['/']);
      }
    );
  }
}
