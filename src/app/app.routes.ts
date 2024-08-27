import { animation } from '@angular/animations';
import { Routes } from '@angular/router';
import { breadcrumbTranslate } from './core/components/daynamic/fava-breadcrumb/fava-breadcrumb.helper';

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
      breadcrumb: breadcrumbTranslate('HOME_PAGE')
    }
  },
  {
    path:'forbidden',
    loadComponent:()=>import('./core/components/pages/forbidden403/forbidden403.component')
    .then(m =>m.Forbidden403Component),
    data:{
      animation:'forbidden'
    }
  },
  {
    path: '**',
    loadComponent: () => import('./core/components/pages/page404/page404.component')
    .then(m=> m.Page404Component),
    data: { animation:'notFound' }
  },
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




