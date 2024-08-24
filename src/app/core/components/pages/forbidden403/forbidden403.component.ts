import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-forbidden403',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './forbidden403.component.html',
  styleUrl: './forbidden403.component.css',
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
