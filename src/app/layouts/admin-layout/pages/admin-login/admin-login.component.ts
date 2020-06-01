import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../../_models/user';
import {AuthenticationService} from '../../../../_services/authentication.service';
import {Role} from '../../../../_models/enum/Role';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit, OnDestroy {

  user: User;
  error = false;
  textError = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  login(form: NgForm) {
    // @ts-ignore
    console.log('login button clicked');

    this.user = new User();
    this.user.email = form.controls.email.value;
    this.user.password = form.controls.password.value;
    console.log(this.user);
    this.authenticationService.login(this.user).subscribe(
      (result) => {
        if (JSON.parse(result.body?.user)?.role !== Role.Admin) {
          this.error = true;
          this.textError = 'User is not admin';
        } else {
          this.authenticationService.savingToken(result);
          this.authenticationService.savingUser(result);
          this.router.navigate(['/admin']);
        }
      },
      (error) => {
        this.error = true;
        if (error.status === 406) {
          this.textError = 'Invalid email or password';
        } else if (error.status === 401) {
          this.textError = 'Incorrect password or email';
        } else {
          this.textError = 'Error';
        }
      }
    );
  }
}
