import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path:'login',

  // },
  // {
  //   path:'',
  // },
  {
    path:'**',
    loadComponent:()=>import('./core/components/pages/forbidden403/forbidden403.component').then(m =>m.Forbidden403Component)
  },
  // {
  //   path:'**'
  // }
];




