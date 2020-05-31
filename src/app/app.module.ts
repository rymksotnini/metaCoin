import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {MetaModule} from './meta/meta.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedModule} from './shared/shared.module';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {MultiSelectModule} from 'primeng/multiselect';
import {en_US, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AnonymousLayoutModule} from './layouts/anonymous-layout/anonymous-layout.module';
import {AppRoutingModule} from './app.routing';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatSelectCountryModule} from '@angular-material-extensions/select-country';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AdminLayoutModule} from './layouts/admin-layout/admin-layout.module';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {AnonymousLayoutComponent} from './layouts/anonymous-layout/anonymous-layout.component';
import {TemplateLayoutComponent} from './layouts/template-layout/template-layout.component';
import {TopbarLandingComponent} from './shared/components/topbar-landing/topbar-landing.component';
import {AuthenticationInterceptorProvider} from './_interceptors/authentication.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AnonymousLayoutComponent,
    TemplateLayoutComponent,
    TopbarLandingComponent


],
  imports: [
    TableModule,
    MetaModule,
    PaginatorModule,
    MultiSelectModule,
    SharedModule,
    NgZorroAntdModule,
    NgbModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AnonymousLayoutModule,
    AdminLayoutModule,
    CommonModule,
    FontAwesomeModule,
    MatSelectCountryModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MetaModule
  ],
  providers: [AuthenticationInterceptorProvider,
    {provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule { }
