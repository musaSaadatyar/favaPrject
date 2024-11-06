import { CommonModule, isPlatformBrowser, NgIf } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from '../../../../shared/service/shared.service';
import { Unsubscriber } from '../../../utils/unsubscriber';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, FormsModule],
})
export class NavHeaderComponent extends Unsubscriber {
  public $hamburgerIcon = new BehaviorSubject(true);

  public windows = true;

  public searchValue: any;
  
  private screenHeight: number;

  private screenWidth: number;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public _sharedService: SharedService
  ) {
    super();
    if (isPlatformBrowser(this.platformId)) {
      this.getScreenSize();
    }
  }

  public getHamburgerIcon() {
    this.anotherSubscription = this._sharedService.$hamburgerClass.subscribe(
      (val) => {
        this.$hamburgerIcon.next(val);
      }
    );
  }

  public toggleHamburgerClass() {
    console.log('toggleHamburgerClass');
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
