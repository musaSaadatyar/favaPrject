import { Component, OnInit } from '@angular/core';
import { Unsubscriber } from '../../core/utils/unsubscriber';
import { slideInAnimation } from '../../core/constants/animations/slide-in.const';
import { SharedService } from '../../shared/service/shared.service';
import { FavaLoadingComponent } from '../../core/components/static/fava-loading/fava-loading.component';
import { BehaviorSubject } from 'rxjs';
import { NavHeaderComponent } from '../../core/components/static/nav-header/nav-header.component';
import { HeaderComponent } from "../../core/components/static/header/header.component";
import { NavigationComponent } from '../../core/components/static/navigation/navigation.component';
import { ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';
import { FavaBreadcrumbComponent } from "../../core/components/daynamic/fava-breadcrumb/fava-breadcrumb.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [
    FavaLoadingComponent,
    NavHeaderComponent,
    HeaderComponent,
    NavigationComponent,
    RouterOutlet,
    FavaBreadcrumbComponent
],
  animations: [slideInAnimation],
})
export class HomeComponent extends Unsubscriber implements OnInit {

  public showLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public loadModules = true;

  public backButton = false;


  constructor(
    public _sharedService: SharedService,
    private contexts: ChildrenOutletContexts,
    private router: Router,

  ) {
    super()
  }

  ngOnInit(): void {
    this.showLoading.next(false);
     this.backButton = this.router?.url !== '/'
  }

  public getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
