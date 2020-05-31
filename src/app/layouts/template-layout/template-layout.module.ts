import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {TemplateLayoutRoutes} from './template-layout.routing';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClipboardModule} from 'ngx-clipboard';
import {UpdateProfileComponent} from '../../pages/update-profile/update-profile.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {SharedModule} from "../../shared/shared.module";
import {MatSelectCountryModule} from "@angular-material-extensions/select-country";



@NgModule({
  declarations: [
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    UpdateProfileComponent
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
        SharedModule,
        ReactiveFormsModule,
        MatSelectCountryModule
    ]
})
export class TemplateLayoutModule { }
