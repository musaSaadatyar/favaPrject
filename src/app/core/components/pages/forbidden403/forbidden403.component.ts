import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FavaButtonComponent } from '../../daynamic/fava-button/fava-button.component';

@Component({
  selector: 'app-forbidden403',
  templateUrl: './forbidden403.component.html',
  styleUrl: './forbidden403.component.css',
  standalone: true,
  imports: [
    TranslateModule,
    FavaButtonComponent

  ],
})
export class Forbidden403Component {
  constructor(private router: Router) {}
  private transLate = inject(TranslateService);

  title = this.transLate.instant('UN_ACCESS');
  goBack() {
    window.history.back();
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
