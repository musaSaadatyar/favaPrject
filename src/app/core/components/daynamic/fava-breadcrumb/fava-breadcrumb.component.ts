import { Location, NgIf } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { IBhrBreadcrumb } from './fava-breadcrumb.helper';
import { DynamicBreadcrumbService } from './fava-breadcrumb.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-fava-breadcrumb',
  templateUrl: './fava-breadcrumb.component.html',
  styleUrl: './fava-breadcrumb.component.css',
  standalone: true,
  imports: [NgIf],
})
export class FavaBreadcrumbComponent implements OnInit {
  public items$!: Observable<IBhrBreadcrumb[]>;

  @Input() backButton: boolean = false;

  private previousUrl!: string;

  private currentUrl!: string;

  //inject
  private _dynamicBreadcrumbService = inject(DynamicBreadcrumbService);
  private router = inject(Router);
  private location = inject(Location);

  ngOnInit(): void {
    this.breadcrumbEvent()
    this.items$ = this._dynamicBreadcrumbService.breadcrumb$;

  }

  private breadcrumbEvent() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
        if (!this.currentUrl || this.currentUrl == '/') {
          this.backButton = false;
        } else {
          this.backButton = true;
        }
      });
  }

  goBack() {
    const url = this.previousUrl || '/';
    this.router.navigateByUrl(url);
    this.location.back();
  }
}
