import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      // {
      //   path: '',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('../home/home.module').then((m) =>m.HomePageModule),
      //     },
      //   ],
      // },
      {
        path: 'report',
        children: [
          {
            path: '',
            loadChildren: () => import('../report/report.module').then((m) =>m.ReportPageModule),
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
export class HomePageRoutingModule {}
