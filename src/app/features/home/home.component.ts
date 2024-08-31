import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SharedService } from '../../shared/service/shared.service';
import { Router } from 'express';
import { Unsubscriber } from '../../core/utils/unsubscriber';
import { BehaviorSubject } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { FavaBreadcrumbComponent } from '../../core/components/daynamic/fava-breadcrumb/fava-breadcrumb.component';
import { NavHeaderComponent } from '../../core/components/static/nav-header/nav-header.component';
import { FavaLoadingComponent } from '../../core/components/static/fava-loading/fava-loading.component';
import { HeaderComponent } from '../../core/components/static/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [
    CommonModule, 
    NgIf, 
    TranslateModule,
    FavaBreadcrumbComponent,
    NavHeaderComponent,
    FavaLoadingComponent,
    HeaderComponent
  ],
})
export class HomeComponent extends Unsubscriber {
  //inject
  public showLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);


  constructor(public _sharedService: SharedService, private router: Router) {
    super();
  }
}
