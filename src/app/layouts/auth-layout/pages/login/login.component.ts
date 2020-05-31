import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';
import {NgForm} from '@angular/forms';
import {User} from '../../_models/user';
import {Router} from '@angular/router';
import {environment} from "../../../environments/environment";
import {REDIRECT} from "../../_globals/global-variables";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  user :User;
  error = false;
  textError = '';
  redirectURL = environment.apiUrl + REDIRECT;

  constructor(private authenticationService: AuthenticationService, private router:Router) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  login(form: NgForm) {
    // @ts-ignore
    console.log('login button clicked');
    if (!this.authenticationService.isLogged()) {
      this.user = new User();
      this.user.email = form.controls.email.value;
      this.user.password = form.controls.password.value;
      console.log(this.user);
      this.authenticationService.login(this.user).subscribe(
        (result)=> {
          this.authenticationService.savingToken(result);
          this.authenticationService.savingUser(result);
          this.router.navigate(['/dashboard']);
        },
        (error)=> {
          this.error = true;
          if (error.status === 406) {
            this.textError = 'Invalid email or password';
          } else if (error.status === 401) {
            this.textError = 'Incorrect password or email';
          }
          else {
            this.textError ='Error';
          }
        }
      )
    }
  }
}
