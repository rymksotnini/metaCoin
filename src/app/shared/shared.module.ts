import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EnumToArrayPipe} from '../pipes/enum-to-array.pipe';
import {FooterComponent} from './components/footer/footer.component';
import {TopbarLandingComponent} from './components/topbar-landing/topbar-landing.component';



@NgModule({
  declarations: [
    EnumToArrayPipe,
    FooterComponent,
    TopbarLandingComponent
  ],
  exports: [EnumToArrayPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
