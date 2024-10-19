import { CommonModule, Location } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  inject,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { INavigationItem } from './navigation.interface';
import { Unsubscriber } from '../../../utils/unsubscriber';
import { Router, RouterLink } from '@angular/router';
import { generateToken } from '../../../../shared/helpers/generate-token';
import { NavigationMenuItems } from './constants/navigation.const';
import { SharedService } from '../../../../shared/service/shared.service';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  standalone: true,
  imports: [CommonModule, RouterLink, PanelMenuModule],
})
export class NavigationComponent extends Unsubscriber {
  public currentHref: string;

  @HostBinding('class.mx-auto')
  marginAuto = true;

  @ViewChild('menu', { static: true }) menu: ElementRef;

  public activePath: string;

  public showItems: boolean;
  // injections

  private router = inject(Router);

  private location = inject(Location);

  private _sharedService = inject(SharedService);

  private navigationList = inject(generateToken(NavigationMenuItems));

  constructor(private renderer: Renderer2) {
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

  private removeActiveClass(parentLi: HTMLElement) {
    const allParentLis = this.menu.nativeElement.querySelectorAll('ul > li');
    allParentLis.forEach((li: HTMLElement) => {
      if (li !== parentLi) {
        li.classList.remove('mm-active');
      }
    });
  }

  private removedNoneClass(parentLi: HTMLElement) {
    const allChildLis = this.menu.nativeElement.querySelectorAll(
      'ul li > a:not(.ai-icon)'
    );
    allChildLis.forEach((li: HTMLElement) => {
      if (li !== parentLi && !parentLi.classList.contains('mm-active')) {
        li.classList.add('d-none');
      }
    });
  }

  private addRemoveClass(parentLi: HTMLElement) {
    const subItems = parentLi.querySelectorAll('li ul li a');
    subItems.forEach((item: any) => {
      if (item.classList.contains('d-none')) {
        item.classList.remove('d-none');
      } else {
        item.classList.add('d-none');
      }
    });

    if (parentLi.classList.contains('mm-active')) {
      parentLi.classList.remove('mm-active');
    } else {
      parentLi.classList.add('mm-active');
    }
  }

  public showSubItem(navigationItem: INavigationItem, event: any) {
    event.stopPropagation();
    const parentLi = event.currentTarget.closest('li');
    if (parentLi) {
      this.removeActiveClass(parentLi);
      this.removedNoneClass(parentLi);
      this.addRemoveClass(parentLi);
    }
  }

  get getNavigationList() {
    return this.PrepareNavigationList(this.navigationList);
  }
}
