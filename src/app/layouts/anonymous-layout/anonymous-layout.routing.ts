import { Routes} from '@angular/router';
import {TestLandingComponent} from './pages/test-landing/test-landing.component';
import {DonationComponent} from './pages/donation/donation.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {CharityProjectsComponent} from './pages/charity/charity-projects/charity-projects.component';
import {UserProfileComponent} from './pages/profile/user-profile/user-profile.component';
import {UpdateProfileComponent} from './pages/profile/update-profile/update-profile.component';


export const AnonymousLayoutRoutes: Routes = [
  { path: '',                   component: TestLandingComponent },
  { path: 'user-profile',   component: UserProfileComponent },
  { path: 'update-profile',   component: UpdateProfileComponent },
  { path: 'history/project/:id',            component: DonationComponent },
  { path: 'dashboard',          component: DashboardComponent },
  { path: 'projects',           component: CharityProjectsComponent },
];
