import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable()
export class Unsubscriber implements OnDestroy
{

  private _subscription = new Subscription();

  ngOnDestroy(): void
  {
    this.resetSubscriptions();
  }

  protected resetSubscriptions():void
  {
    if(this._subscription)
    {
      this._subscription.unsubscribe();
    }
  }

  set anotherSubscription(sub: Subscription)
  {
    this._subscription.add(sub);
  }

}
