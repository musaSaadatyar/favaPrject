import { INavigationItem } from '../navigation.interface';
import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RahianAccess } from '../../../../../shared/enums/rahian-access/rahian-access.enum';

export const NavigationMenuItems  = (): INavigationItem[]=>
{

  const translate = inject(TranslateService);

  return [
    {
      title: translate.instant('DASHBOARD'),
      iconClass: 'las la-address-card',
      activePath:'/dashboard',
      items: [
        {
          path: '/dashboard',
          title: translate.instant('DASHBOARD'),
        }
      ]
    },
    {
      title: translate.instant('SYSTEM_MANAGEMENT'),
      iconClass: 'las la-business-time',
      activePath:'/identity/',
      permission:'AbpIdentity.Roles || AbpIdentity.Users',
      items: [
        {
          path: '/identity/organization',
          title: translate.instant('ORGANIZATIONAL_STRUCTURE'),
          permission:'OrganizationUnits'
        },
        {
          path: '/identity/role/tree',
          title: translate.instant('ORGANIZATIONAL_ROLE'),
          permission:'AbpIdentity.Roles'
        },
        {
          path: '/identity/user-management',
          title: translate.instant('USER_MANAGEMENT'),
          permission:'AbpIdentity.Users'
        },
        {
          path: '/identity/user-access-management',
          title: translate.instant('USERS_MANAGMENT_ACCESS'),
          permission:'OrganizationUnitRoles'
        }
      ]
    },
 
    {
      title: translate.instant('BASE_INFORMATION_NAME'),
      iconClass: 'las la-sitemap',
      activePath:'/base-information/',
      permission:'Rahian.BaseInformationHeaders || Rahian.Places',
      items: [
        {
          path: '/base-information/tree',
          title: translate.instant('TREE'),
          permission:'Rahian.BaseInformationHeaders.Read'
        },
        {
          path: '/base-information/relations',
          title: translate.instant('BASE_INFORMATION_HEADER_CONNECTION'),
          permission:'Rahian.BaseInformationHeaders.BaseInformationsRelation'
          
        },
        {
          path: '/base-information/processes-relations',
          title: translate.instant('RELATIONSHIP_PROCESSES_AND_BASIC_INFORMATION'),
          permission:'Rahian.BaseInformationHeaders.BaseInformations.RelationWithProcess'
        },
        {
          path: '/base-information/type-assessment-relations',
          title: translate.instant('RELATIONSHIP_TYPE_MEASUREMENT_BASIC_INFORMATION'),
          permission:'Rahian.BaseInformationHeaders.BaseInformations.RelationWithBaseInfotmation'
        },
        {
          path: '/base-information/setting-places-with-organization',
          title: translate.instant('SETTING_PLACES_WITH_ORGANIZATION'),
          // permission:''
        },
        {
          path: '/base-information/places',
          title: translate.instant('PLACES'),
          permission:'Rahian.Places'
        }
      ]
    },
    {
      title: translate.instant('PROCESSING_AND_OPERATION'),
      iconClass: 'las la-bezier-curve',
      activePath:'/process-connections/',
      permission:'Rahian.ProcessConnections',
      items: [
        {
          path: '/process-connections/form',
          title: translate.instant('CONNECTION_LIST'),
          permission:'Rahian.ProcessConnections.Read'
        },
      ]
    },
    {
      title: translate.instant('PLANNING_GRID'),
      iconClass: 'las la-calendar',
      activePath:'/planing/grid',
      permission:'Plans.Read',
      items: [
        {
          path:'/planing/grid',
          title: translate.instant('PLANNING_GRID'),
          permission:'Plans.Read'
        },
      ]
    },
    {
      title: translate.instant('HUMAN_CAPITAL'),
      iconClass: 'las la-users-cog',
      activePath:'/personnel/',
      permission:'BasePersonels',
      items: [
        {
          path: '/personnel/grid',
          title: translate.instant('PERSONNEL'),
          permission:'BasePersonels.Read'
        },
      ]
    },
    {
      title: translate.instant('CERTIFICATE_TABLE'),
      iconClass: 'las la-certificate',
      activePath:'/certificate/',
      permission:'Certificates || Selections',
      items: [
        {
          path: '/certificate/grid',
          title: translate.instant('ISSUING_CERTIFICATE'),
          permission:'Certificates'
        },
        {
          path: '/certificate-program-registration',
          title: translate.instant('TABLE_CERTIFICATE'),
          permission:'Selections'
        }
      ]
    },
    {
      title: translate.instant('UTILIZATION'),
      iconClass: 'las la-cogs',
      activePath:'/utilization/',
      permission:RahianAccess.UTILIZATIONS,
      items: [
        {
          path: '/utilization',
          title: translate.instant('UTILIZATION_PLAN'),
          permission: RahianAccess.UTILIZATIONS_READ,
        }
      ]
    },
    {
      title: translate.instant('COOPERATION'),
      iconClass: 'las la-hands-helping',
      activePath: '/cooperations',
      permission: RahianAccess.COOPERATIONS,
      items: [
        {
          path: '/cooperations/plan/grid',
          title: translate.instant('COOPERATION_PLAN'),
          permission: RahianAccess.COOPERATIONS,
        },
        {
          path: '/cooperations/request/grid',
          title: translate.instant('COOPERATION_REQUEST'),
          permission: RahianAccess.COOPERATIONS,
        },
      ]
    },
    {
      title: translate.instant('ACCOMMODATION'),
      iconClass: ' las la-home',
      activePath:'/accommodation/',
      permission: 'Accommodations',
      items:[
        {
          title:translate.instant('ACCOMMODATION_PLANE'),
          path: '/accommodation/grid',
        }
      ]
    },
    {
      title: translate.instant('ASSESSMENT'),
      iconClass: 'las la-clipboard-check',
      activePath:'/questionnaire/grid',
      path: '/questionnaire/grid',
      permission: 'Rahian.Questionnaires.Read'
    },
    {
      title: translate.instant('SETTING'),
      iconClass: 'las la-tools',
      activePath: '/setting/',
      permission: 'Rahian.SecurityConfiguration',
      items: [
        {
          path: '/setting/log',
          title: translate.instant('SYSTEM_LOG'),
          permission: 'Rahian.SecurityLog'
        },
        {
          path: '/setting/security-configuration',
          title: translate.instant('SETTING_PASSWORD'),
          permission: 'Rahian.SecurityConfig'
        }
      ]
    }
  ]

}
