import { Component, OnInit } from '@angular/core';
import {Project} from "../../../../../_models/Project";
import {Profile} from "../../../../../_models/profile";
import {CrudService} from "../../../../../_services/crud.service";
import {NzModalRef, NzModalService} from "ng-zorro-antd";
import {AuthenticationService} from "../../../../../_services/authentication.service";
import {Router} from "@angular/router";
import {API_URL, CHARITY, USERS_PROFILE2, IMG_URL} from "../../../../../_globals/global-variables";
import {CharityAmountComponent} from "../charity-amount/charity-amount.component";

@Component({
  selector: 'app-charity-projects',
  templateUrl: './charity-projects.component.html',
  styleUrls: ['./charity-projects.component.scss']
})
export class CharityProjectsComponent implements OnInit {

  public projects: Array<Project>=[];
  profile: Profile;
  constructor(
    private crudService: CrudService,
    private modal: NzModalService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  IMG_URL = IMG_URL;
  ngOnInit(): void {
    this.getProjects();
    this.getUserProfile();
  }

  getProjects() {
    this.crudService.getAll(API_URL+ CHARITY).subscribe(
      (response) => {
        this.projects = response.data;
        console.log(this.projects);
      },
      (error =>  {
        console.log(error);
      })
    );
  }

  getUserProfile() {
    if(this.authenticationService.getCurrentUser()) {
      this.crudService.getOne(API_URL + USERS_PROFILE2, this.authenticationService.getCurrentUser().id).subscribe((resp) => {
        this.profile = resp?.data;
      })
    }
  }

  donate(project: Project) {
    const modal: NzModalRef = this.modal.create({
      nzTitle: 'Insert your amount',
      nzContent: CharityAmountComponent,
      nzComponentParams:{
        id: project?.offer?.id
      },
      nzFooter: null
    });
    modal.afterClose.subscribe((res) => {
      this.getProjects();
      this.getUserProfile();
    });
  }

  details(id: number) {
    console.log(id)
    this.router.navigate(['/history/project/'+ id]);
  }
}