import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {TemplateLayoutRoutes} from './template-layout.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClipboardModule} from 'ngx-clipboard';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectCountryModule} from '@angular-material-extensions/select-country';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {IconsComponent} from './pages/icons/icons.component';

@NgModule({
  declarations: [
    SidebarComponent,
    IconsComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(TemplateLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        ClipboardModule,
        NgbDropdownModule,
        MatSnackBarModule,
        NgZorroAntdModule,
        ReactiveFormsModule,
        MatSelectCountryModule
    ]
})
export class TemplateLayoutModule { }
