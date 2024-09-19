import { INavigationItem } from '../navigation.interface';
import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export const NavigationMenuItems  = (): INavigationItem[]=>
{

  const translate = inject(TranslateService);

  return [
    {
      title: translate.instant('DASHBOARD'),
      iconClass: 'las la-address-card',
      activePath:'/587',
      items: [
        {
          path: '/',
          title: translate.instant('DASHBOARD'),
        }
      ]
    },
    {
      title: translate.instant('USER_ACCOUNT'),
      iconClass: 'las la-key',
      activePath:'/account',
      items: [
        {
          path: '/account',
          title: translate.instant('USER_ACCOUNT'),
        },
        {
          path: '/account',
          title: translate.instant('USER_ACCOUNT'),
        }
      ]
    },
    {
      title: translate.instant('USER'),
      iconClass: 'las la-address-card',
      activePath:'/user',
      items: [
        {
          path: '/user',
          title: translate.instant('USER'),
        }
      ]
    },
  ]

}
