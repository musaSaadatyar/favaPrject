import { Component } from '@angular/core';
import { Unsubscriber } from '../../core/utils/unsubscriber';
import { slideInAnimation } from '../../core/constants/animations/slide-in.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [

  ],
  animations:[slideInAnimation]
})
export class HomeComponent extends Unsubscriber {

}
