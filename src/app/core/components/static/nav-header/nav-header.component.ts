import { CommonModule, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from '../../../../shared/service/shared.service';
import { Unsubscriber } from '../../../utils/unsubscriber';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule,
    NgIf,

  ],
})
export class NavHeaderComponent extends Unsubscriber {
  public $hamburgerIcon = new BehaviorSubject(true);

  public windows = true;

  private screenHeight: number;

  private screenWidth: number;

  constructor(public _sharedService: SharedService) {
    super();
    this.getScreenSize();
  }

  public getHamburgerIcon(){
    this.anotherSubscription =
      this._sharedService.$hamburgerClass.subscribe(val => {
        this.$hamburgerIcon.next(val);
      });
  }

  public toggleHamburgerClass() {
    this._sharedService.toggleHamburgerClass();
    this.getHamburgerIcon();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?:any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.windows = false;
      document.body.setAttribute('data-sidebar-style', 'overlay');
    } else if (this.screenWidth >= 768 && this.screenWidth <= 1023) {
      document.body.setAttribute('data-sidebar-style', 'mini');
      this.windows = false;
    } else {
      document.body.setAttribute('data-sidebar-style', 'full');
    }
  }
}
