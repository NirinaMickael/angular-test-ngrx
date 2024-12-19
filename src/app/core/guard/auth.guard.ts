import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = true // should acces token 
  const router = inject(Router)
  if (!isLoggedIn) {
    router.navigate(['/']);
  }
  return true;
};
