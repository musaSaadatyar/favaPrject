import { animation } from '@angular/animations';
import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path:'login',

  // },
  {
    path:'',
    loadChildren: ()=> import('./features/home/home.routes').then(m=>m.Home_route),
    // canActivate:[],
    data: {
      animation:'home'
    },
    resolve: {
      breadcrumb: B
    }
  },
  // {
  //   path:'**',
  //   loadComponent:()=>import('./core/components/pages/forbidden403/forbidden403.component').then(m =>m.Forbidden403Component)
  // },
  // {
  //   path: 'forbidden',
  //   loadChildren: () => import('./core/components/pages/forbidden403/forbidden403.module')
  //   .then(m=> m.Forbidden403Module),
  //   data: { animation:'forbiddenPage' }
  // },
  // {
  //   path: 'repairing',
  //   loadChildren: ()=> import('./core/components/pages/repair500/repair500.module')
  //   .then( m => m.Repair500Module ),
  //   data:{ animation:'repairPage' }
  // },
  // {
  //   path: '**',
  //   loadChildren: () => import('./core/components/pages/error404/error404.module')
  //   .then(m=> m.Error404Module),
  //   data: { animation:'error404page' }
  // }
];




