import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fava-loading',
  templateUrl: './fava-loading.component.html',
  styleUrl: './fava-loading.component.css',
  standalone: true,
  imports: [
    NgIf,

  ],
})
export class FavaLoadingComponent implements OnInit {

  @Input()
  public showLoading = true;
  @Input()
  public loaderSize: 'sm' | 'md' | 'lg' = 'md'

  public wrapperClasses: Record<string, boolean>;


  public ngOnInit(): void
  {
    this.wrapperClasses =
      {
        "cmp-wrapper": true,
        "cmp-wrapper-sm": this.loaderSize=== "sm",
        "cmp-wrapper-md": this.loaderSize=== "md",
        "cmp-wrapper-lg": this.loaderSize=== "lg"
      }
  }
}
