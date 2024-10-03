import { INavigationItem } from '../navigation.interface';
import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export const NavigationMenuItems  = (): INavigationItem[]=>
{

  const translate = inject(TranslateService);

  return [
    {
      label: translate.instant('DASHBOARD'),
      icon: 'las la-address-card',
      activePath:'/587',
      items: [
        {
          route: '/',
          icon:'las la-address-card',
          label: translate.instant('DASHBOARD')+'1',
        }
      ]
    },
    {
      label: translate.instant('USER_ACCOUNT'),
      icon: 'las la-key',
      activePath:'/account',
      items: [
        {
          route: '/account',
          icon:'',
          label: translate.instant('USER_ACCOUNT')+'1',
        },
        {
          route: '/account',
          icon:'',
          label: translate.instant('USER_ACCOUNT')+'2',
        }
      ]
    },
    {
      label: translate.instant('USER'),
      icon: 'las la-address-card',
      activePath:'/user',
      items: [
        {
          route: '/user',
          icon:'',
          label: translate.instant('USER')+'1',
        }
      ]
    },
  ]

}
