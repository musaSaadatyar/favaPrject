import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forbidden403',
  standalone: true,
  imports: [],
  templateUrl: './forbidden403.component.html',
  styleUrl: './forbidden403.component.css'
})
export class Forbidden403Component {

  constructor(private router: Router) {}

  goBack() {
    window.history.back();
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
