import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AnonymousLayoutRoutes} from './anonymous-layout.routing';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeDescriptionComponent} from "./components/home/home-description/home-description.component";
import {HomeDonationsComponent} from "./components/home/home-donations/home-donations.component";
import {HomeProjectsComponent} from "./components/home/home-projects/home-projects.component";
import {CharityAmountComponent} from "./pages/charity/charity-amount/charity-amount.component";
import {CharityProjectsComponent} from "./pages/charity/charity-projects/charity-projects.component";
import {CreateComplainComponent} from "./pages/complain/create-complain/create-complain.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {DonationComponent} from "./pages/donation/donation.component";
import {UpdateProfileComponent} from "./pages/profile/update-profile/update-profile.component";
import {UserProfileComponent} from "./pages/profile/user-profile/user-profile.component";
import {TestLandingComponent} from "./pages/test-landing/test-landing.component";
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    HomeDescriptionComponent,
    HomeDonationsComponent,
    HomeProjectsComponent,
    CharityAmountComponent,
    CharityProjectsComponent,
    CreateComplainComponent,
    DashboardComponent,
    DonationComponent,
    UpdateProfileComponent,
    UserProfileComponent,
    TestLandingComponent
  ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule.forChild(AnonymousLayoutRoutes),
        NgbProgressbarModule,
    ]
})
export class AnonymousLayoutModule { }
