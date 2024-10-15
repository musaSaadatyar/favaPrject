import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { INavigationItem } from '../navigation.interface';

export const NavigationMenuItems  = (): INavigationItem[]=>
{

  const translate = inject(TranslateService);

  return [
    {
      title: translate.instant('DASHBOARD'),
      iconClass: 'las la-address-card',
      activePath:'/dasbord',
      items: [
        {
          title: translate.instant('DASHBOARD')+'1',
          path: '/',
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
          title: translate.instant('USER_ACCOUNT')+'1',
        },
        {
          path: '/account',
          title: translate.instant('USER_ACCOUNT')+'2',
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
          title: translate.instant('USER')+'1',
        }
      ]
    },
  ]

}
