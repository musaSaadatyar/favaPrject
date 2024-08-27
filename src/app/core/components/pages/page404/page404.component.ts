import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FavaButtonComponent } from '../../daynamic/fava-button/fava-button.component';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.css',
  standalone: true,
  imports: [
    TranslateModule,
    FavaButtonComponent
  ],
})
export class Page404Component {

  //INJECT
  private router= inject(Router)

  public  goBack() {
    window.history.back();
  }

  public goHome() {
    this.router.navigate(['/']);
  }
}
