import { Routes } from '@angular/router';

export const Home_route: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path:'home',
    loadComponent: ()=> import('./home.component').then(m => m.HomeComponent),
    children: [

    ]
  }
];
