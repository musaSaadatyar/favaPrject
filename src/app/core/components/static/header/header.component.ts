import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
  imports: [
    AvatarModule, 
    AvatarGroupModule, 
    TranslateModule, 
    RouterModule,
    FormsModule,
    NgbModule
  ],
})
export class HeaderComponent implements OnInit {
  currentCulture: string = 'EN';
  profileUrl: string;

  currentUser$ = true;

  userOption !: any[];

  private translate=inject(TranslateService)
  ngOnInit(): void {
    this.profileUrl = `/kjsdf`;
    this.userOption = [
      {name: this.translate.instant('USER_ACCOUNT'), code:'User'}
    ]
  }

  public redirectToResetPassword() {}

  public logout() {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.clear();
  }
}
