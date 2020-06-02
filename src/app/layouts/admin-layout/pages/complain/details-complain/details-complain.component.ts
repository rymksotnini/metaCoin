import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {API_URL, CHARITY, COMPLAIN, DETAILS, IMG_URL, PAUSE, PROCESS, REFUSE, USERS_PROFILE} from '../../../../../_globals/global-variables';
import {Complain} from '../../../../../_models/Complain';
import {CrudService} from '../../../../../_services/crud.service';


@Component({
  selector: 'app-details-complain',
  templateUrl: './details-complain.component.html',
  styleUrls: ['./details-complain.component.scss']
})
export class DetailsComplainComponent implements OnInit {

  id: number;
  complain: Complain;
  image: string;
  constructor(private route: ActivatedRoute,
              private crudService: CrudService,
              private router: Router) {}

  ngOnInit(): void {
     this.route.params.subscribe(params => {
      this.id = +params['id'];
       this.crudService.getOne(API_URL +  COMPLAIN + DETAILS ,this.id).subscribe(
         (res) => {
           this.complain = res.data;
           console.log(this.complain);
           console.log(this.complain);
           if (res.data.user.profile.image_url){
             this.image = IMG_URL + res.data.user.profile.image_url;
           } else {
             this.image = 'assets/img/theme/team-4-800x800.jpg';
           }
         });
    });

  }

  accept() {

  }

  decline() {
    this.crudService.update(API_URL + COMPLAIN + REFUSE, this.complain.id, {} ).subscribe(
      (response) => {
        this.router.navigate(['/admin/complains']);
      }  , (error =>  {
        console.log(error);
      })
    )
  }

  processing() {
    this.crudService.update(API_URL + COMPLAIN + PROCESS, this.complain.id, {} ).subscribe(
      (response) => {
        this.router.navigate(['/admin/complains']);
      }  , (error =>  {
        console.log(error);
      })
    )
  }
}
