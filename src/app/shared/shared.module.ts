import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EnumToArrayPipe} from '../pipes/enum-to-array.pipe';
import {FooterComponent} from './components/footer/footer.component';
import {TopbarLandingComponent} from './components/topbar-landing/topbar-landing.component';
import {NgZorroAntdModule, NZ_I18N, en_US, NzIconModule} from 'ng-zorro-antd';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import {DragDropModule} from '@angular/cdk/drag-drop';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])


@NgModule({
  declarations: [
    EnumToArrayPipe,
    FooterComponent,

  ],
  exports: [EnumToArrayPipe,
    FooterComponent
  ],
  imports: [
    NzIconModule,
    DragDropModule,
    CommonModule
  ],
  providers: [
    { provide: NZ_ICONS, useValue: icons }]
})
export class SharedModule { }
