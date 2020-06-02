import { Routes } from '@angular/router';
import {UsersComponent} from './pages/users/users.component';
import {ListCategoryComponent} from './pages/category/list-category/list-category.component';
import {BadgesListComponent} from './pages/badge/badges-list/badges-list.component';
import {CharitiesListComponent} from './pages/charity/charities-list/charities-list.component';
import {CharityUpdateComponent} from './pages/charity/charity-update/charity-update.component';
import {CharityCreateComponent} from './pages/charity/charity-create/charity-create.component';
import {AccountsListComponent} from './pages/account/accounts-list/accounts-list.component';
import {AccountsCreateComponent} from './pages/account/accounts-create/accounts-create.component';
import {DashboardComponent} from '../anonymous-layout/pages/dashboard/dashboard.component';
import {ListComplainComponent} from './pages/complain/list-complain/list-complain.component';
import {DetailsComplainComponent} from './pages/complain/details-complain/details-complain.component';



export const AdminLayoutRoutes: Routes = [
  { path: 'landing',          component: DashboardComponent },
  {
    path: 'users',
    component: UsersComponent,
  },
  { path: 'category',          component: ListCategoryComponent },
  { path: 'badge',          component: BadgesListComponent },
  { path: 'charity',          component: CharitiesListComponent },
  { path: 'charity/update/:id',          component: CharityUpdateComponent },
  {path: 'add-charity', component: CharityCreateComponent},
  {path: 'accounts', component: AccountsListComponent},
  {path: 'accounts-add', component: AccountsCreateComponent},
  {path: 'complains', component: ListComplainComponent},
  {path: 'complain/:id', component: DetailsComplainComponent},
];
