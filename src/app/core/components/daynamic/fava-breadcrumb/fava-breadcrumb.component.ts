import { CommonModule, Location, NgIf } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { IFAvaBreadcrumb } from './fava-breadcrumb.helper';
import { DynamicBreadcrumbService } from './fava-breadcrumb.service';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'fava-breadcrumb',
  templateUrl: './fava-breadcrumb.component.html',
  styleUrl: './fava-breadcrumb.component.css',
  standalone: true,
  imports: [CommonModule, NgIf, RouterModule, ButtonModule],
})
export class FavaBreadcrumbComponent implements OnInit {
  public items$!: Observable<IFAvaBreadcrumb[]>;

  @Input() backButton: boolean = false;

  private previousUrl!: string;

  private currentUrl!: string;

  constructor(
    private _dynamicBreadcrumbService: DynamicBreadcrumbService,
    private router: Router,
    private location: Location
  ) {
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

  ngOnInit(): void {
    this.items$ = this._dynamicBreadcrumbService.breadcrumb$;
  }


  goBack() {
    const url = this.previousUrl || '/';
    this.router.navigateByUrl(url);
    this.location.back();
  }
}
