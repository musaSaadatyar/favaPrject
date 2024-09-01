import { InjectionToken } from '@angular/core';

export function generateToken<T= unknown>(factory: ()=> T  , tokenName = 'default'): InjectionToken<T>
{
  return new InjectionToken<T>(
    tokenName,
    {
      providedIn: 'root',
      factory
    }
  )
}
