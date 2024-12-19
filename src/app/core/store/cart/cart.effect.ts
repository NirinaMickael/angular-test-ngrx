import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { addToCart } from './cart.action';
import { tap } from 'rxjs/operators';

@Injectable()
export class CartEffects {
  saveCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addToCart),
        tap(() => console.log('Panier sauvegardé sur le backend'))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
