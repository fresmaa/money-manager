import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuComponent } from './tab-menu.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ReportComponent } from '../report/report.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TabMenuComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home/testing',
          },
          {
            path: 'home/testing',
            component: ReportComponent
          },
        ],
      },
    ]),
  ]
})
export class TabMenuModule { }
