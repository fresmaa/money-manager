import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationPage } from './application.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicationPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('./home/home.module').then((m) =>m.HomePageModule),
          },
        ],
      },
      {
        path: 'report',
        children: [
          {
            path: '',
            loadChildren: () => import('./report/report.module').then((m) =>m.ReportPageModule),
          },
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationPageRoutingModule {}
