import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from '../../../../_services/authentication.service';


@Component({
  selector: 'app-fb-auth',
  templateUrl: './fb-auth.component.html',
  styleUrls: ['./fb-auth.component.scss']
})
export class FbAuthComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
              private router:Router,
              private http:HttpClient,
              private authenticationService:AuthenticationService) { }

  ngOnInit(): void {

    let id =null;
    this.activatedRoute.queryParams.subscribe(params => {
      id = params.param;
      console.log("hello"+id);
    });
    this.authenticationService.facebookLogin(id).subscribe(result=> {
      console.log('facebook login ...');
      this.authenticationService.savingToken(result);
      this.authenticationService.savingUser(result);
      console.log(this.authenticationService.getCurrentUser())
      this.router.navigate(['/dashboard']);
    });
  }

}
