import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EnumToArrayPipe} from "../pipes/enum-to-array.pipe";



@NgModule({
  declarations: [EnumToArrayPipe],
  exports: [EnumToArrayPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
