import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { metaEffects, metaReducers } from './core/store';
import { provideEffects } from '@ngrx/effects';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ErrorInterceptor } from './core/interceptor';
import { ProductService } from './core/services/produit.service';
import { MainService } from './core/services/main.service';
import { cartReducer } from './core/store/cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    ProductService,MainService,
    provideHttpClient(withInterceptors([ErrorInterceptor])),
     provideClientHydration(), 
     provideStore({
      cart:cartReducer
     }), provideEffects(metaEffects)]
};
