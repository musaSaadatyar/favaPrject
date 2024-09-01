import { EMPTY, Observable, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import swal from 'sweetalert2';

import { IBhrTable } from 'core/components/dynamics/bhr-table/bhr-table.interface';

export const pipedPreConfirmObs$ = <T = any>(obs$: Observable<T>): Observable<T> =>
 obs$
    .pipe(
      catchError(
        () =>
        {
          swal.close();
          return EMPTY;
        }
      )
    );

export const pipedPreConfirmDelete$ =<T = any>( config: IBhrTable ,obs$: Observable<T> ): Observable<T> =>
  pipedPreConfirmObs$<T>(obs$)
    .pipe(
      tap(
       ()=> config?.actions?.rowActions?.delete?.useSpinner?.next(null)
      )
    );
