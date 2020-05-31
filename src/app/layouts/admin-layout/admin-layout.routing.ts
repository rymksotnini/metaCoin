import { Routes } from '@angular/router';
import {HistoryComponent} from '../../pages/history/history.component';
import {LandingComponent} from '../../pages/landing/landing.component';

import {ProductsComponent} from '../../pages/products/products.component';
import {CharitiesListComponent} from '../../pages/admin/charity/charities-list/charities-list.component';
import {CharityCreateComponent} from '../../pages/admin/charity/charity-create/charity-create.component';
import {ListCategoryComponent} from '../../pages/admin/category/list-category/list-category.component';
import {UsersComponent} from '../../pages/users/users.component';
import {CharityUpdateComponent} from '../../pages/admin/charity/charity-update/charity-update.component';
import {BadgesListComponent} from '../../pages/admin/badge/badges-list/badges-list.component';
import {VariableComponent} from '../../pages/admin/variable/variable.component';
import {AccountsListComponent} from "../../pages/admin/account/accounts-list/accounts-list.component";
import {AccountsCreateComponent} from "../../pages/admin/account/accounts-create/accounts-create.component";

export const AdminLayoutRoutes: Routes = [
  { path: 'landing',          component: LandingComponent },
  {
    path: 'users',
    component: UsersComponent,
  },
  { path: 'variable',          component: VariableComponent },
  { path: 'category',          component: ListCategoryComponent },
  { path: 'badge',          component: BadgesListComponent },
  { path: 'charity',          component: CharitiesListComponent },
  { path: 'charity/update/:id',          component: CharityUpdateComponent },
  { path: 'products',          component: ProductsComponent },
  {path: 'add-charity', component: CharityCreateComponent},
  {path: 'accounts', component: AccountsListComponent},
  {path: 'accounts-add', component: AccountsCreateComponent},
];
