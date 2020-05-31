import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from './admin-layout.routing';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AdminSidebarComponent} from './components/admin-sidebar/admin-sidebar.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AccountsCreateComponent} from './pages/account/accounts-create/accounts-create.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NgbDropdownModule,
    MatSnackBarModule,
    NgZorroAntdModule
  ],
  declarations: [
    AdminSidebarComponent,
    NavbarComponent,
    AccountsCreateComponent,
  ]
})

export class AdminLayoutModule {}
