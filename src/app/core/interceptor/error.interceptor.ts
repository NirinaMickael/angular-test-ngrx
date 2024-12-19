import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        alert(err.message) // should use toat
      } else {
        console.error('An error occurred:', err);
      }
      return throwError(() => err); 
    })
  );;
};