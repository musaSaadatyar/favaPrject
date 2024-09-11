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
      activePath:'/سیبسبسب/',
      items: [
        {
          path: '/dashboard',
          title: translate.instant('DASHBOARD'),
        }
      ]
    },

  ]

}
