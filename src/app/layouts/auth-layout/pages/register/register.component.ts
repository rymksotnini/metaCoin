import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import {environment} from '../../../../../environments/environment';
import {REDIRECT} from '../../../../_globals/global-variables';
import {AuthenticationService} from '../../../../_services/authentication.service';
import {User} from '../../../../_models/user';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user : User;
  redirectURL = environment.apiUrl + REDIRECT;
  error = false;
  accepted = false;
  constructor(private authenticationService: AuthenticationService, private router: Router) {}


  ngOnInit() {
  }


  registerFacebook() {
    console.log("helloo");
  }

  register(form: NgForm) {
    console.log('register button clicked');
    if (!this.authenticationService.isLogged()) {
      this.user = new User();
      this.user.email = form.controls.email.value;
      this.user.password =form.controls.password.value;
      this.user.username = form.controls.username.value;
      this.user.first_name = form.controls.firstName.value;
      this.user.last_name =form.controls.lastName.value;
      console.log(this.user);
      this.authenticationService.signup(this.user).subscribe(
        (result)=> {
          console.log('currently signing up...');
          this.authenticationService.savingToken(result);
          this.authenticationService.savingUser(result);
          this.router.navigate(['/dashboard']);
        },
      (error)=> {
          if( error.status === 406){
            this.error = true;
          }
      }
      )
    }

  }
}
