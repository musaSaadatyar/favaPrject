import { Routes } from '@angular/router';

export const Home_route: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: '',
    loadComponent: () =>
      import('./home.component').then((m) => m.HomeComponent),
    children: [
      {
        path: 'account',
        loadComponent: ()=>import('../user-account/user-account.component').then(m=> m.UserAccountComponent)
      }

    ],
  },
];
