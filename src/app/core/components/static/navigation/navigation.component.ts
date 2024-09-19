import { CommonModule, Location } from '@angular/common';
import { Component, HostBinding, inject } from '@angular/core';
import { INavigationItem } from './navigation.interface';
import { Unsubscriber } from '../../../utils/unsubscriber';
import { Router, RouterLink } from '@angular/router';
import { generateToken } from '../../../../shared/helpers/generate-token';
import { NavigationMenuItems } from './constants/navigation.const';
import { SharedService } from '../../../../shared/service/shared.service';
import { MetismenuAngularModule } from '@metismenu/angular';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MetismenuAngularModule,
    PerfectScrollbarModule,
  ],
})
export class NavigationComponent extends Unsubscriber {
  public currentHref: string;

  @HostBinding('class.mx-auto')
  marginAuto = true;

  public showItem: boolean;
  // injections

  private router = inject(Router);

  private location = inject(Location);

  private _sharedService = inject(SharedService);

  private navigationList = inject(generateToken(NavigationMenuItems));

  constructor() {
    super();
    this.currentHref = this.location.path();
    this.anotherSubscription = this.router.events.subscribe((val) => {
      this.currentHref = this.location.path();
    });
  }

  public hasActiveLink(navItem: INavigationItem) {
    const activePath = navItem.activePath ?? '';
    return (
      (navItem.activePath === this.currentHref && navItem.path) ||
      (navItem.path && navItem.path === this.currentHref) ||
      (navItem.items && this.currentHref.includes(activePath)) ||
      false
    );
  }

  public closeSideBar() {
    if (window.innerWidth < 768) {
      this._sharedService.toggleHamburgerClass();
    }
  }

  PrepareNavigationList(list: INavigationItem[]) {
    return list.filter((item) => {
      const matches = true;
      if (item.items && item.items.length > 0) {
        const filteredChildren = this.PrepareNavigationList(item.items);
        if (filteredChildren.length > 0) {
          item.items = filteredChildren;
          return true;
        }
      }
      return matches;
    });
  }

  public showSubItem(navigationItem: any, event: any) {
    
    this.showItem !=this.showItem
    console.log(this.showItem, event.target, navigationItem);
  }

  get getNavigationList() {
    return this.PrepareNavigationList(this.navigationList);
  }
}
