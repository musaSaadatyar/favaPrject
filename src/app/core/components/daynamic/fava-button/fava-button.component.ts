import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fava-button',
  templateUrl: './fava-button.component.html',
  styleUrl: './fava-button.component.css',
  standalone: true,
  imports: [],
})
export class FavaButtonComponent {

  @Input()
  public btnTitle: string;

  @Input()
  public btnpTooltip?: string;

  @Input()
  public btnDisabled?: boolean;

  @Input()
  public btnType?: 'submit' | 'button' | 'reset';

  @Input()
  public buttonClass?: string;

  @Input()
  public icon?: string;

  @Input()
  public iconPlacement?: 'start' | 'end';

  @Input()
  public spinner?: boolean;

  @Input()
  public spinnerColor?: 'accent' | 'primary' | 'warn';

  @Output()
  public btnClick = new EventEmitter();

  public clickHandler(event:any)
  {
    this.btnClick.emit(event)
  }
}
