import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from './admin-layout.routing';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {NgZorroAntdModule, NZ_ICONS, NzIconModule} from 'ng-zorro-antd';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AdminSidebarComponent} from './components/admin-sidebar/admin-sidebar.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AccountsCreateComponent} from './pages/account/accounts-create/accounts-create.component';
import {AccountsListComponent} from './pages/account/accounts-list/accounts-list.component';
import {AdminLoginComponent} from './pages/admin-login/admin-login.component';
import {BadgesCreateComponent} from './pages/badge/badges-create/badges-create.component';
import {BadgesListComponent} from './pages/badge/badges-list/badges-list.component';
import {BadgesUpdateComponent} from './pages/badge/badges-update/badges-update.component';
import {CreateCategoryComponent} from './pages/category/create-category/create-category.component';
import {ListCategoryComponent} from './pages/category/list-category/list-category.component';
import {CharitiesListComponent} from './pages/charity/charities-list/charities-list.component';
import {CharityCreateComponent} from './pages/charity/charity-create/charity-create.component';
import {CharityUpdateComponent} from './pages/charity/charity-update/charity-update.component';
import {UsersComponent} from './pages/users/users.component';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {MultiSelectModule} from 'primeng/multiselect';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import {DragDropModule} from '@angular/cdk/drag-drop';
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NgbDropdownModule,
    MatSnackBarModule,
    NgZorroAntdModule,
    SharedModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    MultiSelectModule,
    ReactiveFormsModule,
    NzIconModule,
    DragDropModule,
  ],
  exports: [
    AdminSidebarComponent,
    NavbarComponent
  ],
  declarations: [
    AdminSidebarComponent,
    NavbarComponent,
    AccountsCreateComponent,
    AccountsListComponent,
    AdminLoginComponent,
    BadgesCreateComponent,
    BadgesListComponent,
    BadgesUpdateComponent,
    CreateCategoryComponent,
    ListCategoryComponent,
    CharitiesListComponent,
    CharityCreateComponent,
    CharityUpdateComponent,
    UsersComponent,

  ],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ],
})

export class AdminLayoutModule {}
